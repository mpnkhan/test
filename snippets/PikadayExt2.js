import { createRemediation } from '../../common';

createRemediation(
  '2280639',
  'ARD-1636',
  '*',
  ({
    waitUntil,
    loopThroughElements,
    injectStylesheet,
    generateRandomId,
    getFocusableElement,
    fireEvent,
    focusableElementsSelector,
    isElementVisible,
    keys,
    log,
  }) => {
    //pikaday datepicker
    const $ = window.jQuery;

    if (!$) {
      return;
    }

    injectStylesheet(
      `
        .pika-single button:focus,
        #arrive-date:focus,
        #depart-date:focus {
          outline: 2px solid rgb(0, 24, 255) !important;
          outline-offset: -2px;
        }
      `,
    );

    const mimicPikadayAction = function (field, datepickerEl, cls) {
      //prevent focus from going to trigger
      field.type = 'hidden';
      fireEvent(this, 'mousedown');
      waitUntil(
        () => datepickerEl.querySelector(`${cls}[uw-csr-remediated]`),
        (btn) => {
          field.type = 'text';
          setTimeout(() => {
            btn.focus();
          }, 101);
        },
      );
    };

    const datepickerElClickHandler = (field) =>
      function (evt) {
        const datepickerEl = field.controls;
        evt.stopPropagation();

        if (this.classList.contains('pika-prev')) {
          mimicPikadayAction.apply(this, [field, datepickerEl, '.pika-prev']);
        } else if (this.classList.contains('pika-next')) {
          mimicPikadayAction.apply(this, [field, datepickerEl, '.pika-next']);
        } else {
          fireEvent(this, 'mousedown');
        }
      };

    const trapFocusDynamicContent = function (
      wrapper,
      { shouldBeInViewport = true, skipParentCheck = false } = {},
    ) {
      let focusableElements = [];

      const setFocusableElements = () => {
        focusableElements = Array.from(wrapper.querySelectorAll(focusableElementsSelector)).filter(
          (el) => isElementVisible(el, { shouldBeInViewport, skipParentCheck }),
        );
      };

      const handleTabKeydown = (e) => {
        if (!keys.isTab(e)) {
          return;
        }
        e.preventDefault();
        setFocusableElements();
        if (!focusableElements.length) {
          return;
        }

        const lastIndex = focusableElements.length - 1;
        const currentIndex = focusableElements.findIndex((el) => el === e.currentTarget);
        let nextIndex = null;
        if (currentIndex < 0) {
          nextIndex = 0;
        } else if (e.shiftKey) {
          nextIndex = currentIndex - 1;
          if (nextIndex < 0) {
            nextIndex = lastIndex;
          }
        } else {
          nextIndex = currentIndex + 1;
          if (nextIndex > lastIndex) {
            nextIndex = 0;
          }
        }
        if (nextIndex !== null && focusableElements[nextIndex]) {
          setKeydownListener(focusableElements[nextIndex]);
          focusableElements[nextIndex].focus();
        }
      };
      const setKeydownListener = (focusableElement) => {
        if (!focusableElement.getAttribute('uw-csr-trap-focus-dynamic-content')) {
          focusableElement.addEventListener('keydown', handleTabKeydown);
          focusableElement.setAttribute('uw-csr-trap-focus-dynamic-content', '');
        }
      };

      const setInactiveKeydownListener = (focusableElement) => {
        if (!focusableElement.getAttribute('uw-csr-trap-focus-dynamic-content')) {
          focusableElement.addEventListener('keydown', function (evt) {
            if (keys.isTab(evt)) {
              setFocusableElements();
              evt.preventDefault();
              //next btn
              focusableElements[1]?.focus();
            }
          });
          focusableElement.setAttribute('uw-csr-trap-focus-dynamic-content', '');
        }
      };

      loopThroughElements('[tabindex="-1"]', setInactiveKeydownListener, { ancestor: wrapper });
      loopThroughElements(focusableElementsSelector, setKeydownListener, { ancestor: wrapper });
    };

    const fieldOnKeyDown = function (evt) {
      if (keys.isSpace(evt) || keys.isEnter(evt) || keys.isArrowDown(evt)) {
        evt.preventDefault();
        this.click();
      }
    };

    const dayBtnKeydownHandler = (datepicker, elementIdx) =>
      function (evt) {
        const container = datepicker.el;
        let targetEl = null,
          selector = '.pika-next';
        if (keys.isArrowUp(evt)) {
          targetEl = getElementByIndex(container, '.pika-button.pika-day', elementIdx - 7);
          selector = '.pika-prev';
        } else if (keys.isArrowDown(evt)) {
          targetEl = getElementByIndex(container, '.pika-button.pika-day', elementIdx + 7);
          selector = '.pika-next';
        } else if (keys.isArrowLeft(evt)) {
          targetEl = getElementByIndex(container, '.pika-button.pika-day', elementIdx - 1);
          selector = '.pika-prev';
        } else if (keys.isArrowRight(evt)) {
          targetEl = getElementByIndex(container, '.pika-button.pika-day', elementIdx + 1);
          selector = '.pika-next';
        } else {
          return;
        }
        if (targetEl) {
          targetEl.focus();
        } else {
          waitUntil(
            () => container.querySelector(selector),
            (btn) => {
              btn.click();
              setTimeout(() => {
                let dayBtnSelector = 'td:not(.is-outside-current-month) [data-pika-day]';
                if (selector === '.pika-prev') {
                  dayBtnSelector =
                    'tr:last-child td:not(.is-outside-current-month) [data-pika-day]';
                }
                const focusableEl = container.querySelector(dayBtnSelector);
                focusableEl?.focus();
              }, 150);
            },
          );
        }
        evt.preventDefault();
      };

    const dayBtnFocusHandler = (container) =>
      function () {
        const parentEl = this.parentElement;
        if (!parentEl.classList.contains('is-outside-current-month')) {
          return;
        }

        //when is-outside-current-month day is focused
        const day = this.getAttribute('data-pika-day');
        const isGoingNext = parseInt(day) < 15;
        const selector = isGoingNext ? '.pika-next' : '.pika-prev';

        waitUntil(
          () => container.querySelector(selector),
          (btn) => {
            btn.click();
            setTimeout(() => {
              //current month has selected,
              if (!container.querySelector('td.is-selected')) {
                const focusableEl = container.querySelector(`[data-pika-day="${day}"]`);
                const firstDayBtn = container.querySelector('[data-pika-day="1"]');
                firstDayBtn?.setAttribute('tabindex', -1);

                focusableEl.setAttribute('tabindex', 0);
                focusableEl?.focus();
              }
            }, 150);
          },
        );
      };

    const setDayBtnLabel = (dayBtn) => {
      const year = dayBtn.getAttribute('data-pika-year');
      const month = dayBtn.getAttribute('data-pika-month');
      const day = dayBtn.getAttribute('data-pika-day');
      dayBtn.setAttribute('aria-label', `${parseInt(month) + 1}/${day}/${year}`);
    };

    const remediateDatepickerElements = (field, datepicker) => {
      const container = field.controls;
      const prevBtn = container.querySelector('.pika-prev');
      const nextBtn = container.querySelector('.pika-next');
      const selectMonth = container.querySelector('.pika-select.pika-select-month');
      const selectYear = container.querySelector('.pika-select.pika-select-year');
      const table = container.querySelector('table.pika-table');

      if (prevBtn) {
        prevBtn.setAttribute('aria-label', 'previous month');
        prevBtn.setAttribute('data-uw-rm-ignore', 1);
        if (!prevBtn.getAttribute('uw-csr-remediated')) {
          prevBtn.addEventListener('click', datepickerElClickHandler(field));
          prevBtn.setAttribute('uw-csr-remediated', 1);
        }
      }

      if (nextBtn) {
        nextBtn.setAttribute('aria-label', 'next month');
        nextBtn.setAttribute('data-uw-rm-ignore', 1);
        if (!nextBtn.getAttribute('uw-csr-remediated')) {
          nextBtn.addEventListener('click', datepickerElClickHandler(field));
          nextBtn.setAttribute('uw-csr-remediated', 1);
        }
      }

      if (selectMonth) {
        selectMonth.setAttribute('aria-live', 'polite');
        selectMonth.setAttribute('aria-label', 'month');
      }

      if (selectYear) {
        selectYear.setAttribute('aria-live', 'polite');
        selectYear.setAttribute('aria-label', 'year');
      }

      if (table) {
        table.setAttribute('role', 'grid');
        const tableLabel =
          container.querySelector('.pika-select-month option[selected]')?.textContent +
          ' ' +
          container.querySelector('.pika-select-year option[selected]')?.textContent;
        table.setAttribute('aria-label', tableLabel);
      }

      container.querySelectorAll('.is-disabled').forEach((disabledBtn) => {
        disabledBtn.setAttribute('aria-disabled', true);
      });

      const daysBtns = Array.from(container.querySelectorAll('.pika-button.pika-day'));
      const dayBtnSelected = daysBtns.find((dayBtn) =>
        dayBtn.parentElement.classList.contains('is-selected'),
      );

      daysBtns.forEach((dayBtn, elementIdx) => {
        let tabindex = -1;

        if (dayBtnSelected) {
          if (dayBtn === dayBtnSelected) {
            tabindex = 0;
            dayBtn.setAttribute('aria-selected', true);
          }
        } else {
          const isDataPikaDayOne =
            dayBtn.getAttribute('data-pika-day') === '1' &&
            !dayBtn.parentElement.classList.contains('is-outside-current-month');

          if (isDataPikaDayOne) {
            tabindex = 0;
          }
        }

        dayBtn.setAttribute('tabindex', tabindex);

        if (dayBtn.getAttribute('uw-csr-remediated')) {
          return;
        }

        dayBtn.addEventListener('keydown', dayBtnKeydownHandler(datepicker, elementIdx));
        dayBtn.addEventListener('focus', dayBtnFocusHandler(container));
        dayBtn.addEventListener('click', datepickerElClickHandler(field));
        dayBtn.setAttribute('uw-csr-remediated', 1);
        dayBtn.setAttribute('data-uw-rm-ignore', 1);
        setDayBtnLabel(dayBtn);
      });
    };

    const remediateDialog = (el, field) => {
      const label = field.getAttribute('placeholder') || '';
      el.id = el.id || generateRandomId();
      el.setAttribute('aria-modal', true);
      el.setAttribute('tabindex', -1);
      el.setAttribute('aria-label', `Choose ${label} date`);
      el.setAttribute('role', 'dialog');
    };

    const getElementByIndex = (container, selector, idx) => {
      const elements = Array.from(container.querySelectorAll(selector));
      return elements[idx];
    };

    const remediate = (field) => {
      waitUntil(
        () => $(field).data('pikaday'),
        (datepicker) => {
          datepicker.hide();
          const ogOnSelect = datepicker._o?.onSelect;

          const options = {
            onOpen: function () {
              field.setAttribute('aria-expanded', true);
              setTimeout(() => {
                const focusableEl =
                  field.controls.querySelector('.is-selected .pika-button.pika-day') ||
                  getFocusableElement('next', field.controls, {
                    childrenOnly: true,
                  });
                focusableEl?.focus();
              }, 200);
            },
            onDraw: function () {
              remediateDatepickerElements(field, datepicker);
              trapFocusDynamicContent(field.controls);
            },
            onClose: function () {
              field.setAttribute('aria-expanded', false);
              field.setAttribute('aria-hidden', true);
              setTimeout(() => {
                field.focus();
              }, 101);
            },
            onSelect: function () {
              // code from site
              if (ogOnSelect) {
                try {
                  ogOnSelect();
                } catch (e) {
                  log('trying to use onSelect of parkterrace');
                }
              }
              field.focus();
              datepicker.hide();
            },
          };
          datepicker.config(options);

          const datepickerEl = datepicker.el;
          field.removeEventListener('click', datepicker._onInputClick);
          field.removeEventListener('focus', datepicker._onInputFocus);
          field.removeEventListener('blur', datepicker._onInputBlur);

          remediateDialog(datepickerEl, field);
          field.controls = datepickerEl;

          field.setAttribute('aria-readonly', true);
          field.setAttribute('aria-controls', datepickerEl.id);
          field.setAttribute('aria-expanded', false);
          field.setAttribute('aria-haspopup', 'dialog');
          field.addEventListener('keydown', fieldOnKeyDown);

          const closeOnEsc = function (evt) {
            if (keys.isEsc(evt)) {
              evt.preventDefault();
              datepicker.hide();
              field.focus();
            }
          };

          field.addEventListener('keydown', closeOnEsc);
          datepickerEl.addEventListener('keydown', closeOnEsc);
        },
      );
    };

    waitUntil(() => document.getElementById('arrive-date'), remediate);
    waitUntil(() => document.getElementById('depart-date'), remediate);
  },
);
