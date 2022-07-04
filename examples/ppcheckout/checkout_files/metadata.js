addMetadata("US", "en", {
  "addressEntry": {
    "layout": [
      {
        "$": "line1",
        "_": "",
        "required": true
      },
      {
        "$": "line2",
        "_": ""
      },
      {
        "$": "city",
        "_": "",
        "required": true
      },
      {
        "$": "state",
        "_": "",
        "required": true
      },
      {
        "$": "postcode",
        "_": "",
        "maxLength": 10,
        "required": true,
        "validationPattern": "\\d{5}([ \\-]\\d{4})?"
      }
    ],
    "strings": {
      "AD": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "AE": {
        "cityLabel": "City",
        "line1Label": "PO Box",
        "line2Label": "Additional information",
        "optionalLabel": "(optional)",
        "stateLabel": "Emirate",
        "stateList": [
          {
            "$elt": "Abu Dhabi",
            "$id": "Abu Dhabi"
          },
          {
            "$elt": "Ajman",
            "$id": "Ajman"
          },
          {
            "$elt": "Dubai",
            "$id": "Dubai"
          },
          {
            "$elt": "Fujairah",
            "$id": "Fujairah"
          },
          {
            "$elt": "Ras al-Khaimah",
            "$id": "Ras al-Khaimah"
          },
          {
            "$elt": "Sharjah",
            "$id": "Sharjah"
          },
          {
            "$elt": "Um al-Quwain",
            "$id": "Umm al-Quwain"
          }
        ]
      },
      "AG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "AI": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "AL": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "AM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "AN": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "AO": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "AR": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Buenos Aires (Ciudad)",
            "$id": "CIUDAD AUTÓNOMA DE BUENOS AIRES"
          },
          {
            "$elt": "Buenos Aires (Provincia)",
            "$id": "BUENOS AIRES"
          },
          {
            "$elt": "Catamarca",
            "$id": "CATAMARCA"
          },
          {
            "$elt": "Chaco",
            "$id": "CHACO"
          },
          {
            "$elt": "Chubut",
            "$id": "CHUBUT"
          },
          {
            "$elt": "Córdoba",
            "$id": "CÓRDOBA"
          },
          {
            "$elt": "Corrientes",
            "$id": "CORRIENTES"
          },
          {
            "$elt": "Entre Ríos",
            "$id": "ENTRE RÍOS"
          },
          {
            "$elt": "Formosa",
            "$id": "FORMOSA"
          },
          {
            "$elt": "Jujuy",
            "$id": "JUJUY"
          },
          {
            "$elt": "La Pampa",
            "$id": "LA PAMPA"
          },
          {
            "$elt": "La Rioja",
            "$id": "LA RIOJA"
          },
          {
            "$elt": "Mendoza",
            "$id": "MENDOZA"
          },
          {
            "$elt": "Misiones",
            "$id": "MISIONES"
          },
          {
            "$elt": "Neuquén",
            "$id": "NEUQUÉN"
          },
          {
            "$elt": "Río Negro",
            "$id": "RÍO NEGRO"
          },
          {
            "$elt": "Salta",
            "$id": "SALTA"
          },
          {
            "$elt": "San Juan",
            "$id": "SAN JUAN"
          },
          {
            "$elt": "San Luis",
            "$id": "SAN LUIS"
          },
          {
            "$elt": "Santa Cruz",
            "$id": "SANTA CRUZ"
          },
          {
            "$elt": "Santa Fe",
            "$id": "SANTA FE"
          },
          {
            "$elt": "Santiago del Estero",
            "$id": "SANTIAGO DEL ESTERO"
          },
          {
            "$elt": "Tierra del Fuego",
            "$id": "TIERRA DEL FUEGO"
          },
          {
            "$elt": "Tucumán",
            "$id": "TUCUMÁN"
          }
        ],
        "validationError": "Your postal code must be 8 characters in the following format: A9999AAA"
      },
      "AT": {
        "cityLabel": "City",
        "line1Label": "Street and house number",
        "line2Label": "Additional information",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "AU": {
        "cityLabel": "City / Suburb",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "selectLabel": "Select",
        "stateLabel": "State / Territory",
        "stateList": [
          {
            "$elt": "Australian Capital Territory",
            "$id": "ACT"
          },
          {
            "$elt": "New South Wales",
            "$id": "NSW"
          },
          {
            "$elt": "Northern Territory",
            "$id": "NT"
          },
          {
            "$elt": "Queensland",
            "$id": "QLD"
          },
          {
            "$elt": "South Australia",
            "$id": "SA"
          },
          {
            "$elt": "Tasmania",
            "$id": "TAS"
          },
          {
            "$elt": "Victoria",
            "$id": "VIC"
          },
          {
            "$elt": "Western Australia",
            "$id": "WA"
          }
        ],
        "validationError": "Your postcode must be 4 digits."
      },
      "AW": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "AZ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BA": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BB": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BE": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits and cannot begin with 0."
      },
      "BF": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BG": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 4 digits."
      },
      "BH": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BI": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BJ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BN": {
        "cityLabel": "Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Post code",
        "stateLabel": "District / Capital",
        "stateList": [
          {
            "$elt": "Bandar Seri Begawan",
            "$id": "Bandar Seri Begawan"
          },
          {
            "$elt": "Belait",
            "$id": "Belait"
          },
          {
            "$elt": "Brunei-Muara",
            "$id": "Brunei-Muara"
          },
          {
            "$elt": "Temburong",
            "$id": "Temburong"
          },
          {
            "$elt": "Tutong",
            "$id": "Tutong"
          }
        ],
        "validationError": "Your post code must consist of 2 letters followed by 4 digits."
      },
      "BO": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BR": {
        "cityLabel": "City",
        "line1Label": "Address",
        "line2Label": "Neighborhood",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "State",
        "stateList": [
          {
            "$elt": "Acre",
            "$id": "AC"
          },
          {
            "$elt": "Alagoas",
            "$id": "AL"
          },
          {
            "$elt": "Amapá",
            "$id": "AP"
          },
          {
            "$elt": "Amazonas",
            "$id": "AM"
          },
          {
            "$elt": "Bahia",
            "$id": "BA"
          },
          {
            "$elt": "Ceará",
            "$id": "CE"
          },
          {
            "$elt": "Distrito Federal",
            "$id": "DF"
          },
          {
            "$elt": "Espírito Santo",
            "$id": "ES"
          },
          {
            "$elt": "Goiás",
            "$id": "GO"
          },
          {
            "$elt": "Maranhão",
            "$id": "MA"
          },
          {
            "$elt": "Mato Grosso",
            "$id": "MT"
          },
          {
            "$elt": "Mato Grosso do Sul",
            "$id": "MS"
          },
          {
            "$elt": "Minas Gerais",
            "$id": "MG"
          },
          {
            "$elt": "Pará",
            "$id": "PA"
          },
          {
            "$elt": "Paraíba",
            "$id": "PB"
          },
          {
            "$elt": "Paraná",
            "$id": "PR"
          },
          {
            "$elt": "Pernambuco",
            "$id": "PE"
          },
          {
            "$elt": "Piauí",
            "$id": "PI"
          },
          {
            "$elt": "Rio de Janeiro",
            "$id": "RJ"
          },
          {
            "$elt": "Rio Grande do Norte",
            "$id": "RN"
          },
          {
            "$elt": "Rio Grande do Sul",
            "$id": "RS"
          },
          {
            "$elt": "Rondônia",
            "$id": "RO"
          },
          {
            "$elt": "Roraima",
            "$id": "RR"
          },
          {
            "$elt": "Santa Catarina",
            "$id": "SC"
          },
          {
            "$elt": "São Paulo",
            "$id": "SP"
          },
          {
            "$elt": "Sergipe",
            "$id": "SE"
          },
          {
            "$elt": "Tocantins",
            "$id": "TO"
          }
        ],
        "validationError": "Your postal code must be 8 digits."
      },
      "BS": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BT": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 5 digits."
      },
      "BW": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "BY": {
        "cityLabel": "Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Brest Region",
            "$id": "Brestskaya Region"
          },
          {
            "$elt": "Gomel Region",
            "$id": "Gomel'skaya Region"
          },
          {
            "$elt": "Grodno Region",
            "$id": "Grodnenskaya Region"
          },
          {
            "$elt": "Minsk",
            "$id": "Minsk"
          },
          {
            "$elt": "Minsk Region",
            "$id": "Minskaya Region"
          },
          {
            "$elt": "Mogilev Region",
            "$id": "Mogilevskaya Region"
          },
          {
            "$elt": "Vitebsk Region",
            "$id": "Vitebskaya Region"
          }
        ],
        "validationError": "Your postal code must be 6 digits."
      },
      "BZ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "C2": {
        "cityLabel": "City / County",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Province / Municipality",
        "stateList": [
          {
            "$elt": "Anhui",
            "$id": "ANHUI"
          },
          {
            "$elt": "Beijing",
            "$id": "BEIJING"
          },
          {
            "$elt": "Chongqing",
            "$id": "CHONGQING"
          },
          {
            "$elt": "Fujian",
            "$id": "FUJIAN"
          },
          {
            "$elt": "Gansu",
            "$id": "GANSU"
          },
          {
            "$elt": "Guangdong",
            "$id": "GUANGDONG"
          },
          {
            "$elt": "Guangxi",
            "$id": "GUANGXI"
          },
          {
            "$elt": "Guizhou",
            "$id": "GUIZHOU"
          },
          {
            "$elt": "Hainan",
            "$id": "HAINAN"
          },
          {
            "$elt": "Hebei",
            "$id": "HEBEI"
          },
          {
            "$elt": "Heilongjiang",
            "$id": "HEILONGJIANG"
          },
          {
            "$elt": "Henan",
            "$id": "HENAN"
          },
          {
            "$elt": "Hong Kong",
            "$id": "XIANGGANG"
          },
          {
            "$elt": "Hubei",
            "$id": "HUBEI"
          },
          {
            "$elt": "Hunan",
            "$id": "HUNAN"
          },
          {
            "$elt": "Inner Mongolia",
            "$id": "NEIMENGGU"
          },
          {
            "$elt": "Jiangsu",
            "$id": "JIANGSU"
          },
          {
            "$elt": "Jiangxi",
            "$id": "JIANGXI"
          },
          {
            "$elt": "Jilin",
            "$id": "JILIN"
          },
          {
            "$elt": "Liaoning",
            "$id": "LIAONING"
          },
          {
            "$elt": "Macau",
            "$id": "AOMEN"
          },
          {
            "$elt": "Ningxia",
            "$id": "NINGXIA"
          },
          {
            "$elt": "Qinghai",
            "$id": "QINGHAI"
          },
          {
            "$elt": "Shaanxi",
            "$id": "SHAANXI"
          },
          {
            "$elt": "Shandong",
            "$id": "SHANDONG"
          },
          {
            "$elt": "Shanghai",
            "$id": "SHANGHAI"
          },
          {
            "$elt": "Shanxi",
            "$id": "SHANXI"
          },
          {
            "$elt": "Sichuan",
            "$id": "SICHUAN"
          },
          {
            "$elt": "Taiwan",
            "$id": "TAIWAN"
          },
          {
            "$elt": "Tianjin",
            "$id": "TIANJIN"
          },
          {
            "$elt": "Tibet",
            "$id": "XIZANG"
          },
          {
            "$elt": "Xinjiang",
            "$id": "XINJIANG"
          },
          {
            "$elt": "Yunnan",
            "$id": "YUNNAN"
          },
          {
            "$elt": "Zhejiang",
            "$id": "ZHEJIANG"
          }
        ],
        "validationError": "Your postal code must be 6 digits."
      },
      "CA": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Alberta",
            "$id": "AB"
          },
          {
            "$elt": "British Columbia",
            "$id": "BC"
          },
          {
            "$elt": "Manitoba",
            "$id": "MB"
          },
          {
            "$elt": "New Brunswick",
            "$id": "NB"
          },
          {
            "$elt": "Newfoundland and Labrador",
            "$id": "NL"
          },
          {
            "$elt": "Northwest Territories",
            "$id": "NT"
          },
          {
            "$elt": "Nova Scotia",
            "$id": "NS"
          },
          {
            "$elt": "Nunavut",
            "$id": "NU"
          },
          {
            "$elt": "Ontario",
            "$id": "ON"
          },
          {
            "$elt": "Prince Edward Island",
            "$id": "PE"
          },
          {
            "$elt": "Quebec",
            "$id": "QC"
          },
          {
            "$elt": "Saskatchewan",
            "$id": "SK"
          },
          {
            "$elt": "Yukon",
            "$id": "YT"
          }
        ],
        "validationError": "Your postal code must be in the format A9A or A9A9A9."
      },
      "CD": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "CG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "CH": {
        "cityLabel": "City",
        "line1Label": "Street and house number",
        "line2Label": "Additional information",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Canton",
        "stateList": [
          {
            "$elt": "Aargau",
            "$id": "AG"
          },
          {
            "$elt": "Appenzell Ausserrhoden",
            "$id": "AR"
          },
          {
            "$elt": "Appenzell Innerrhoden",
            "$id": "AI"
          },
          {
            "$elt": "Basel-Landschaft",
            "$id": "BL"
          },
          {
            "$elt": "Basel-Stadt",
            "$id": "BS"
          },
          {
            "$elt": "Bern",
            "$id": "BE"
          },
          {
            "$elt": "Fribourg",
            "$id": "FR"
          },
          {
            "$elt": "Geneva",
            "$id": "GE"
          },
          {
            "$elt": "Glarus",
            "$id": "GL"
          },
          {
            "$elt": "Graubünden",
            "$id": "GR"
          },
          {
            "$elt": "Jura",
            "$id": "JU"
          },
          {
            "$elt": "Lucerne",
            "$id": "LU"
          },
          {
            "$elt": "Neuchâtel",
            "$id": "NE"
          },
          {
            "$elt": "Nidwalden",
            "$id": "NW"
          },
          {
            "$elt": "Obwalden",
            "$id": "OW"
          },
          {
            "$elt": "Schaffhausen",
            "$id": "SH"
          },
          {
            "$elt": "Schwyz",
            "$id": "SZ"
          },
          {
            "$elt": "Solothurn",
            "$id": "SO"
          },
          {
            "$elt": "St. Gallen",
            "$id": "SG"
          },
          {
            "$elt": "Thurgau",
            "$id": "TG"
          },
          {
            "$elt": "Ticino",
            "$id": "TI"
          },
          {
            "$elt": "Uri",
            "$id": "UR"
          },
          {
            "$elt": "Valais",
            "$id": "VS"
          },
          {
            "$elt": "Vaud",
            "$id": "VD"
          },
          {
            "$elt": "Zug",
            "$id": "ZG"
          },
          {
            "$elt": "Zürich",
            "$id": "ZH"
          }
        ],
        "validationError": "Your postal code must be 4 digits."
      },
      "CI": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)"
      },
      "CK": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "CL": {
        "cityLabel": "Commune / Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Region",
        "stateList": [
          {
            "$elt": "Región Metropolitana de Santiago",
            "$id": "REGIÓN METROPOLITANA"
          },
          {
            "$elt": "I Región de Tarapacá",
            "$id": "I REGIÓN DE TARAPACÁ"
          },
          {
            "$elt": "II Región de Antofagasta",
            "$id": "II REGIÓN DE ANTOFAGASTA"
          },
          {
            "$elt": "III Región de Atacama",
            "$id": "III REGIÓN DE ATACAMA"
          },
          {
            "$elt": "IV Región de Coquimbo",
            "$id": "IV REGIÓN DE COQUIMBO"
          },
          {
            "$elt": "V Región de Valparaíso",
            "$id": "V REGIÓN DE VALPARAÍSO"
          },
          {
            "$elt": "VI Región de O'Higgins",
            "$id": "VI REGIÓN DE O'HIGGINS"
          },
          {
            "$elt": "VII Región del Maule",
            "$id": "VII REGIÓN DEL MAULE"
          },
          {
            "$elt": "VIII Región del Bío Bío",
            "$id": "VIII REGIÓN DEL BIOBÍO"
          },
          {
            "$elt": "IX Región de la Araucanía",
            "$id": "IX REGIÓN DE LA ARAUCANÍA"
          },
          {
            "$elt": "X Región de Los Lagos",
            "$id": "X REGIÓN DE LOS LAGOS"
          },
          {
            "$elt": "XI Región de Aysén",
            "$id": "XI REGIÓN DE AYSÉN"
          },
          {
            "$elt": "XII Región de Magallanes",
            "$id": "XII REGIÓN DE MAGALLANES"
          },
          {
            "$elt": "XIV Región de Los Ríos",
            "$id": "XIV REGIÓN DE LOS RÍOS"
          },
          {
            "$elt": "XV Región de Arica y Parinacota",
            "$id": "XV REGIÓN DE ARICA Y PARINACOTA"
          }
        ],
        "validationError": "Your postal code must be 7 digits."
      },
      "CM": {
        "cityLabel": "Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)"
      },
      "CN": {
        "cityLabel": "City / County",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Province / Municipality",
        "stateList": [
          {
            "$elt": "Anhui",
            "$id": "ANHUI"
          },
          {
            "$elt": "Beijing",
            "$id": "BEIJING"
          },
          {
            "$elt": "Chongqing",
            "$id": "CHONGQING"
          },
          {
            "$elt": "Fujian",
            "$id": "FUJIAN"
          },
          {
            "$elt": "Gansu",
            "$id": "GANSU"
          },
          {
            "$elt": "Guangdong",
            "$id": "GUANGDONG"
          },
          {
            "$elt": "Guangxi",
            "$id": "GUANGXI"
          },
          {
            "$elt": "Guizhou",
            "$id": "GUIZHOU"
          },
          {
            "$elt": "Hainan",
            "$id": "HAINAN"
          },
          {
            "$elt": "Hebei",
            "$id": "HEBEI"
          },
          {
            "$elt": "Heilongjiang",
            "$id": "HEILONGJIANG"
          },
          {
            "$elt": "Henan",
            "$id": "HENAN"
          },
          {
            "$elt": "Hong Kong",
            "$id": "XIANGGANG"
          },
          {
            "$elt": "Hubei",
            "$id": "HUBEI"
          },
          {
            "$elt": "Hunan",
            "$id": "HUNAN"
          },
          {
            "$elt": "Inner Mongolia",
            "$id": "NEIMENGGU"
          },
          {
            "$elt": "Jiangsu",
            "$id": "JIANGSU"
          },
          {
            "$elt": "Jiangxi",
            "$id": "JIANGXI"
          },
          {
            "$elt": "Jilin",
            "$id": "JILIN"
          },
          {
            "$elt": "Liaoning",
            "$id": "LIAONING"
          },
          {
            "$elt": "Macau",
            "$id": "AOMEN"
          },
          {
            "$elt": "Ningxia",
            "$id": "NINGXIA"
          },
          {
            "$elt": "Qinghai",
            "$id": "QINGHAI"
          },
          {
            "$elt": "Shaanxi",
            "$id": "SHAANXI"
          },
          {
            "$elt": "Shandong",
            "$id": "SHANDONG"
          },
          {
            "$elt": "Shanghai",
            "$id": "SHANGHAI"
          },
          {
            "$elt": "Shanxi",
            "$id": "SHANXI"
          },
          {
            "$elt": "Sichuan",
            "$id": "SICHUAN"
          },
          {
            "$elt": "Taiwan",
            "$id": "TAIWAN"
          },
          {
            "$elt": "Tianjin",
            "$id": "TIANJIN"
          },
          {
            "$elt": "Tibet",
            "$id": "XIZANG"
          },
          {
            "$elt": "Xinjiang",
            "$id": "XINJIANG"
          },
          {
            "$elt": "Yunnan",
            "$id": "YUNNAN"
          },
          {
            "$elt": "Zhejiang",
            "$id": "ZHEJIANG"
          }
        ],
        "validationError": "Your postal code must be 6 digits."
      },
      "CO": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Department / Capital District",
        "stateList": [
          {
            "$elt": "Amazonas",
            "$id": "AMAZONAS"
          },
          {
            "$elt": "Antioquia",
            "$id": "ANTIOQUIA"
          },
          {
            "$elt": "Arauca",
            "$id": "ARAUCA"
          },
          {
            "$elt": "Archipiélago de San Andrés, Providencia y Santa Catalina",
            "$id": "ARCHIPIÉLAGO DE SAN ANDRÉS"
          },
          {
            "$elt": "Atlántico",
            "$id": "ATLÁNTICO"
          },
          {
            "$elt": "Bolívar",
            "$id": "BOLÍVAR"
          },
          {
            "$elt": "Boyacá",
            "$id": "BOYACÁ"
          },
          {
            "$elt": "Caldas",
            "$id": "CALDAS"
          },
          {
            "$elt": "Caquetá",
            "$id": "CAQUETÁ"
          },
          {
            "$elt": "Casanare",
            "$id": "CASANARE"
          },
          {
            "$elt": "Cauca",
            "$id": "CAUCA"
          },
          {
            "$elt": "Cesar",
            "$id": "CESAR"
          },
          {
            "$elt": "Chocó",
            "$id": "CHOCÓ"
          },
          {
            "$elt": "Córdoba",
            "$id": "CÓRDOBA"
          },
          {
            "$elt": "Cundinamarca",
            "$id": "CUNDINAMARCA"
          },
          {
            "$elt": "Distrito Capital de Bogotá",
            "$id": "DISTRITO CAPITAL DE BOGOTÁ"
          },
          {
            "$elt": "Guainía",
            "$id": "GUAINÍA"
          },
          {
            "$elt": "Guaviare",
            "$id": "GUAVIARE"
          },
          {
            "$elt": "Huila",
            "$id": "HUILA"
          },
          {
            "$elt": "La Guajira",
            "$id": "LA GUAJIRA"
          },
          {
            "$elt": "Magdalena",
            "$id": "MAGDALENA"
          },
          {
            "$elt": "Meta",
            "$id": "META"
          },
          {
            "$elt": "Nariño",
            "$id": "NARIÑO"
          },
          {
            "$elt": "Norte de Santander",
            "$id": "NORTE DE SANTANDER"
          },
          {
            "$elt": "Putumayo",
            "$id": "PUTUMAYO"
          },
          {
            "$elt": "Quindío",
            "$id": "QUINDÍO"
          },
          {
            "$elt": "Risaralda",
            "$id": "RISARALDA"
          },
          {
            "$elt": "Santander",
            "$id": "SANTANDER"
          },
          {
            "$elt": "Sucre",
            "$id": "SUCRE"
          },
          {
            "$elt": "Tolima",
            "$id": "TOLIMA"
          },
          {
            "$elt": "Valle del Cauca",
            "$id": "VALLE DEL CAUCA"
          },
          {
            "$elt": "Vaupés",
            "$id": "VAUPÉS"
          },
          {
            "$elt": "Vichada",
            "$id": "VICHADA"
          }
        ],
        "validationError": "Your postal code must be 6 digits."
      },
      "CR": {
        "cityLabel": "Canton",
        "line1Label": "Address line 1",
        "line2Label": "District",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Alajuela",
            "$id": "Alajuela"
          },
          {
            "$elt": "Cartago",
            "$id": "Cartago"
          },
          {
            "$elt": "Guanacaste",
            "$id": "Guanacaste"
          },
          {
            "$elt": "Heredia",
            "$id": "Heredia"
          },
          {
            "$elt": "Limón",
            "$id": "Limón"
          },
          {
            "$elt": "Puntarenas",
            "$id": "Puntarenas"
          },
          {
            "$elt": "San José",
            "$id": "San José"
          }
        ],
        "validationError": "Your postal code must be formatted as: 9999, 99999, or 999-9999."
      },
      "CV": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "CY": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 4 digits."
      },
      "CZ": {
        "cityLabel": "City / Delivery post office",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 5 digits with an optional space after the first 3 digits."
      },
      "DE": {
        "cityLabel": "City",
        "line1Label": "Street and house number",
        "line2Label": "Additional information",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits and cannot begin with 00."
      },
      "DJ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "DK": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "DM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "DO": {
        "cityLabel": "Municipality",
        "line1Label": "Address line 1",
        "line2Label": "District / Neighborhood",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province / National District",
        "stateList": [
          {
            "$elt": "Azua",
            "$id": "AZUA"
          },
          {
            "$elt": "Bahoruco",
            "$id": "BAHORUCO"
          },
          {
            "$elt": "Barahona",
            "$id": "BARAHONA"
          },
          {
            "$elt": "Dajabón",
            "$id": "DAJABÓN"
          },
          {
            "$elt": "Distrito Nacional (Santo Domingo)",
            "$id": "DN"
          },
          {
            "$elt": "Duarte",
            "$id": "DUARTE"
          },
          {
            "$elt": "El Seibo",
            "$id": "EL SEIBO"
          },
          {
            "$elt": "Elías Piña",
            "$id": "ELÍAS PIÑA"
          },
          {
            "$elt": "Espaillat",
            "$id": "ESPAILLAT"
          },
          {
            "$elt": "Hato Mayor",
            "$id": "HATO MAYOR"
          },
          {
            "$elt": "Hermanas Mirabal",
            "$id": "HERMANAS MIRABAL"
          },
          {
            "$elt": "Independencia",
            "$id": "INDEPENDENCIA"
          },
          {
            "$elt": "La Altagracia",
            "$id": "LA ALTAGRACIA"
          },
          {
            "$elt": "La Romana",
            "$id": "LA ROMANA"
          },
          {
            "$elt": "La Vega",
            "$id": "LA VEGA"
          },
          {
            "$elt": "María Trinidad Sánchez",
            "$id": "MARÍA TRINIDAD SÁNCHEZ"
          },
          {
            "$elt": "Monseñor Nouel",
            "$id": "MONSEÑOR NOUEL"
          },
          {
            "$elt": "Monte Cristi",
            "$id": "MONTE CRISTI"
          },
          {
            "$elt": "Monte Plata",
            "$id": "MONTE PLATA"
          },
          {
            "$elt": "Pedernales",
            "$id": "PEDERNALES"
          },
          {
            "$elt": "Peravia",
            "$id": "PERAVIA"
          },
          {
            "$elt": "Puerto Plata",
            "$id": "PUERTO PLATA"
          },
          {
            "$elt": "Samaná",
            "$id": "SAMANÁ"
          },
          {
            "$elt": "San Cristóbal",
            "$id": "SAN CRISTÓBAL"
          },
          {
            "$elt": "San José de Ocoa",
            "$id": "SAN JOSÉ DE OCOA"
          },
          {
            "$elt": "San Juan",
            "$id": "SAN JUAN"
          },
          {
            "$elt": "San Pedro de Macorís",
            "$id": "SAN PEDRO DE MACORÍS"
          },
          {
            "$elt": "Sánchez Ramírez",
            "$id": "SÁNCHEZ RAMÍREZ"
          },
          {
            "$elt": "Santiago",
            "$id": "SANTIAGO"
          },
          {
            "$elt": "Santiago Rodríguez",
            "$id": "SANTIAGO RODRÍGUEZ"
          },
          {
            "$elt": "Santo Domingo",
            "$id": "SANTO DOMINGO"
          },
          {
            "$elt": "Valverde",
            "$id": "VALVERDE"
          }
        ],
        "validationError": "Your postal code must be 5 digits."
      },
      "DZ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "EC": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 6 digits."
      },
      "EE": {
        "cityLabel": "District / Parish",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "City / County",
        "validationError": "Your postal code must be 5 digits."
      },
      "EG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "ER": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "ES": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Province / Autonomous city",
        "stateList": [
          {
            "$elt": "A Coruña",
            "$id": "A CORUÑA"
          },
          {
            "$elt": "Albacete",
            "$id": "ALBACETE"
          },
          {
            "$elt": "Alicante",
            "$id": "ALICANTE"
          },
          {
            "$elt": "Almería",
            "$id": "ALMERÍA"
          },
          {
            "$elt": "Araba/Álava",
            "$id": "ARABA/ÁLAVA"
          },
          {
            "$elt": "Asturias",
            "$id": "ASTURIAS"
          },
          {
            "$elt": "Ávila",
            "$id": "ÁVILA"
          },
          {
            "$elt": "Badajoz",
            "$id": "BADAJOZ"
          },
          {
            "$elt": "Barcelona",
            "$id": "BARCELONA"
          },
          {
            "$elt": "Bizkaia",
            "$id": "BIZKAIA"
          },
          {
            "$elt": "Burgos",
            "$id": "BURGOS"
          },
          {
            "$elt": "Cáceres",
            "$id": "CÁCERES"
          },
          {
            "$elt": "Cádiz",
            "$id": "CÁDIZ"
          },
          {
            "$elt": "Cantabria",
            "$id": "CANTABRIA"
          },
          {
            "$elt": "Castellón",
            "$id": "CASTELLÓN"
          },
          {
            "$elt": "Ceuta",
            "$id": "CEUTA"
          },
          {
            "$elt": "Ciudad Real",
            "$id": "CIUDAD REAL"
          },
          {
            "$elt": "Córdoba",
            "$id": "CÓRDOBA"
          },
          {
            "$elt": "Cuenca",
            "$id": "CUENCA"
          },
          {
            "$elt": "Gipuzkoa",
            "$id": "GIPUZKOA"
          },
          {
            "$elt": "Girona",
            "$id": "GIRONA"
          },
          {
            "$elt": "Granada",
            "$id": "GRANADA"
          },
          {
            "$elt": "Guadalajara",
            "$id": "GUADALAJARA"
          },
          {
            "$elt": "Huelva",
            "$id": "HUELVA"
          },
          {
            "$elt": "Huesca",
            "$id": "HUESCA"
          },
          {
            "$elt": "Illes Balears",
            "$id": "ILLES BALEARS"
          },
          {
            "$elt": "Jaén",
            "$id": "JAÉN"
          },
          {
            "$elt": "La Rioja",
            "$id": "LA RIOJA"
          },
          {
            "$elt": "Las Palmas",
            "$id": "LAS PALMAS"
          },
          {
            "$elt": "León",
            "$id": "LEÓN"
          },
          {
            "$elt": "Lleida",
            "$id": "LLEIDA"
          },
          {
            "$elt": "Lugo",
            "$id": "LUGO"
          },
          {
            "$elt": "Madrid",
            "$id": "MADRID"
          },
          {
            "$elt": "Málaga",
            "$id": "MÁLAGA"
          },
          {
            "$elt": "Melilla",
            "$id": "MELILLA"
          },
          {
            "$elt": "Murcia",
            "$id": "MURCIA"
          },
          {
            "$elt": "Navarra",
            "$id": "NAVARRA"
          },
          {
            "$elt": "Ourense",
            "$id": "OURENSE"
          },
          {
            "$elt": "Palencia",
            "$id": "PALENCIA"
          },
          {
            "$elt": "Pontevedra",
            "$id": "PONTEVEDRA"
          },
          {
            "$elt": "Salamanca",
            "$id": "SALAMANCA"
          },
          {
            "$elt": "Santa Cruz de Tenerife",
            "$id": "SANTA CRUZ DE TENERIFE"
          },
          {
            "$elt": "Segovia",
            "$id": "SEGOVIA"
          },
          {
            "$elt": "Sevilla",
            "$id": "SEVILLA"
          },
          {
            "$elt": "Soria",
            "$id": "SORIA"
          },
          {
            "$elt": "Tarragona",
            "$id": "TARRAGONA"
          },
          {
            "$elt": "Teruel",
            "$id": "TERUEL"
          },
          {
            "$elt": "Toledo",
            "$id": "TOLEDO"
          },
          {
            "$elt": "Valencia",
            "$id": "VALENCIA"
          },
          {
            "$elt": "Valladolid",
            "$id": "VALLADOLID"
          },
          {
            "$elt": "Zamora",
            "$id": "ZAMORA"
          },
          {
            "$elt": "Zaragoza",
            "$id": "ZARAGOZA"
          }
        ],
        "validationError": "Your postal code must be 5 digits."
      },
      "ET": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "FI": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 5 digits."
      },
      "FJ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "FK": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "FM": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "ZIP code",
        "stateLabel": "State",
        "validationError": "Your ZIP code must be 5 digits and can be followed by a dash and 4 digits."
      },
      "FO": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must begin with \"FO-\" followed by 3 digits."
      },
      "FR": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "GA": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GB": {
        "cityLabel": "Town / City",
        "groupStateList": [
          {
            "$id": "EnglandCountyList",
            "group": [
              {
                "$elt": "Avon",
                "$id": "AVON"
              },
              {
                "$elt": "Bedfordshire",
                "$id": "BEDFORDSHIRE"
              },
              {
                "$elt": "Berkshire",
                "$id": "BERKSHIRE"
              },
              {
                "$elt": "Buckinghamshire",
                "$id": "BUCKINGHAMSHIRE"
              },
              {
                "$elt": "Cambridgeshire",
                "$id": "CAMBRIDGESHIRE"
              },
              {
                "$elt": "Cheshire",
                "$id": "CHESHIRE"
              },
              {
                "$elt": "Cleveland",
                "$id": "CLEVELAND"
              },
              {
                "$elt": "Cornwall",
                "$id": "CORNWALL"
              },
              {
                "$elt": "County Durham",
                "$id": "COUNTY DURHAM"
              },
              {
                "$elt": "Cumbria",
                "$id": "CUMBRIA"
              },
              {
                "$elt": "Derbyshire",
                "$id": "DERBYSHIRE"
              },
              {
                "$elt": "Devon",
                "$id": "DEVON"
              },
              {
                "$elt": "Dorset",
                "$id": "DORSET"
              },
              {
                "$elt": "East Riding of Yorkshire",
                "$id": "EAST RIDING OF YORKSHIRE"
              },
              {
                "$elt": "East Sussex",
                "$id": "EAST SUSSEX"
              },
              {
                "$elt": "Essex",
                "$id": "ESSEX"
              },
              {
                "$elt": "Gloucestershire",
                "$id": "GLOUCESTERSHIRE"
              },
              {
                "$elt": "Greater Manchester",
                "$id": "GREATER MANCHESTER"
              },
              {
                "$elt": "Hampshire",
                "$id": "HAMPSHIRE"
              },
              {
                "$elt": "Herefordshire",
                "$id": "HEREFORDSHIRE"
              },
              {
                "$elt": "Hertfordshire",
                "$id": "HERTFORDSHIRE"
              },
              {
                "$elt": "Isle of Wight",
                "$id": "ISLE OF WIGHT"
              },
              {
                "$elt": "Isles of Scilly",
                "$id": "ISLES OF SCILLY"
              },
              {
                "$elt": "Kent",
                "$id": "KENT"
              },
              {
                "$elt": "Lancashire",
                "$id": "LANCASHIRE"
              },
              {
                "$elt": "Leicestershire",
                "$id": "LEICESTERSHIRE"
              },
              {
                "$elt": "Lincolnshire",
                "$id": "LINCOLNSHIRE"
              },
              {
                "$elt": "London",
                "$id": "LONDON"
              },
              {
                "$elt": "Merseyside",
                "$id": "MERSEYSIDE"
              },
              {
                "$elt": "Middlesex",
                "$id": "MIDDLESEX"
              },
              {
                "$elt": "Norfolk",
                "$id": "NORFOLK"
              },
              {
                "$elt": "North East Lincolnshire",
                "$id": "NORTH EAST LINCOLNSHIRE"
              },
              {
                "$elt": "North Humberside",
                "$id": "NORTH HUMBERSIDE"
              },
              {
                "$elt": "North Yorkshire",
                "$id": "NORTH YORKSHIRE"
              },
              {
                "$elt": "Northamptonshire",
                "$id": "NORTHAMPTONSHIRE"
              },
              {
                "$elt": "Northumberland",
                "$id": "NORTHUMBERLAND"
              },
              {
                "$elt": "Nottinghamshire",
                "$id": "NOTTINGHAMSHIRE"
              },
              {
                "$elt": "Oxfordshire",
                "$id": "OXFORDSHIRE"
              },
              {
                "$elt": "Rutland",
                "$id": "RUTLAND"
              },
              {
                "$elt": "Shropshire",
                "$id": "SHROPSHIRE"
              },
              {
                "$elt": "Somerset",
                "$id": "SOMERSET"
              },
              {
                "$elt": "South Humberside",
                "$id": "SOUTH HUMBERSIDE"
              },
              {
                "$elt": "South Yorkshire",
                "$id": "SOUTH YORKSHIRE"
              },
              {
                "$elt": "Staffordshire",
                "$id": "STAFFORDSHIRE"
              },
              {
                "$elt": "Suffolk",
                "$id": "SUFFOLK"
              },
              {
                "$elt": "Surrey",
                "$id": "SURREY"
              },
              {
                "$elt": "Sussex",
                "$id": "SUSSEX"
              },
              {
                "$elt": "Tyne and Wear",
                "$id": "TYNE AND WEAR"
              },
              {
                "$elt": "Warwickshire",
                "$id": "WARWICKSHIRE"
              },
              {
                "$elt": "West Midlands",
                "$id": "WEST MIDLANDS"
              },
              {
                "$elt": "West Sussex",
                "$id": "WEST SUSSEX"
              },
              {
                "$elt": "West Yorkshire",
                "$id": "WEST YORKSHIRE"
              },
              {
                "$elt": "Wiltshire",
                "$id": "WILTSHIRE"
              },
              {
                "$elt": "Worcestershire",
                "$id": "WORCESTERSHIRE"
              }
            ],
            "label": "England"
          },
          {
            "$id": "ScotlandCountyList",
            "group": [
              {
                "$elt": "Aberdeen City",
                "$id": "ABERDEEN CITY"
              },
              {
                "$elt": "Aberdeenshire",
                "$id": "ABERDEENSHIRE"
              },
              {
                "$elt": "Angus",
                "$id": "ANGUS"
              },
              {
                "$elt": "Argyll",
                "$id": "ARGYLL"
              },
              {
                "$elt": "Argyll and Bute",
                "$id": "ARGYLL AND BUTE"
              },
              {
                "$elt": "Ayrshire",
                "$id": "AYRSHIRE"
              },
              {
                "$elt": "Banffshire",
                "$id": "BANFFSHIRE"
              },
              {
                "$elt": "Berwickshire",
                "$id": "BERWICKSHIRE"
              },
              {
                "$elt": "Borders",
                "$id": "BORDERS"
              },
              {
                "$elt": "Bute",
                "$id": "BUTE"
              },
              {
                "$elt": "Caithness",
                "$id": "CAITHNESS"
              },
              {
                "$elt": "Central",
                "$id": "CENTRAL"
              },
              {
                "$elt": "Clackmannanshire",
                "$id": "CLACKMANNANSHIRE"
              },
              {
                "$elt": "Dumfries and Galloway",
                "$id": "DUMFRIES AND GALLOWAY"
              },
              {
                "$elt": "Dumfriesshire",
                "$id": "DUMFRIESSHIRE"
              },
              {
                "$elt": "Dunbartonshire",
                "$id": "DUNBARTONSHIRE"
              },
              {
                "$elt": "Dundee City",
                "$id": "DUNDEE CITY"
              },
              {
                "$elt": "East Ayrshire",
                "$id": "EAST AYRSHIRE"
              },
              {
                "$elt": "East Dunbartonshire",
                "$id": "EAST DUNBARTONSHIRE"
              },
              {
                "$elt": "East Lothian",
                "$id": "EAST LOTHIAN"
              },
              {
                "$elt": "East Renfrewshire",
                "$id": "EAST RENFREWSHIRE"
              },
              {
                "$elt": "Edinburgh City",
                "$id": "EDINBURGH CITY"
              },
              {
                "$elt": "Falkirk",
                "$id": "FALKIRK"
              },
              {
                "$elt": "Fife",
                "$id": "FIFE"
              },
              {
                "$elt": "Glasgow City",
                "$id": "GLASGOW CITY"
              },
              {
                "$elt": "Grampian",
                "$id": "GRAMPIAN"
              },
              {
                "$elt": "Highland",
                "$id": "HIGHLAND"
              },
              {
                "$elt": "Inverclyde",
                "$id": "INVERCLYDE"
              },
              {
                "$elt": "Inverness-shire",
                "$id": "INVERNESS-SHIRE"
              },
              {
                "$elt": "Isle of Lewis",
                "$id": "ISLE OF LEWIS"
              },
              {
                "$elt": "Isle of Skye",
                "$id": "ISLE OF SKYE"
              },
              {
                "$elt": "Kincardineshire",
                "$id": "KINCARDINESHIRE"
              },
              {
                "$elt": "Kinross-shire",
                "$id": "KINROSS-SHIRE"
              },
              {
                "$elt": "Kirkcudbrightshire",
                "$id": "KIRKCUDBRIGHTSHIRE"
              },
              {
                "$elt": "Lanarkshire",
                "$id": "LANARKSHIRE"
              },
              {
                "$elt": "Lothian",
                "$id": "LOTHIAN"
              },
              {
                "$elt": "Midlothian",
                "$id": "MIDLOTHIAN"
              },
              {
                "$elt": "Moray",
                "$id": "MORAY"
              },
              {
                "$elt": "Nairn",
                "$id": "NAIRN"
              },
              {
                "$elt": "North Ayrshire",
                "$id": "NORTH AYRSHIRE"
              },
              {
                "$elt": "North Lanarkshire",
                "$id": "NORTH LANARKSHIRE"
              },
              {
                "$elt": "Orkney Islands",
                "$id": "ORKNEY ISLANDS"
              },
              {
                "$elt": "Peeblesshire",
                "$id": "PEEBLESSHIRE"
              },
              {
                "$elt": "Perth and Kinross",
                "$id": "PERTH AND KINROSS"
              },
              {
                "$elt": "Perthshire",
                "$id": "PERTHSHIRE"
              },
              {
                "$elt": "Renfrewshire",
                "$id": "RENFREWSHIRE"
              },
              {
                "$elt": "Ross-shire",
                "$id": "ROSS-SHIRE"
              },
              {
                "$elt": "Roxburghshire",
                "$id": "ROXBURGHSHIRE"
              },
              {
                "$elt": "Selkirkshire",
                "$id": "SELKIRKSHIRE"
              },
              {
                "$elt": "Shetland Islands",
                "$id": "SHETLAND ISLANDS"
              },
              {
                "$elt": "South Ayrshire",
                "$id": "SOUTH AYRSHIRE"
              },
              {
                "$elt": "South Lanarkshire",
                "$id": "SOUTH LANARKSHIRE"
              },
              {
                "$elt": "Stirling",
                "$id": "STIRLING"
              },
              {
                "$elt": "Strathclyde",
                "$id": "STRATHCLYDE"
              },
              {
                "$elt": "Sutherland",
                "$id": "SUTHERLAND"
              },
              {
                "$elt": "Tayside",
                "$id": "TAYSIDE"
              },
              {
                "$elt": "West Dunbartonshire",
                "$id": "WEST DUNBARTONSHIRE"
              },
              {
                "$elt": "West Lothian",
                "$id": "WEST LOTHIAN"
              },
              {
                "$elt": "Western Isles",
                "$id": "WESTERN ISLES"
              },
              {
                "$elt": "Wigtownshire",
                "$id": "WIGTOWNSHIRE"
              }
            ],
            "label": "Scotland"
          },
          {
            "$id": "WalesCountyList",
            "group": [
              {
                "$elt": "Blaenau Gwent",
                "$id": "BLAENAU GWENT"
              },
              {
                "$elt": "Bridgend",
                "$id": "BRIDGEND"
              },
              {
                "$elt": "Caerphilly",
                "$id": "CAERPHILLY"
              },
              {
                "$elt": "Cardiff",
                "$id": "CARDIFF"
              },
              {
                "$elt": "Carmarthenshire",
                "$id": "CARMARTHENSHIRE"
              },
              {
                "$elt": "Ceredigion",
                "$id": "CEREDIGION"
              },
              {
                "$elt": "Clwyd",
                "$id": "CLWYD"
              },
              {
                "$elt": "Conwy",
                "$id": "CONWY"
              },
              {
                "$elt": "Denbighshire",
                "$id": "DENBIGHSHIRE"
              },
              {
                "$elt": "Dyfed",
                "$id": "DYFED"
              },
              {
                "$elt": "Flintshire",
                "$id": "FLINTSHIRE"
              },
              {
                "$elt": "Gwent",
                "$id": "GWENT"
              },
              {
                "$elt": "Gwynedd",
                "$id": "GWYNEDD"
              },
              {
                "$elt": "Isle of Anglesey",
                "$id": "ISLE OF ANGLESEY"
              },
              {
                "$elt": "Merthyr Tydfil",
                "$id": "MERTHYR TYDFIL"
              },
              {
                "$elt": "Mid Glamorgan",
                "$id": "MID GLAMORGAN"
              },
              {
                "$elt": "Monmouthshire",
                "$id": "MONMOUTHSHIRE"
              },
              {
                "$elt": "Neath Port Talbot",
                "$id": "NEATH PORT TALBOT"
              },
              {
                "$elt": "Newport",
                "$id": "NEWPORT"
              },
              {
                "$elt": "Pembrokeshire",
                "$id": "PEMBROKESHIRE"
              },
              {
                "$elt": "Powys",
                "$id": "POWYS"
              },
              {
                "$elt": "Rhondda Cynon Taf",
                "$id": "RHONDDA CYNON TAF"
              },
              {
                "$elt": "South Glamorgan",
                "$id": "SOUTH GLAMORGAN"
              },
              {
                "$elt": "Swansea",
                "$id": "SWANSEA"
              },
              {
                "$elt": "Torfaen",
                "$id": "TORFAEN"
              },
              {
                "$elt": "Vale of Glamorgan",
                "$id": "VALE OF GLAMORGAN"
              },
              {
                "$elt": "West Glamorgan",
                "$id": "WEST GLAMORGAN"
              },
              {
                "$elt": "Wrexham",
                "$id": "WREXHAM"
              }
            ],
            "label": "Wales"
          },
          {
            "$id": "NorthernIrelandCountyList",
            "group": [
              {
                "$elt": "Belfast City",
                "$id": "BELFAST CITY"
              },
              {
                "$elt": "County Antrim",
                "$id": "COUNTY ANTRIM"
              },
              {
                "$elt": "County Armagh",
                "$id": "COUNTY ARMAGH"
              },
              {
                "$elt": "County Down",
                "$id": "COUNTY DOWN"
              },
              {
                "$elt": "County Fermanagh",
                "$id": "COUNTY FERMANAGH"
              },
              {
                "$elt": "County Londonderry",
                "$id": "COUNTY LONDONDERRY"
              },
              {
                "$elt": "County Tyrone",
                "$id": "COUNTY TYRONE"
              }
            ],
            "label": "Northern Ireland"
          },
          {
            "$id": "UKOffshoreCountyList",
            "group": [
              {
                "$elt": "Guernsey",
                "$id": "GUERNSEY"
              },
              {
                "$elt": "Isle of Man",
                "$id": "ISLE OF MAN"
              },
              {
                "$elt": "Jersey",
                "$id": "JERSEY"
              }
            ],
            "label": "Crown Dependencies"
          }
        ],
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "stateLabel": "County",
        "stateList": [
          {
            "$elt": "Aberdeen City",
            "$id": "ABERDEEN CITY"
          },
          {
            "$elt": "Aberdeenshire",
            "$id": "ABERDEENSHIRE"
          },
          {
            "$elt": "Angus",
            "$id": "ANGUS"
          },
          {
            "$elt": "Argyll",
            "$id": "ARGYLL"
          },
          {
            "$elt": "Argyll and Bute",
            "$id": "ARGYLL AND BUTE"
          },
          {
            "$elt": "Avon",
            "$id": "AVON"
          },
          {
            "$elt": "Ayrshire",
            "$id": "AYRSHIRE"
          },
          {
            "$elt": "Banffshire",
            "$id": "BANFFSHIRE"
          },
          {
            "$elt": "Bedfordshire",
            "$id": "BEDFORDSHIRE"
          },
          {
            "$elt": "Belfast City",
            "$id": "BELFAST CITY"
          },
          {
            "$elt": "Berkshire",
            "$id": "BERKSHIRE"
          },
          {
            "$elt": "Berwickshire",
            "$id": "BERWICKSHIRE"
          },
          {
            "$elt": "Blaenau Gwent",
            "$id": "BLAENAU GWENT"
          },
          {
            "$elt": "Borders",
            "$id": "BORDERS"
          },
          {
            "$elt": "Bridgend",
            "$id": "BRIDGEND"
          },
          {
            "$elt": "Buckinghamshire",
            "$id": "BUCKINGHAMSHIRE"
          },
          {
            "$elt": "Bute",
            "$id": "BUTE"
          },
          {
            "$elt": "Caerphilly",
            "$id": "CAERPHILLY"
          },
          {
            "$elt": "Caithness",
            "$id": "CAITHNESS"
          },
          {
            "$elt": "Cambridgeshire",
            "$id": "CAMBRIDGESHIRE"
          },
          {
            "$elt": "Cardiff",
            "$id": "CARDIFF"
          },
          {
            "$elt": "Carmarthenshire",
            "$id": "CARMARTHENSHIRE"
          },
          {
            "$elt": "Central",
            "$id": "CENTRAL"
          },
          {
            "$elt": "Ceredigion",
            "$id": "CEREDIGION"
          },
          {
            "$elt": "Cheshire",
            "$id": "CHESHIRE"
          },
          {
            "$elt": "Clackmannanshire",
            "$id": "CLACKMANNANSHIRE"
          },
          {
            "$elt": "Cleveland",
            "$id": "CLEVELAND"
          },
          {
            "$elt": "Clwyd",
            "$id": "CLWYD"
          },
          {
            "$elt": "Conwy",
            "$id": "CONWY"
          },
          {
            "$elt": "Cornwall",
            "$id": "CORNWALL"
          },
          {
            "$elt": "County Antrim",
            "$id": "COUNTY ANTRIM"
          },
          {
            "$elt": "County Armagh",
            "$id": "COUNTY ARMAGH"
          },
          {
            "$elt": "County Down",
            "$id": "COUNTY DOWN"
          },
          {
            "$elt": "County Durham",
            "$id": "COUNTY DURHAM"
          },
          {
            "$elt": "County Fermanagh",
            "$id": "COUNTY FERMANAGH"
          },
          {
            "$elt": "County Londonderry",
            "$id": "COUNTY LONDONDERRY"
          },
          {
            "$elt": "County Tyrone",
            "$id": "COUNTY TYRONE"
          },
          {
            "$elt": "Cumbria",
            "$id": "CUMBRIA"
          },
          {
            "$elt": "Denbighshire",
            "$id": "DENBIGHSHIRE"
          },
          {
            "$elt": "Derbyshire",
            "$id": "DERBYSHIRE"
          },
          {
            "$elt": "Devon",
            "$id": "DEVON"
          },
          {
            "$elt": "Dorset",
            "$id": "DORSET"
          },
          {
            "$elt": "Dumfries and Galloway",
            "$id": "DUMFRIES AND GALLOWAY"
          },
          {
            "$elt": "Dumfriesshire",
            "$id": "DUMFRIESSHIRE"
          },
          {
            "$elt": "Dunbartonshire",
            "$id": "DUNBARTONSHIRE"
          },
          {
            "$elt": "Dundee City",
            "$id": "DUNDEE CITY"
          },
          {
            "$elt": "Dyfed",
            "$id": "DYFED"
          },
          {
            "$elt": "East Ayrshire",
            "$id": "EAST AYRSHIRE"
          },
          {
            "$elt": "East Dunbartonshire",
            "$id": "EAST DUNBARTONSHIRE"
          },
          {
            "$elt": "East Lothian",
            "$id": "EAST LOTHIAN"
          },
          {
            "$elt": "East Renfrewshire",
            "$id": "EAST RENFREWSHIRE"
          },
          {
            "$elt": "East Riding of Yorkshire",
            "$id": "EAST RIDING OF YORKSHIRE"
          },
          {
            "$elt": "East Sussex",
            "$id": "EAST SUSSEX"
          },
          {
            "$elt": "Edinburgh City",
            "$id": "EDINBURGH CITY"
          },
          {
            "$elt": "Essex",
            "$id": "ESSEX"
          },
          {
            "$elt": "Falkirk",
            "$id": "FALKIRK"
          },
          {
            "$elt": "Fife",
            "$id": "FIFE"
          },
          {
            "$elt": "Flintshire",
            "$id": "FLINTSHIRE"
          },
          {
            "$elt": "Glasgow City",
            "$id": "GLASGOW CITY"
          },
          {
            "$elt": "Gloucestershire",
            "$id": "GLOUCESTERSHIRE"
          },
          {
            "$elt": "Grampian",
            "$id": "GRAMPIAN"
          },
          {
            "$elt": "Greater Manchester",
            "$id": "GREATER MANCHESTER"
          },
          {
            "$elt": "Guernsey",
            "$id": "GUERNSEY"
          },
          {
            "$elt": "Gwent",
            "$id": "GWENT"
          },
          {
            "$elt": "Gwynedd",
            "$id": "GWYNEDD"
          },
          {
            "$elt": "Hampshire",
            "$id": "HAMPSHIRE"
          },
          {
            "$elt": "Herefordshire",
            "$id": "HEREFORDSHIRE"
          },
          {
            "$elt": "Hertfordshire",
            "$id": "HERTFORDSHIRE"
          },
          {
            "$elt": "Highland",
            "$id": "HIGHLAND"
          },
          {
            "$elt": "Inverclyde",
            "$id": "INVERCLYDE"
          },
          {
            "$elt": "Inverness-shire",
            "$id": "INVERNESS-SHIRE"
          },
          {
            "$elt": "Isle of Anglesey",
            "$id": "ISLE OF ANGLESEY"
          },
          {
            "$elt": "Isle of Lewis",
            "$id": "ISLE OF LEWIS"
          },
          {
            "$elt": "Isle of Man",
            "$id": "ISLE OF MAN"
          },
          {
            "$elt": "Isle of Skye",
            "$id": "ISLE OF SKYE"
          },
          {
            "$elt": "Isle of Wight",
            "$id": "ISLE OF WIGHT"
          },
          {
            "$elt": "Isles of Scilly",
            "$id": "ISLES OF SCILLY"
          },
          {
            "$elt": "Jersey",
            "$id": "JERSEY"
          },
          {
            "$elt": "Kent",
            "$id": "KENT"
          },
          {
            "$elt": "Kincardineshire",
            "$id": "KINCARDINESHIRE"
          },
          {
            "$elt": "Kinross-shire",
            "$id": "KINROSS-SHIRE"
          },
          {
            "$elt": "Kirkcudbrightshire",
            "$id": "KIRKCUDBRIGHTSHIRE"
          },
          {
            "$elt": "Lanarkshire",
            "$id": "LANARKSHIRE"
          },
          {
            "$elt": "Lancashire",
            "$id": "LANCASHIRE"
          },
          {
            "$elt": "Leicestershire",
            "$id": "LEICESTERSHIRE"
          },
          {
            "$elt": "Lincolnshire",
            "$id": "LINCOLNSHIRE"
          },
          {
            "$elt": "London",
            "$id": "LONDON"
          },
          {
            "$elt": "Lothian",
            "$id": "LOTHIAN"
          },
          {
            "$elt": "Merseyside",
            "$id": "MERSEYSIDE"
          },
          {
            "$elt": "Merthyr Tydfil",
            "$id": "MERTHYR TYDFIL"
          },
          {
            "$elt": "Mid Glamorgan",
            "$id": "MID GLAMORGAN"
          },
          {
            "$elt": "Middlesex",
            "$id": "MIDDLESEX"
          },
          {
            "$elt": "Midlothian",
            "$id": "MIDLOTHIAN"
          },
          {
            "$elt": "Monmouthshire",
            "$id": "MONMOUTHSHIRE"
          },
          {
            "$elt": "Moray",
            "$id": "MORAY"
          },
          {
            "$elt": "Nairn",
            "$id": "NAIRN"
          },
          {
            "$elt": "Neath Port Talbot",
            "$id": "NEATH PORT TALBOT"
          },
          {
            "$elt": "Newport",
            "$id": "NEWPORT"
          },
          {
            "$elt": "Norfolk",
            "$id": "NORFOLK"
          },
          {
            "$elt": "North Ayrshire",
            "$id": "NORTH AYRSHIRE"
          },
          {
            "$elt": "North East Lincolnshire",
            "$id": "NORTH EAST LINCOLNSHIRE"
          },
          {
            "$elt": "North Humberside",
            "$id": "NORTH HUMBERSIDE"
          },
          {
            "$elt": "North Lanarkshire",
            "$id": "NORTH LANARKSHIRE"
          },
          {
            "$elt": "North Yorkshire",
            "$id": "NORTH YORKSHIRE"
          },
          {
            "$elt": "Northamptonshire",
            "$id": "NORTHAMPTONSHIRE"
          },
          {
            "$elt": "Northumberland",
            "$id": "NORTHUMBERLAND"
          },
          {
            "$elt": "Nottinghamshire",
            "$id": "NOTTINGHAMSHIRE"
          },
          {
            "$elt": "Orkney Islands",
            "$id": "ORKNEY ISLANDS"
          },
          {
            "$elt": "Oxfordshire",
            "$id": "OXFORDSHIRE"
          },
          {
            "$elt": "Peeblesshire",
            "$id": "PEEBLESSHIRE"
          },
          {
            "$elt": "Pembrokeshire",
            "$id": "PEMBROKESHIRE"
          },
          {
            "$elt": "Perth and Kinross",
            "$id": "PERTH AND KINROSS"
          },
          {
            "$elt": "Perthshire",
            "$id": "PERTHSHIRE"
          },
          {
            "$elt": "Powys",
            "$id": "POWYS"
          },
          {
            "$elt": "Renfrewshire",
            "$id": "RENFREWSHIRE"
          },
          {
            "$elt": "Rhondda Cynon Taf",
            "$id": "RHONDDA CYNON TAF"
          },
          {
            "$elt": "Ross-shire",
            "$id": "ROSS-SHIRE"
          },
          {
            "$elt": "Roxburghshire",
            "$id": "ROXBURGHSHIRE"
          },
          {
            "$elt": "Rutland",
            "$id": "RUTLAND"
          },
          {
            "$elt": "Selkirkshire",
            "$id": "SELKIRKSHIRE"
          },
          {
            "$elt": "Shetland Islands",
            "$id": "SHETLAND ISLANDS"
          },
          {
            "$elt": "Shropshire",
            "$id": "SHROPSHIRE"
          },
          {
            "$elt": "Somerset",
            "$id": "SOMERSET"
          },
          {
            "$elt": "South Ayrshire",
            "$id": "SOUTH AYRSHIRE"
          },
          {
            "$elt": "South Glamorgan",
            "$id": "SOUTH GLAMORGAN"
          },
          {
            "$elt": "South Humberside",
            "$id": "SOUTH HUMBERSIDE"
          },
          {
            "$elt": "South Lanarkshire",
            "$id": "SOUTH LANARKSHIRE"
          },
          {
            "$elt": "South Yorkshire",
            "$id": "SOUTH YORKSHIRE"
          },
          {
            "$elt": "Staffordshire",
            "$id": "STAFFORDSHIRE"
          },
          {
            "$elt": "Stirling",
            "$id": "STIRLING"
          },
          {
            "$elt": "Strathclyde",
            "$id": "STRATHCLYDE"
          },
          {
            "$elt": "Suffolk",
            "$id": "SUFFOLK"
          },
          {
            "$elt": "Surrey",
            "$id": "SURREY"
          },
          {
            "$elt": "Sussex",
            "$id": "SUSSEX"
          },
          {
            "$elt": "Sutherland",
            "$id": "SUTHERLAND"
          },
          {
            "$elt": "Swansea",
            "$id": "SWANSEA"
          },
          {
            "$elt": "Tayside",
            "$id": "TAYSIDE"
          },
          {
            "$elt": "Torfaen",
            "$id": "TORFAEN"
          },
          {
            "$elt": "Tyne and Wear",
            "$id": "TYNE AND WEAR"
          },
          {
            "$elt": "Vale of Glamorgan",
            "$id": "VALE OF GLAMORGAN"
          },
          {
            "$elt": "Warwickshire",
            "$id": "WARWICKSHIRE"
          },
          {
            "$elt": "West Dunbartonshire",
            "$id": "WEST DUNBARTONSHIRE"
          },
          {
            "$elt": "West Glamorgan",
            "$id": "WEST GLAMORGAN"
          },
          {
            "$elt": "West Lothian",
            "$id": "WEST LOTHIAN"
          },
          {
            "$elt": "West Midlands",
            "$id": "WEST MIDLANDS"
          },
          {
            "$elt": "West Sussex",
            "$id": "WEST SUSSEX"
          },
          {
            "$elt": "West Yorkshire",
            "$id": "WEST YORKSHIRE"
          },
          {
            "$elt": "Western Isles",
            "$id": "WESTERN ISLES"
          },
          {
            "$elt": "Wigtownshire",
            "$id": "WIGTOWNSHIRE"
          },
          {
            "$elt": "Wiltshire",
            "$id": "WILTSHIRE"
          },
          {
            "$elt": "Worcestershire",
            "$id": "WORCESTERSHIRE"
          },
          {
            "$elt": "Wrexham",
            "$id": "WREXHAM"
          }
        ],
        "validationError": "Please enter a valid UK postcode using uppercase letters – e.g. TW9 1EH or BFPO 772 (for British Armed Forces)."
      },
      "GD": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GE": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GF": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits and begin with 973 or 983."
      },
      "GI": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GL": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must begin with \"DK-39\" followed by 2 digits."
      },
      "GM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GN": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GP": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits and begin with 970, 971, 980, or 981."
      },
      "GR": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 5 digits with an optional space after the first 3 digits."
      },
      "GT": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GW": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "GY": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "HK": {
        "cityLabel": "District / Area",
        "cityList": [
          {
            "$elt": "Aberdeen",
            "$id": "ABERDEEN"
          },
          {
            "$elt": "Admiralty",
            "$id": "ADMIRALTY"
          },
          {
            "$elt": "Ap Lei Chau",
            "$id": "AP LEI CHAU"
          },
          {
            "$elt": "Castle Peak",
            "$id": "CASTLE PEAK"
          },
          {
            "$elt": "Castle Peak Bay",
            "$id": "CASTLE PEAK BAY"
          },
          {
            "$elt": "Causeway Bay",
            "$id": "CAUSEWAY BAY"
          },
          {
            "$elt": "Central",
            "$id": "CENTRAL"
          },
          {
            "$elt": "Cha Kwo Ling",
            "$id": "CHA KWO LING"
          },
          {
            "$elt": "Chai Wan",
            "$id": "CHAI WAN"
          },
          {
            "$elt": "Chek Keng",
            "$id": "CHEK KENG"
          },
          {
            "$elt": "Chek Lap Kok",
            "$id": "CHEK LAP KOK"
          },
          {
            "$elt": "Cheung Chau",
            "$id": "CHEUNG CHAU"
          },
          {
            "$elt": "Cheung Sha Wan",
            "$id": "CHEUNG SHA WAN"
          },
          {
            "$elt": "Chinese University",
            "$id": "CHINESE UNIVERSITY"
          },
          {
            "$elt": "Choi Hung",
            "$id": "CHOI HUNG"
          },
          {
            "$elt": "Clear Water Bay",
            "$id": "CLEAR WATER BAY"
          },
          {
            "$elt": "Diamond Hill",
            "$id": "DIAMOND HILL"
          },
          {
            "$elt": "Fanling",
            "$id": "FANLING"
          },
          {
            "$elt": "Fo Tan",
            "$id": "FO TAN"
          },
          {
            "$elt": "Hang Hau",
            "$id": "HANG HAU"
          },
          {
            "$elt": "Happy Valley",
            "$id": "HAPPY VALLEY"
          },
          {
            "$elt": "Ho Man Tin",
            "$id": "HO MAN TIN"
          },
          {
            "$elt": "Hung Hom",
            "$id": "HUNG HOM"
          },
          {
            "$elt": "Jardines Lookout",
            "$id": "JARDINES LOOKOUT"
          },
          {
            "$elt": "Jordan",
            "$id": "JORDAN"
          },
          {
            "$elt": "Kam Tin",
            "$id": "KAM TIN"
          },
          {
            "$elt": "Kat O Chau",
            "$id": "KAT O CHAU"
          },
          {
            "$elt": "Kau To",
            "$id": "KAU TO"
          },
          {
            "$elt": "Kennedy Town",
            "$id": "KENNEDY TOWN"
          },
          {
            "$elt": "Kowloon Bay",
            "$id": "KOWLOON BAY"
          },
          {
            "$elt": "Kowloon City",
            "$id": "KOWLOON CITY"
          },
          {
            "$elt": "Kowloon Tong",
            "$id": "KOWLOON TONG"
          },
          {
            "$elt": "Kwai Chung",
            "$id": "KWAI CHUNG"
          },
          {
            "$elt": "Kwai Fong",
            "$id": "KWAI FONG"
          },
          {
            "$elt": "Kwun Tong",
            "$id": "KWUN TONG"
          },
          {
            "$elt": "Lai Chi Kok",
            "$id": "LAI CHI KOK"
          },
          {
            "$elt": "Lam Tin",
            "$id": "LAM TIN"
          },
          {
            "$elt": "Lamma Island",
            "$id": "LAMMA ISLAND"
          },
          {
            "$elt": "Lantau Island",
            "$id": "LANTAU ISLAND"
          },
          {
            "$elt": "Lau Fau Shan",
            "$id": "LAU FAU SHAN"
          },
          {
            "$elt": "Lei Yue Mun",
            "$id": "LEI YUE MUN"
          },
          {
            "$elt": "Lo Wu",
            "$id": "LO WU"
          },
          {
            "$elt": "Lok Fu",
            "$id": "LOK FU"
          },
          {
            "$elt": "Lok Ma Chau",
            "$id": "LOK MA CHAU"
          },
          {
            "$elt": "Lung Kwu Chau",
            "$id": "LUNG KWU CHAU"
          },
          {
            "$elt": "Ma On Shan",
            "$id": "MA ON SHAN"
          },
          {
            "$elt": "Ma Tau Wai",
            "$id": "MA TAU WAI"
          },
          {
            "$elt": "Mei Foo",
            "$id": "MEI FOO"
          },
          {
            "$elt": "Mid-Levels",
            "$id": "MID-LEVELS"
          },
          {
            "$elt": "Mong Kok",
            "$id": "MONG KOK"
          },
          {
            "$elt": "Nai Chung",
            "$id": "NAI CHUNG"
          },
          {
            "$elt": "Ngau Chi Wan",
            "$id": "NGAU CHI WAN"
          },
          {
            "$elt": "Ngau Tau Kok",
            "$id": "NGAU TAU KOK"
          },
          {
            "$elt": "Ninepin Group",
            "$id": "NINEPIN GROUP"
          },
          {
            "$elt": "North Point",
            "$id": "NORTH POINT"
          },
          {
            "$elt": "Pak Sha Wan",
            "$id": "PAK SHA WAN"
          },
          {
            "$elt": "Pat Sin Leng",
            "$id": "PAT SIN LENG"
          },
          {
            "$elt": "Peng Chau",
            "$id": "PENG CHAU"
          },
          {
            "$elt": "Ping Shan",
            "$id": "PING SHAN"
          },
          {
            "$elt": "Po Toi Island",
            "$id": "PO TOI ISLAND"
          },
          {
            "$elt": "Pok Fu Lam",
            "$id": "POK FU LAM"
          },
          {
            "$elt": "Prince Edward",
            "$id": "PRINCE EDWARD"
          },
          {
            "$elt": "Quarry Bay",
            "$id": "QUARRY BAY"
          },
          {
            "$elt": "Repulse Bay",
            "$id": "REPULSE BAY"
          },
          {
            "$elt": "Sai Kung",
            "$id": "SAI KUNG"
          },
          {
            "$elt": "Sai Wan Ho",
            "$id": "SAI WAN HO"
          },
          {
            "$elt": "Sai Ying Pun",
            "$id": "SAI YING PUN"
          },
          {
            "$elt": "San Po Kong",
            "$id": "SAN PO KONG"
          },
          {
            "$elt": "Sau Mau Ping",
            "$id": "SAU MAU PING"
          },
          {
            "$elt": "Sha Tau Kok",
            "$id": "SHA TAU KOK"
          },
          {
            "$elt": "Sha Tin",
            "$id": "SHA TIN"
          },
          {
            "$elt": "Sham Shui Po",
            "$id": "SHAM SHUI PO"
          },
          {
            "$elt": "Sham Tseng",
            "$id": "SHAM TSENG"
          },
          {
            "$elt": "Shau Kei Wan",
            "$id": "SHAU KEI WAN"
          },
          {
            "$elt": "Shek Kip Mei",
            "$id": "SHEK KIP MEI"
          },
          {
            "$elt": "Shek Kong",
            "$id": "SHEK KONG"
          },
          {
            "$elt": "Shek O",
            "$id": "SHEK O"
          },
          {
            "$elt": "Shek Tong Tsui",
            "$id": "SHEK TONG TSUI"
          },
          {
            "$elt": "Sheung Shui",
            "$id": "SHEUNG SHUI"
          },
          {
            "$elt": "Sheung Wan",
            "$id": "SHEUNG WAN"
          },
          {
            "$elt": "Siu Lik Yuen",
            "$id": "SIU LIK YUEN"
          },
          {
            "$elt": "Siu Sai Wan",
            "$id": "SIU SAI WAN"
          },
          {
            "$elt": "So Kon Po",
            "$id": "SO KON PO"
          },
          {
            "$elt": "Soko Islands",
            "$id": "SOKO ISLANDS"
          },
          {
            "$elt": "Stanley",
            "$id": "STANLEY"
          },
          {
            "$elt": "Tai Hang",
            "$id": "TAI HANG"
          },
          {
            "$elt": "Tai Kok Tsui",
            "$id": "TAI KOK TSUI"
          },
          {
            "$elt": "Tai Lam",
            "$id": "TAI LAM"
          },
          {
            "$elt": "Tai Mo Shan",
            "$id": "TAI MO SHAN"
          },
          {
            "$elt": "Tai Po",
            "$id": "TAI PO"
          },
          {
            "$elt": "Tai Tam",
            "$id": "TAI TAM"
          },
          {
            "$elt": "Tai Wai",
            "$id": "TAI WAI"
          },
          {
            "$elt": "Taikoo Shing",
            "$id": "TAIKOO SHING"
          },
          {
            "$elt": "Tap Mun Chau",
            "$id": "TAP MUN CHAU"
          },
          {
            "$elt": "The Peak",
            "$id": "THE PEAK"
          },
          {
            "$elt": "Tin Shui Wai",
            "$id": "TIN SHUI WAI"
          },
          {
            "$elt": "Ting Kok",
            "$id": "TING KOK"
          },
          {
            "$elt": "To Kwa Wan",
            "$id": "TO KWA WAN"
          },
          {
            "$elt": "Tseung Kwan O",
            "$id": "TSEUNG KWAN O"
          },
          {
            "$elt": "Tsim Sha Tsui",
            "$id": "TSIM SHA TSUI"
          },
          {
            "$elt": "Tsim Sha Tsui East",
            "$id": "TSIM SHA TSUI EAST"
          },
          {
            "$elt": "Tsing Yi",
            "$id": "TSING YI"
          },
          {
            "$elt": "Tsuen Wan",
            "$id": "TSUEN WAN"
          },
          {
            "$elt": "Tsz Wan Shan",
            "$id": "TSZ WAN SHAN"
          },
          {
            "$elt": "Tuen Mun",
            "$id": "TUEN MUN"
          },
          {
            "$elt": "Tung Chung",
            "$id": "TUNG CHUNG"
          },
          {
            "$elt": "Wah Fu",
            "$id": "WAH FU"
          },
          {
            "$elt": "Wan Chai",
            "$id": "WAN CHAI"
          },
          {
            "$elt": "Wang Tau Hom",
            "$id": "WANG TAU HOM"
          },
          {
            "$elt": "West Kowloon",
            "$id": "WEST KOWLOON"
          },
          {
            "$elt": "Western District",
            "$id": "WESTERN DISTRICT"
          },
          {
            "$elt": "Wong Chuk Hang",
            "$id": "WONG CHUK HANG"
          },
          {
            "$elt": "Wong Tai Sin",
            "$id": "WONG TAI SIN"
          },
          {
            "$elt": "Yau Ma Tei",
            "$id": "YAU MA TEI"
          },
          {
            "$elt": "Yau Tong",
            "$id": "YAU TONG"
          },
          {
            "$elt": "Yuen Long",
            "$id": "YUEN LONG"
          }
        ],
        "groupCityList": [
          {
            "$id": "HONG KONG ISLAND",
            "group": [
              {
                "$elt": "Aberdeen",
                "$id": "ABERDEEN"
              },
              {
                "$elt": "Admiralty",
                "$id": "ADMIRALTY"
              },
              {
                "$elt": "Ap Lei Chau",
                "$id": "AP LEI CHAU"
              },
              {
                "$elt": "Causeway Bay",
                "$id": "CAUSEWAY BAY"
              },
              {
                "$elt": "Central",
                "$id": "CENTRAL"
              },
              {
                "$elt": "Chai Wan",
                "$id": "CHAI WAN"
              },
              {
                "$elt": "Happy Valley",
                "$id": "HAPPY VALLEY"
              },
              {
                "$elt": "Jardines Lookout",
                "$id": "JARDINES LOOKOUT"
              },
              {
                "$elt": "Kennedy Town",
                "$id": "KENNEDY TOWN"
              },
              {
                "$elt": "Mid-Levels",
                "$id": "MID-LEVELS"
              },
              {
                "$elt": "North Point",
                "$id": "NORTH POINT"
              },
              {
                "$elt": "Pok Fu Lam",
                "$id": "POK FU LAM"
              },
              {
                "$elt": "Quarry Bay",
                "$id": "QUARRY BAY"
              },
              {
                "$elt": "Repulse Bay",
                "$id": "REPULSE BAY"
              },
              {
                "$elt": "Sai Wan Ho",
                "$id": "SAI WAN HO"
              },
              {
                "$elt": "Sai Ying Pun",
                "$id": "SAI YING PUN"
              },
              {
                "$elt": "Shau Kei Wan",
                "$id": "SHAU KEI WAN"
              },
              {
                "$elt": "Shek O",
                "$id": "SHEK O"
              },
              {
                "$elt": "Shek Tong Tsui",
                "$id": "SHEK TONG TSUI"
              },
              {
                "$elt": "Sheung Wan",
                "$id": "SHEUNG WAN"
              },
              {
                "$elt": "Siu Sai Wan",
                "$id": "SIU SAI WAN"
              },
              {
                "$elt": "So Kon Po",
                "$id": "SO KON PO"
              },
              {
                "$elt": "Stanley",
                "$id": "STANLEY"
              },
              {
                "$elt": "Tai Hang",
                "$id": "TAI HANG"
              },
              {
                "$elt": "Tai Tam",
                "$id": "TAI TAM"
              },
              {
                "$elt": "Taikoo Shing",
                "$id": "TAIKOO SHING"
              },
              {
                "$elt": "The Peak",
                "$id": "THE PEAK"
              },
              {
                "$elt": "Wah Fu",
                "$id": "WAH FU"
              },
              {
                "$elt": "Wan Chai",
                "$id": "WAN CHAI"
              },
              {
                "$elt": "Western District",
                "$id": "WESTERN DISTRICT"
              },
              {
                "$elt": "Wong Chuk Hang",
                "$id": "WONG CHUK HANG"
              }
            ],
            "label": "Hong Kong Island"
          },
          {
            "$id": "KOWLOON",
            "group": [
              {
                "$elt": "Cha Kwo Ling",
                "$id": "CHA KWO LING"
              },
              {
                "$elt": "Cheung Sha Wan",
                "$id": "CHEUNG SHA WAN"
              },
              {
                "$elt": "Choi Hung",
                "$id": "CHOI HUNG"
              },
              {
                "$elt": "Diamond Hill",
                "$id": "DIAMOND HILL"
              },
              {
                "$elt": "Ho Man Tin",
                "$id": "HO MAN TIN"
              },
              {
                "$elt": "Hung Hom",
                "$id": "HUNG HOM"
              },
              {
                "$elt": "Jordan",
                "$id": "JORDAN"
              },
              {
                "$elt": "Kowloon Bay",
                "$id": "KOWLOON BAY"
              },
              {
                "$elt": "Kowloon City",
                "$id": "KOWLOON CITY"
              },
              {
                "$elt": "Kowloon Tong",
                "$id": "KOWLOON TONG"
              },
              {
                "$elt": "Kwun Tong",
                "$id": "KWUN TONG"
              },
              {
                "$elt": "Lai Chi Kok",
                "$id": "LAI CHI KOK"
              },
              {
                "$elt": "Lam Tin",
                "$id": "LAM TIN"
              },
              {
                "$elt": "Lei Yue Mun",
                "$id": "LEI YUE MUN"
              },
              {
                "$elt": "Lok Fu",
                "$id": "LOK FU"
              },
              {
                "$elt": "Ma Tau Wai",
                "$id": "MA TAU WAI"
              },
              {
                "$elt": "Mei Foo",
                "$id": "MEI FOO"
              },
              {
                "$elt": "Mong Kok",
                "$id": "MONG KOK"
              },
              {
                "$elt": "Ngau Chi Wan",
                "$id": "NGAU CHI WAN"
              },
              {
                "$elt": "Ngau Tau Kok",
                "$id": "NGAU TAU KOK"
              },
              {
                "$elt": "Prince Edward",
                "$id": "PRINCE EDWARD"
              },
              {
                "$elt": "San Po Kong",
                "$id": "SAN PO KONG"
              },
              {
                "$elt": "Sau Mau Ping",
                "$id": "SAU MAU PING"
              },
              {
                "$elt": "Sham Shui Po",
                "$id": "SHAM SHUI PO"
              },
              {
                "$elt": "Shek Kip Mei",
                "$id": "SHEK KIP MEI"
              },
              {
                "$elt": "Tai Kok Tsui",
                "$id": "TAI KOK TSUI"
              },
              {
                "$elt": "To Kwa Wan",
                "$id": "TO KWA WAN"
              },
              {
                "$elt": "Tsim Sha Tsui",
                "$id": "TSIM SHA TSUI"
              },
              {
                "$elt": "Tsim Sha Tsui East",
                "$id": "TSIM SHA TSUI EAST"
              },
              {
                "$elt": "Tsz Wan Shan",
                "$id": "TSZ WAN SHAN"
              },
              {
                "$elt": "Wang Tau Hom",
                "$id": "WANG TAU HOM"
              },
              {
                "$elt": "West Kowloon",
                "$id": "WEST KOWLOON"
              },
              {
                "$elt": "Wong Tai Sin",
                "$id": "WONG TAI SIN"
              },
              {
                "$elt": "Yau Ma Tei",
                "$id": "YAU MA TEI"
              },
              {
                "$elt": "Yau Tong",
                "$id": "YAU TONG"
              }
            ],
            "label": "Kowloon"
          },
          {
            "$id": "NEW TERRITORIES",
            "group": [
              {
                "$elt": "Castle Peak",
                "$id": "CASTLE PEAK"
              },
              {
                "$elt": "Castle Peak Bay",
                "$id": "CASTLE PEAK BAY"
              },
              {
                "$elt": "Chek Keng",
                "$id": "CHEK KENG"
              },
              {
                "$elt": "Chek Lap Kok",
                "$id": "CHEK LAP KOK"
              },
              {
                "$elt": "Cheung Chau",
                "$id": "CHEUNG CHAU"
              },
              {
                "$elt": "Chinese University",
                "$id": "CHINESE UNIVERSITY"
              },
              {
                "$elt": "Clear Water Bay",
                "$id": "CLEAR WATER BAY"
              },
              {
                "$elt": "Fanling",
                "$id": "FANLING"
              },
              {
                "$elt": "Fo Tan",
                "$id": "FO TAN"
              },
              {
                "$elt": "Hang Hau",
                "$id": "HANG HAU"
              },
              {
                "$elt": "Kam Tin",
                "$id": "KAM TIN"
              },
              {
                "$elt": "Kat O Chau",
                "$id": "KAT O CHAU"
              },
              {
                "$elt": "Kau To",
                "$id": "KAU TO"
              },
              {
                "$elt": "Kwai Chung",
                "$id": "KWAI CHUNG"
              },
              {
                "$elt": "Kwai Fong",
                "$id": "KWAI FONG"
              },
              {
                "$elt": "Lamma Island",
                "$id": "LAMMA ISLAND"
              },
              {
                "$elt": "Lantau Island",
                "$id": "LANTAU ISLAND"
              },
              {
                "$elt": "Lau Fau Shan",
                "$id": "LAU FAU SHAN"
              },
              {
                "$elt": "Lo Wu",
                "$id": "LO WU"
              },
              {
                "$elt": "Lok Ma Chau",
                "$id": "LOK MA CHAU"
              },
              {
                "$elt": "Lung Kwu Chau",
                "$id": "LUNG KWU CHAU"
              },
              {
                "$elt": "Ma On Shan",
                "$id": "MA ON SHAN"
              },
              {
                "$elt": "Nai Chung",
                "$id": "NAI CHUNG"
              },
              {
                "$elt": "Ninepin Group",
                "$id": "NINEPIN GROUP"
              },
              {
                "$elt": "Pak Sha Wan",
                "$id": "PAK SHA WAN"
              },
              {
                "$elt": "Pat Sin Leng",
                "$id": "PAT SIN LENG"
              },
              {
                "$elt": "Peng Chau",
                "$id": "PENG CHAU"
              },
              {
                "$elt": "Ping Shan",
                "$id": "PING SHAN"
              },
              {
                "$elt": "Po Toi Island",
                "$id": "PO TOI ISLAND"
              },
              {
                "$elt": "Sai Kung",
                "$id": "SAI KUNG"
              },
              {
                "$elt": "Sha Tau Kok",
                "$id": "SHA TAU KOK"
              },
              {
                "$elt": "Sha Tin",
                "$id": "SHA TIN"
              },
              {
                "$elt": "Sham Tseng",
                "$id": "SHAM TSENG"
              },
              {
                "$elt": "Shek Kong",
                "$id": "SHEK KONG"
              },
              {
                "$elt": "Sheung Shui",
                "$id": "SHEUNG SHUI"
              },
              {
                "$elt": "Siu Lik Yuen",
                "$id": "SIU LIK YUEN"
              },
              {
                "$elt": "Soko Islands",
                "$id": "SOKO ISLANDS"
              },
              {
                "$elt": "Tai Lam",
                "$id": "TAI LAM"
              },
              {
                "$elt": "Tai Mo Shan",
                "$id": "TAI MO SHAN"
              },
              {
                "$elt": "Tai Po",
                "$id": "TAI PO"
              },
              {
                "$elt": "Tai Wai",
                "$id": "TAI WAI"
              },
              {
                "$elt": "Tap Mun Chau",
                "$id": "TAP MUN CHAU"
              },
              {
                "$elt": "Tin Shui Wai",
                "$id": "TIN SHUI WAI"
              },
              {
                "$elt": "Ting Kok",
                "$id": "TING KOK"
              },
              {
                "$elt": "Tseung Kwan O",
                "$id": "TSEUNG KWAN O"
              },
              {
                "$elt": "Tsing Yi",
                "$id": "TSING YI"
              },
              {
                "$elt": "Tsuen Wan",
                "$id": "TSUEN WAN"
              },
              {
                "$elt": "Tuen Mun",
                "$id": "TUEN MUN"
              },
              {
                "$elt": "Tung Chung",
                "$id": "TUNG CHUNG"
              },
              {
                "$elt": "Yuen Long",
                "$id": "YUEN LONG"
              }
            ],
            "label": "New Territories/Outlying Islands"
          }
        ],
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "stateLabel": "Region",
        "stateList": [
          {
            "$elt": "Hong Kong Island",
            "$id": "HONG KONG ISLAND"
          },
          {
            "$elt": "Kowloon",
            "$id": "KOWLOON"
          },
          {
            "$elt": "New Territories/Outlying Islands",
            "$id": "NEW TERRITORIES"
          }
        ]
      },
      "HN": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "HR": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "HU": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 4 digits."
      },
      "ID": {
        "addressLine3": "Village / Subdistrict",
        "cityLabel": "City",
        "groupStateList": [
          {
            "$id": "ID-JW",
            "group": [
              {
                "$elt": "Banten",
                "$id": "BANTEN"
              },
              {
                "$elt": "Jakarta",
                "$id": "DKI JAKARTA"
              },
              {
                "$elt": "Jawa Barat",
                "$id": "JAWA BARAT"
              },
              {
                "$elt": "Jawa Tengah",
                "$id": "JAWA TENGAH"
              },
              {
                "$elt": "Jawa Timur",
                "$id": "JAWA TIMUR"
              },
              {
                "$elt": "Yogyakarta",
                "$id": "YOGYAKARTA"
              }
            ],
            "label": "Jawa"
          },
          {
            "$id": "ID-KA",
            "group": [
              {
                "$elt": "Kalimantan Barat",
                "$id": "KALIMANTAN BARAT"
              },
              {
                "$elt": "Kalimantan Selatan",
                "$id": "KALIMANTAN SELATAN"
              },
              {
                "$elt": "Kalimantan Tengah",
                "$id": "KALIMANTAN TENGAH"
              },
              {
                "$elt": "Kalimantan Utara",
                "$id": "KALIMANTAN UTARA"
              },
              {
                "$elt": "Kalimatan Timur",
                "$id": "KALIMANTAN TIMUR"
              }
            ],
            "label": "Kalimantan"
          },
          {
            "$id": "ID-ML",
            "group": [
              {
                "$elt": "Maluku",
                "$id": "MALUKU"
              },
              {
                "$elt": "Maluku Utara",
                "$id": "MALUKU UTARA"
              }
            ],
            "label": "Maluku"
          },
          {
            "$id": "ID-NU",
            "group": [
              {
                "$elt": "Bali",
                "$id": "BALI"
              },
              {
                "$elt": "Nusa Tenggara Barat",
                "$id": "NUSA TENGGARA BARAT"
              },
              {
                "$elt": "Nusa Tenggara Timur",
                "$id": "NUSA TENGGARA TIMUR"
              }
            ],
            "label": "Nusa Tenggara"
          },
          {
            "$id": "ID-IJ",
            "group": [
              {
                "$elt": "Papua",
                "$id": "PAPUA"
              },
              {
                "$elt": "Papua Barat",
                "$id": "PAPUA BARAT"
              }
            ],
            "label": "Papua"
          },
          {
            "$id": "ID-SL",
            "group": [
              {
                "$elt": "Gorontalo",
                "$id": "GORONTALO"
              },
              {
                "$elt": "Sulawesi Barat",
                "$id": "SULAWESI BARAT"
              },
              {
                "$elt": "Sulawesi Selatan",
                "$id": "SULAWESI SELATAN"
              },
              {
                "$elt": "Sulawesi Tengah",
                "$id": "SULAWESI TENGAH"
              },
              {
                "$elt": "Sulawesi Tenggara",
                "$id": "SULAWESI TENGGARA"
              },
              {
                "$elt": "Sulawesi Utara",
                "$id": "SULAWESI UTARA"
              }
            ],
            "label": "Sulawesi"
          },
          {
            "$id": "ID-SM",
            "group": [
              {
                "$elt": "Aceh",
                "$id": "ACEH"
              },
              {
                "$elt": "Bengkulu",
                "$id": "BENGKULU"
              },
              {
                "$elt": "Jambi",
                "$id": "JAMBI"
              },
              {
                "$elt": "Kepulauan Bangka Belitung",
                "$id": "KEPULAUAN BANGKA BELITUNG"
              },
              {
                "$elt": "Kepulauan Riau",
                "$id": "KEPULAUAN RIAU"
              },
              {
                "$elt": "Lampung",
                "$id": "LAMPUNG"
              },
              {
                "$elt": "Riau",
                "$id": "RIAU"
              },
              {
                "$elt": "Sumatera Barat",
                "$id": "SUMATERA BARAT"
              },
              {
                "$elt": "Sumatera Selatan",
                "$id": "SUMATERA SELATAN"
              },
              {
                "$elt": "Sumatera Utara",
                "$id": "SUMATERA UTARA"
              }
            ],
            "label": "Sumatera"
          }
        ],
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Aceh",
            "$id": "ACEH"
          },
          {
            "$elt": "Bali",
            "$id": "BALI"
          },
          {
            "$elt": "Banten",
            "$id": "BANTEN"
          },
          {
            "$elt": "Bengkulu",
            "$id": "BENGKULU"
          },
          {
            "$elt": "Gorontalo",
            "$id": "GORONTALO"
          },
          {
            "$elt": "Jakarta",
            "$id": "DKI JAKARTA"
          },
          {
            "$elt": "Jambi",
            "$id": "JAMBI"
          },
          {
            "$elt": "Jawa Barat",
            "$id": "JAWA BARAT"
          },
          {
            "$elt": "Jawa Tengah",
            "$id": "JAWA TENGAH"
          },
          {
            "$elt": "Jawa Timur",
            "$id": "JAWA TIMUR"
          },
          {
            "$elt": "Kalimantan Barat",
            "$id": "KALIMANTAN BARAT"
          },
          {
            "$elt": "Kalimantan Selatan",
            "$id": "KALIMANTAN SELATAN"
          },
          {
            "$elt": "Kalimantan Tengah",
            "$id": "KALIMANTAN TENGAH"
          },
          {
            "$elt": "Kalimantan Utara",
            "$id": "KALIMANTAN UTARA"
          },
          {
            "$elt": "Kalimatan Timur",
            "$id": "KALIMANTAN TIMUR"
          },
          {
            "$elt": "Kepulauan Bangka Belitung",
            "$id": "KEPULAUAN BANGKA BELITUNG"
          },
          {
            "$elt": "Kepulauan Riau",
            "$id": "KEPULAUAN RIAU"
          },
          {
            "$elt": "Lampung",
            "$id": "LAMPUNG"
          },
          {
            "$elt": "Maluku",
            "$id": "MALUKU"
          },
          {
            "$elt": "Maluku Utara",
            "$id": "MALUKU UTARA"
          },
          {
            "$elt": "Nusa Tenggara Barat",
            "$id": "NUSA TENGGARA BARAT"
          },
          {
            "$elt": "Nusa Tenggara Timur",
            "$id": "NUSA TENGGARA TIMUR"
          },
          {
            "$elt": "Papua",
            "$id": "PAPUA"
          },
          {
            "$elt": "Papua Barat",
            "$id": "PAPUA BARAT"
          },
          {
            "$elt": "Riau",
            "$id": "RIAU"
          },
          {
            "$elt": "Sulawesi Barat",
            "$id": "SULAWESI BARAT"
          },
          {
            "$elt": "Sulawesi Selatan",
            "$id": "SULAWESI SELATAN"
          },
          {
            "$elt": "Sulawesi Tengah",
            "$id": "SULAWESI TENGAH"
          },
          {
            "$elt": "Sulawesi Tenggara",
            "$id": "SULAWESI TENGGARA"
          },
          {
            "$elt": "Sulawesi Utara",
            "$id": "SULAWESI UTARA"
          },
          {
            "$elt": "Sumatera Barat",
            "$id": "SUMATERA BARAT"
          },
          {
            "$elt": "Sumatera Selatan",
            "$id": "SUMATERA SELATAN"
          },
          {
            "$elt": "Sumatera Utara",
            "$id": "SUMATERA UTARA"
          },
          {
            "$elt": "Yogyakarta",
            "$id": "YOGYAKARTA"
          }
        ],
        "validationError": "Your postcode must contain 5 digits."
      },
      "IE": {
        "cityLabel": "Town / City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "stateLabel": "County / Dublin postal district",
        "stateList": [
          {
            "$elt": "Co. Carlow",
            "$id": "CO CARLOW"
          },
          {
            "$elt": "Co. Cavan",
            "$id": "CO CAVAN"
          },
          {
            "$elt": "Co. Clare",
            "$id": "CO CLARE"
          },
          {
            "$elt": "Co. Cork",
            "$id": "CO CORK"
          },
          {
            "$elt": "Co. Donegal",
            "$id": "CO DONEGAL"
          },
          {
            "$elt": "Co. Dublin",
            "$id": "CO DUBLIN"
          },
          {
            "$elt": "Co. Galway",
            "$id": "CO GALWAY"
          },
          {
            "$elt": "Co. Kerry",
            "$id": "CO KERRY"
          },
          {
            "$elt": "Co. Kildare",
            "$id": "CO KILDARE"
          },
          {
            "$elt": "Co. Kilkenny",
            "$id": "CO KILKENNY"
          },
          {
            "$elt": "Co. Laois",
            "$id": "CO LAOIS"
          },
          {
            "$elt": "Co. Leitrim",
            "$id": "CO LEITRIM"
          },
          {
            "$elt": "Co. Limerick",
            "$id": "CO LIMERICK"
          },
          {
            "$elt": "Co. Longford",
            "$id": "CO LONGFORD"
          },
          {
            "$elt": "Co. Louth",
            "$id": "CO LOUTH"
          },
          {
            "$elt": "Co. Mayo",
            "$id": "CO MAYO"
          },
          {
            "$elt": "Co. Meath",
            "$id": "CO MEATH"
          },
          {
            "$elt": "Co. Monaghan",
            "$id": "CO MONAGHAN"
          },
          {
            "$elt": "Co. Offaly",
            "$id": "CO OFFALY"
          },
          {
            "$elt": "Co. Roscommon",
            "$id": "CO ROSCOMMON"
          },
          {
            "$elt": "Co. Sligo",
            "$id": "CO SLIGO"
          },
          {
            "$elt": "Co. Tipperary",
            "$id": "CO TIPPERARY"
          },
          {
            "$elt": "Co. Waterford",
            "$id": "CO WATERFORD"
          },
          {
            "$elt": "Co. Westmeath",
            "$id": "CO WESTMEATH"
          },
          {
            "$elt": "Co. Wexford",
            "$id": "CO WEXFORD"
          },
          {
            "$elt": "Co. Wicklow",
            "$id": "CO WICKLOW"
          },
          {
            "$elt": "Dublin 01",
            "$id": "DUBLIN 1"
          },
          {
            "$elt": "Dublin 02",
            "$id": "DUBLIN 2"
          },
          {
            "$elt": "Dublin 03",
            "$id": "DUBLIN 3"
          },
          {
            "$elt": "Dublin 04",
            "$id": "DUBLIN 4"
          },
          {
            "$elt": "Dublin 05",
            "$id": "DUBLIN 5"
          },
          {
            "$elt": "Dublin 06",
            "$id": "DUBLIN 6"
          },
          {
            "$elt": "Dublin 06W",
            "$id": "DUBLIN 6W"
          },
          {
            "$elt": "Dublin 07",
            "$id": "DUBLIN 7"
          },
          {
            "$elt": "Dublin 08",
            "$id": "DUBLIN 8"
          },
          {
            "$elt": "Dublin 09",
            "$id": "DUBLIN 9"
          },
          {
            "$elt": "Dublin 10",
            "$id": "DUBLIN 10"
          },
          {
            "$elt": "Dublin 11",
            "$id": "DUBLIN 11"
          },
          {
            "$elt": "Dublin 12",
            "$id": "DUBLIN 12"
          },
          {
            "$elt": "Dublin 13",
            "$id": "DUBLIN 13"
          },
          {
            "$elt": "Dublin 14",
            "$id": "DUBLIN 14"
          },
          {
            "$elt": "Dublin 15",
            "$id": "DUBLIN 15"
          },
          {
            "$elt": "Dublin 16",
            "$id": "DUBLIN 16"
          },
          {
            "$elt": "Dublin 17",
            "$id": "DUBLIN 17"
          },
          {
            "$elt": "Dublin 18",
            "$id": "DUBLIN 18"
          },
          {
            "$elt": "Dublin 20",
            "$id": "DUBLIN 20"
          },
          {
            "$elt": "Dublin 22",
            "$id": "DUBLIN 22"
          },
          {
            "$elt": "Dublin 24",
            "$id": "DUBLIN 24"
          }
        ],
        "validationError": "Please enter a valid local postcode or EIRCODE."
      },
      "IL": {
        "cityLabel": "City",
        "line1Label": "Street and house number",
        "line2Label": "More address details",
        "optionalLabel": "(optional)",
        "postcodeLabel": "ZIP code",
        "validationError": "Your ZIP code must be 5 or 7 digits."
      },
      "IN": {
        "cityLabel": "Town / City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "PIN code",
        "selectLabel": "Select",
        "stateLabel": "State",
        "stateList": [
          {
            "$elt": "Andaman and Nicobar Islands",
            "$id": "Andaman and Nicobar Islands"
          },
          {
            "$elt": "Andhra Pradesh",
            "$id": "Andhra Pradesh"
          },
          {
            "$elt": "Arunachal Pradesh",
            "$id": "Arunachal Pradesh"
          },
          {
            "$elt": "Assam",
            "$id": "Assam"
          },
          {
            "$elt": "Bihar",
            "$id": "Bihar"
          },
          {
            "$elt": "Chandigarh",
            "$id": "Chandigarh"
          },
          {
            "$elt": "Chhattisgarh",
            "$id": "Chhattisgarh"
          },
          {
            "$elt": "Dadra and Nagar Haveli",
            "$id": "Dadra and Nagar Haveli"
          },
          {
            "$elt": "Daman and Diu",
            "$id": "Daman and Diu"
          },
          {
            "$elt": "Delhi",
            "$id": "Delhi (NCT)"
          },
          {
            "$elt": "Goa",
            "$id": "Goa"
          },
          {
            "$elt": "Gujarat",
            "$id": "Gujarat"
          },
          {
            "$elt": "Haryana",
            "$id": "Haryana"
          },
          {
            "$elt": "Himachal Pradesh",
            "$id": "Himachal Pradesh"
          },
          {
            "$elt": "Jammu and Kashmir",
            "$id": "Jammu and Kashmir"
          },
          {
            "$elt": "Jharkhand",
            "$id": "Jharkhand"
          },
          {
            "$elt": "Karnataka",
            "$id": "Karnataka"
          },
          {
            "$elt": "Kerala",
            "$id": "Kerala"
          },
          {
            "$elt": "Lakshadweep",
            "$id": "Lakshadweep"
          },
          {
            "$elt": "Madhya Pradesh",
            "$id": "Madhya Pradesh"
          },
          {
            "$elt": "Maharashtra",
            "$id": "Maharashtra"
          },
          {
            "$elt": "Manipur",
            "$id": "Manipur"
          },
          {
            "$elt": "Meghalaya",
            "$id": "Meghalaya"
          },
          {
            "$elt": "Mizoram",
            "$id": "Mizoram"
          },
          {
            "$elt": "Nagaland",
            "$id": "Nagaland"
          },
          {
            "$elt": "Odisha",
            "$id": "Odisha"
          },
          {
            "$elt": "Puducherry",
            "$id": "Puducherry"
          },
          {
            "$elt": "Punjab",
            "$id": "Punjab"
          },
          {
            "$elt": "Rajasthan",
            "$id": "Rajasthan"
          },
          {
            "$elt": "Sikkim",
            "$id": "Sikkim"
          },
          {
            "$elt": "Tamil Nadu",
            "$id": "Tamil Nadu"
          },
          {
            "$elt": "Telangana",
            "$id": "Telangana"
          },
          {
            "$elt": "Tripura",
            "$id": "Tripura"
          },
          {
            "$elt": "Uttar Pradesh",
            "$id": "Uttar Pradesh"
          },
          {
            "$elt": "Uttarakhand",
            "$id": "Uttarakhand"
          },
          {
            "$elt": "West Bengal",
            "$id": "West Bengal"
          },
          {
            "$elt": "Army Post Office",
            "$id": "APO"
          }
        ],
        "validationError": "Your PIN code must contain 6 digits."
      },
      "IS": {
        "cityLabel": "Town",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Post code",
        "validationError": "Your post code must be 3 digits."
      },
      "IT": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Agrigento",
            "$id": "AG"
          },
          {
            "$elt": "Alessandria",
            "$id": "AL"
          },
          {
            "$elt": "Ancona",
            "$id": "AN"
          },
          {
            "$elt": "Aosta",
            "$id": "AO"
          },
          {
            "$elt": "Arezzo",
            "$id": "AR"
          },
          {
            "$elt": "Ascoli Piceno",
            "$id": "AP"
          },
          {
            "$elt": "Asti",
            "$id": "AT"
          },
          {
            "$elt": "Avellino",
            "$id": "AV"
          },
          {
            "$elt": "Bari",
            "$id": "BA"
          },
          {
            "$elt": "Barletta-Andria-Trani",
            "$id": "BT"
          },
          {
            "$elt": "Belluno",
            "$id": "BL"
          },
          {
            "$elt": "Benevento",
            "$id": "BN"
          },
          {
            "$elt": "Bergamo",
            "$id": "BG"
          },
          {
            "$elt": "Biella",
            "$id": "BI"
          },
          {
            "$elt": "Bologna",
            "$id": "BO"
          },
          {
            "$elt": "Bolzano",
            "$id": "BZ"
          },
          {
            "$elt": "Brescia",
            "$id": "BS"
          },
          {
            "$elt": "Brindisi",
            "$id": "BR"
          },
          {
            "$elt": "Cagliari",
            "$id": "CA"
          },
          {
            "$elt": "Caltanissetta",
            "$id": "CL"
          },
          {
            "$elt": "Campobasso",
            "$id": "CB"
          },
          {
            "$elt": "Carbonia-Iglesias",
            "$id": "CI"
          },
          {
            "$elt": "Caserta",
            "$id": "CE"
          },
          {
            "$elt": "Catania",
            "$id": "CT"
          },
          {
            "$elt": "Catanzaro",
            "$id": "CZ"
          },
          {
            "$elt": "Chieti",
            "$id": "CH"
          },
          {
            "$elt": "Como",
            "$id": "CO"
          },
          {
            "$elt": "Cosenza",
            "$id": "CS"
          },
          {
            "$elt": "Cremona",
            "$id": "CR"
          },
          {
            "$elt": "Crotone",
            "$id": "KR"
          },
          {
            "$elt": "Cuneo",
            "$id": "CN"
          },
          {
            "$elt": "Enna",
            "$id": "EN"
          },
          {
            "$elt": "Fermo",
            "$id": "FM"
          },
          {
            "$elt": "Ferrara",
            "$id": "FE"
          },
          {
            "$elt": "Firenze",
            "$id": "FI"
          },
          {
            "$elt": "Foggia",
            "$id": "FG"
          },
          {
            "$elt": "Forlì-Cesena",
            "$id": "FC"
          },
          {
            "$elt": "Frosinone",
            "$id": "FR"
          },
          {
            "$elt": "Genova",
            "$id": "GE"
          },
          {
            "$elt": "Gorizia",
            "$id": "GO"
          },
          {
            "$elt": "Grosseto",
            "$id": "GR"
          },
          {
            "$elt": "Imperia",
            "$id": "IM"
          },
          {
            "$elt": "Isernia",
            "$id": "IS"
          },
          {
            "$elt": "La Spezia",
            "$id": "SP"
          },
          {
            "$elt": "L'Aquila",
            "$id": "AQ"
          },
          {
            "$elt": "Latina",
            "$id": "LT"
          },
          {
            "$elt": "Lecce",
            "$id": "LE"
          },
          {
            "$elt": "Lecco",
            "$id": "LC"
          },
          {
            "$elt": "Livorno",
            "$id": "LI"
          },
          {
            "$elt": "Lodi",
            "$id": "LO"
          },
          {
            "$elt": "Lucca",
            "$id": "LU"
          },
          {
            "$elt": "Macerata",
            "$id": "MC"
          },
          {
            "$elt": "Mantova",
            "$id": "MN"
          },
          {
            "$elt": "Massa-Carrara",
            "$id": "MS"
          },
          {
            "$elt": "Matera",
            "$id": "MT"
          },
          {
            "$elt": "Medio Campidano",
            "$id": "VS"
          },
          {
            "$elt": "Messina",
            "$id": "ME"
          },
          {
            "$elt": "Milano",
            "$id": "MI"
          },
          {
            "$elt": "Modena",
            "$id": "MO"
          },
          {
            "$elt": "Monza e della Brianza",
            "$id": "MB"
          },
          {
            "$elt": "Napoli",
            "$id": "NA"
          },
          {
            "$elt": "Novara",
            "$id": "NO"
          },
          {
            "$elt": "Nuoro",
            "$id": "NU"
          },
          {
            "$elt": "Ogliastra",
            "$id": "OG"
          },
          {
            "$elt": "Olbia-Tempio",
            "$id": "OT"
          },
          {
            "$elt": "Oristano",
            "$id": "OR"
          },
          {
            "$elt": "Padova",
            "$id": "PD"
          },
          {
            "$elt": "Palermo",
            "$id": "PA"
          },
          {
            "$elt": "Parma",
            "$id": "PR"
          },
          {
            "$elt": "Pavia",
            "$id": "PV"
          },
          {
            "$elt": "Perugia",
            "$id": "PG"
          },
          {
            "$elt": "Pesaro e Urbino",
            "$id": "PU"
          },
          {
            "$elt": "Pescara",
            "$id": "PE"
          },
          {
            "$elt": "Piacenza",
            "$id": "PC"
          },
          {
            "$elt": "Pisa",
            "$id": "PI"
          },
          {
            "$elt": "Pistoia",
            "$id": "PT"
          },
          {
            "$elt": "Pordenone",
            "$id": "PN"
          },
          {
            "$elt": "Potenza",
            "$id": "PZ"
          },
          {
            "$elt": "Prato",
            "$id": "PO"
          },
          {
            "$elt": "Ragusa",
            "$id": "RG"
          },
          {
            "$elt": "Ravenna",
            "$id": "RA"
          },
          {
            "$elt": "Reggio Calabria",
            "$id": "RC"
          },
          {
            "$elt": "Reggio Emilia",
            "$id": "RE"
          },
          {
            "$elt": "Rieti",
            "$id": "RI"
          },
          {
            "$elt": "Rimini",
            "$id": "RN"
          },
          {
            "$elt": "Roma",
            "$id": "RM"
          },
          {
            "$elt": "Rovigo",
            "$id": "RO"
          },
          {
            "$elt": "Salerno",
            "$id": "SA"
          },
          {
            "$elt": "Sassari",
            "$id": "SS"
          },
          {
            "$elt": "Savona",
            "$id": "SV"
          },
          {
            "$elt": "Siena",
            "$id": "SI"
          },
          {
            "$elt": "Siracusa",
            "$id": "SR"
          },
          {
            "$elt": "Sondrio",
            "$id": "SO"
          },
          {
            "$elt": "Taranto",
            "$id": "TA"
          },
          {
            "$elt": "Teramo",
            "$id": "TE"
          },
          {
            "$elt": "Terni",
            "$id": "TR"
          },
          {
            "$elt": "Torino",
            "$id": "TO"
          },
          {
            "$elt": "Trapani",
            "$id": "TP"
          },
          {
            "$elt": "Trento",
            "$id": "TN"
          },
          {
            "$elt": "Treviso",
            "$id": "TV"
          },
          {
            "$elt": "Trieste",
            "$id": "TS"
          },
          {
            "$elt": "Udine",
            "$id": "UD"
          },
          {
            "$elt": "Varese",
            "$id": "VA"
          },
          {
            "$elt": "Venezia",
            "$id": "VE"
          },
          {
            "$elt": "Verbano-Cusio-Ossola",
            "$id": "VB"
          },
          {
            "$elt": "Vercelli",
            "$id": "VC"
          },
          {
            "$elt": "Verona",
            "$id": "VR"
          },
          {
            "$elt": "Vibo Valentia",
            "$id": "VV"
          },
          {
            "$elt": "Vicenza",
            "$id": "VI"
          },
          {
            "$elt": "Viterbo",
            "$id": "VT"
          }
        ],
        "validationError": "Your postal code must contain 5 digits."
      },
      "JM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "JO": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "JP": {
        "addressLine1Help": "Example: Aoyama 1-1-1",
        "addressLine2Help": "Example: PayPal Building 1037",
        "cityHelp": "Example: Yokohama-shi, Midori-ku",
        "cityLabel": "City / Ward / Town / Village",
        "line1Label": "Street name, street number",
        "line2Label": "Building name, floor, room number",
        "optionalLabel": "(optional)",
        "postalCodePrefix": "〒",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Prefecture",
        "stateList": [
          {
            "$elt": "Hokkaido",
            "$id": "HOKKAIDO"
          },
          {
            "$elt": "Aomori",
            "$id": "AOMORI-KEN"
          },
          {
            "$elt": "Iwate",
            "$id": "IWATE-KEN"
          },
          {
            "$elt": "Miyagi",
            "$id": "MIYAGI-KEN"
          },
          {
            "$elt": "Akita",
            "$id": "AKITA-KEN"
          },
          {
            "$elt": "Yamagata",
            "$id": "YAMAGATA-KEN"
          },
          {
            "$elt": "Fukushima",
            "$id": "FUKUSHIMA-KEN"
          },
          {
            "$elt": "Ibaraki",
            "$id": "IBARAKI-KEN"
          },
          {
            "$elt": "Tochigi",
            "$id": "TOCHIGI-KEN"
          },
          {
            "$elt": "Gunma",
            "$id": "GUNMA-KEN"
          },
          {
            "$elt": "Saitama",
            "$id": "SAITAMA-KEN"
          },
          {
            "$elt": "Chiba",
            "$id": "CHIBA-KEN"
          },
          {
            "$elt": "Tokyo",
            "$id": "TOKYO-TO"
          },
          {
            "$elt": "Kanagawa",
            "$id": "KANAGAWA-KEN"
          },
          {
            "$elt": "Niigata",
            "$id": "NIIGATA-KEN"
          },
          {
            "$elt": "Toyama",
            "$id": "TOYAMA-KEN"
          },
          {
            "$elt": "Ishikawa",
            "$id": "ISHIKAWA-KEN"
          },
          {
            "$elt": "Fukui",
            "$id": "FUKUI-KEN"
          },
          {
            "$elt": "Yamanashi",
            "$id": "YAMANASHI-KEN"
          },
          {
            "$elt": "Nagano",
            "$id": "NAGANO-KEN"
          },
          {
            "$elt": "Gifu",
            "$id": "GIFU-KEN"
          },
          {
            "$elt": "Shizuoka",
            "$id": "SHIZUOKA-KEN"
          },
          {
            "$elt": "Aichi",
            "$id": "AICHI-KEN"
          },
          {
            "$elt": "Mie",
            "$id": "MIE-KEN"
          },
          {
            "$elt": "Shiga",
            "$id": "SHIGA-KEN"
          },
          {
            "$elt": "Kyoto",
            "$id": "KYOTO-FU"
          },
          {
            "$elt": "Osaka",
            "$id": "OSAKA-FU"
          },
          {
            "$elt": "Hyogo",
            "$id": "HYOGO-KEN"
          },
          {
            "$elt": "Nara",
            "$id": "NARA-KEN"
          },
          {
            "$elt": "Wakayama",
            "$id": "WAKAYAMA-KEN"
          },
          {
            "$elt": "Tottori",
            "$id": "TOTTORI-KEN"
          },
          {
            "$elt": "Shimane",
            "$id": "SHIMANE-KEN"
          },
          {
            "$elt": "Okayama",
            "$id": "OKAYAMA-KEN"
          },
          {
            "$elt": "Hiroshima",
            "$id": "HIROSHIMA-KEN"
          },
          {
            "$elt": "Yamaguchi",
            "$id": "YAMAGUCHI-KEN"
          },
          {
            "$elt": "Tokushima",
            "$id": "TOKUSHIMA-KEN"
          },
          {
            "$elt": "Kagawa",
            "$id": "KAGAWA-KEN"
          },
          {
            "$elt": "Ehime",
            "$id": "EHIME-KEN"
          },
          {
            "$elt": "Kochi",
            "$id": "KOCHI-KEN"
          },
          {
            "$elt": "Fukuoka",
            "$id": "FUKUOKA-KEN"
          },
          {
            "$elt": "Saga",
            "$id": "SAGA-KEN"
          },
          {
            "$elt": "Nagasaki",
            "$id": "NAGASAKI-KEN"
          },
          {
            "$elt": "Kumamoto",
            "$id": "KUMAMOTO-KEN"
          },
          {
            "$elt": "Oita",
            "$id": "OITA-KEN"
          },
          {
            "$elt": "Miyazaki",
            "$id": "MIYAZAKI-KEN"
          },
          {
            "$elt": "Kagoshima",
            "$id": "KAGOSHIMA-KEN"
          },
          {
            "$elt": "Okinawa",
            "$id": "OKINAWA-KEN"
          }
        ],
        "validationError": "Your postal code must contain 7 digits in the following format: 112-0001",
        "zipcodeHelp": "Example: 123-4567"
      },
      "KE": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "KG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "validationError": "Your postal code must be 6 digits."
      },
      "KH": {
        "cityLabel": "City / Province",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "KI": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "KM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "KN": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "KR": {
        "cityLabel": "City / District",
        "line1Label": "Street, Building number",
        "line2Label": "More address information",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Busan",
            "$id": "Busan"
          },
          {
            "$elt": "Daegu",
            "$id": "Daegu"
          },
          {
            "$elt": "Daejeon",
            "$id": "Daejeon"
          },
          {
            "$elt": "Gangwon",
            "$id": "Gangwon-do"
          },
          {
            "$elt": "Gwangju",
            "$id": "Gwangju"
          },
          {
            "$elt": "Gyeonggi",
            "$id": "Gyeonggi-do"
          },
          {
            "$elt": "Incheon",
            "$id": "Incheon"
          },
          {
            "$elt": "Jeju",
            "$id": "Jeju-do"
          },
          {
            "$elt": "North Chungcheong",
            "$id": "Chungcheongbuk-do"
          },
          {
            "$elt": "North Gyeongsang",
            "$id": "Gyeongsangbuk-do"
          },
          {
            "$elt": "North Jeolla",
            "$id": "Jeollabuk-do"
          },
          {
            "$elt": "Sejong",
            "$id": "Sejong"
          },
          {
            "$elt": "Seoul",
            "$id": "Seoul"
          },
          {
            "$elt": "South Chungcheong",
            "$id": "Chungcheongnam-do"
          },
          {
            "$elt": "South Gyeongsang",
            "$id": "Gyeongsangnam-do"
          },
          {
            "$elt": "South Jeolla",
            "$id": "Jeollanam-do"
          },
          {
            "$elt": "Ulsan",
            "$id": "Ulsan"
          }
        ],
        "validationError": "Your postal code must be either 5 digits (06108) or 6 digits with a dash in the middle (135-283)."
      },
      "KW": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 5 digits."
      },
      "KY": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "KZ": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "District",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Region / Independent city",
        "stateList": [
          {
            "$elt": "Almaty",
            "$id": "Almaty"
          },
          {
            "$elt": "Almaty Region",
            "$id": "Almaty Region"
          },
          {
            "$elt": "Aqmola Region",
            "$id": "Aqmola Region"
          },
          {
            "$elt": "Aqtöbe Region",
            "$id": "Aqtöbe Region"
          },
          {
            "$elt": "Astana",
            "$id": "Astana"
          },
          {
            "$elt": "Atyraū Region",
            "$id": "Atyraū Region"
          },
          {
            "$elt": "Batys Qazaqstan Region",
            "$id": "Batys Qazaqstan Region"
          },
          {
            "$elt": "Mangghystaū Region",
            "$id": "Mangghystaū Region"
          },
          {
            "$elt": "Ongtüstik Qazaqstan Region",
            "$id": "Ongtüstik Qazaqstan Region"
          },
          {
            "$elt": "Pavlodar Region",
            "$id": "Pavlodar Region"
          },
          {
            "$elt": "Qaraghandy Region",
            "$id": "Qaraghandy Region"
          },
          {
            "$elt": "Qostanay Region",
            "$id": "Qostanay Region"
          },
          {
            "$elt": "Qyzylorda Region",
            "$id": "Qyzylorda Region"
          },
          {
            "$elt": "Shyghys Qazaqstan Region",
            "$id": "Shyghys Qazaqstan Region"
          },
          {
            "$elt": "Soltüstik Qazaqstan Region",
            "$id": "Soltüstik Qazaqstan Region"
          },
          {
            "$elt": "Zhambyl Region",
            "$id": "Zhambyl Region"
          }
        ],
        "validationError": "Your postal code must be 6 digits."
      },
      "LA": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Post code",
        "validationError": "Your post code must be 5 digits."
      },
      "LC": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "LI": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "LK": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "LS": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "LT": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "validationError": "Your postcode must be 5 digits."
      },
      "LU": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Post code",
        "validationError": "Your post code must be 4 digits."
      },
      "LV": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be the letters \"LV-\" followed by 4 digits."
      },
      "MA": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "MC": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 980 followed by 2 digits."
      },
      "MD": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "ME": {
        "cityLabel": "Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 8 followed by 4 digits."
      },
      "MG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "MH": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "MK": {
        "cityLabel": "Municipality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal number",
        "validationError": "Your postal number must be 4 digits."
      },
      "ML": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "MN": {
        "cityLabel": "District / Sub-province",
        "line1Label": "Address",
        "line2Label": "Sub-district / Sub-division",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Capital / Province",
        "stateList": [
          {
            "$elt": "Arkhangai",
            "$id": "ARKHANGAI"
          },
          {
            "$elt": "Bayan-Ölgii",
            "$id": "BAYAN-ÖLGII"
          },
          {
            "$elt": "Bayankhongor",
            "$id": "BAYANKHONGOR"
          },
          {
            "$elt": "Bulgan",
            "$id": "BULGAN"
          },
          {
            "$elt": "Darkhan-Uul",
            "$id": "DARKHAN-UUL"
          },
          {
            "$elt": "Dornod",
            "$id": "DORNOD"
          },
          {
            "$elt": "Dornogovi",
            "$id": "DORNOGOVI"
          },
          {
            "$elt": "Dundgovi",
            "$id": "DUNDGOVI"
          },
          {
            "$elt": "Govi-Altai",
            "$id": "GOVI-ALTAI"
          },
          {
            "$elt": "Govisümber",
            "$id": "GOVISÜMBER"
          },
          {
            "$elt": "Khentii",
            "$id": "KHENTII"
          },
          {
            "$elt": "Khovd",
            "$id": "KHOVD"
          },
          {
            "$elt": "Khövsgöl",
            "$id": "KHÖVSGÖL"
          },
          {
            "$elt": "Ömnögovi",
            "$id": "ÖMNÖGOVI"
          },
          {
            "$elt": "Orkhon",
            "$id": "ORKHON"
          },
          {
            "$elt": "Övörkhangai",
            "$id": "ÖVÖRKHANGAI"
          },
          {
            "$elt": "Selenge",
            "$id": "SELENGE"
          },
          {
            "$elt": "Sükhbaatar",
            "$id": "SÜKHBAATAR"
          },
          {
            "$elt": "Töv",
            "$id": "TÖV"
          },
          {
            "$elt": "Ulaanbaatar",
            "$id": "ULAANBAATAR"
          },
          {
            "$elt": "Uvs",
            "$id": "UVS"
          },
          {
            "$elt": "Zavkhan",
            "$id": "ZAVKHAN"
          }
        ],
        "validationError": "Your postal code must be 5 digits."
      },
      "MQ": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits and begin with 972 or 982."
      },
      "MR": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "MS": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "MT": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 3 letters followed by a space (optional) and then 4 digits."
      },
      "MU": {
        "cityLabel": "Main village / Town",
        "line1Label": "Address line 1",
        "line2Label": "Sub-locality",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Post code",
        "stateLabel": "District / Dependency",
        "stateList": [
          {
            "$elt": "Agalega Islands",
            "$id": "Agalega Islands"
          },
          {
            "$elt": "Black River",
            "$id": "Black River"
          },
          {
            "$elt": "Cargados Carajos Shoals",
            "$id": "Cargados Carajos Shoals"
          },
          {
            "$elt": "Flacq",
            "$id": "Flacq"
          },
          {
            "$elt": "Grand Port",
            "$id": "Grand Port"
          },
          {
            "$elt": "Moka",
            "$id": "Moka"
          },
          {
            "$elt": "Pamplemousses",
            "$id": "Pamplemousses"
          },
          {
            "$elt": "Plaines Wilhems",
            "$id": "Plaines Wilhems"
          },
          {
            "$elt": "Port Louis",
            "$id": "Port Louis"
          },
          {
            "$elt": "Rivière du Rempart",
            "$id": "Rivière du Rempart"
          },
          {
            "$elt": "Rodrigues Island",
            "$id": "Rodrigues Island"
          },
          {
            "$elt": "Savanne",
            "$id": "Savanne"
          }
        ],
        "validationError": "Your post code must be 5 digits."
      },
      "MV": {
        "cityLabel": "City / Region",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "MW": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "MX": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Neighborhood / Quarter",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "State",
        "stateList": [
          {
            "$elt": "Aguascalientes",
            "$id": "AGS"
          },
          {
            "$elt": "Baja California",
            "$id": "BC"
          },
          {
            "$elt": "Baja California Sur",
            "$id": "BCS"
          },
          {
            "$elt": "Campeche",
            "$id": "CAMP"
          },
          {
            "$elt": "Chiapas",
            "$id": "CHIS"
          },
          {
            "$elt": "Chihuahua",
            "$id": "CHIH"
          },
          {
            "$elt": "Coahuila",
            "$id": "COAH"
          },
          {
            "$elt": "Colima",
            "$id": "COL"
          },
          {
            "$elt": "Distrito Federal",
            "$id": "DF"
          },
          {
            "$elt": "Durango",
            "$id": "DGO"
          },
          {
            "$elt": "Estado de México",
            "$id": "MEX"
          },
          {
            "$elt": "Guanajuato",
            "$id": "GTO"
          },
          {
            "$elt": "Guerrero",
            "$id": "GRO"
          },
          {
            "$elt": "Hidalgo",
            "$id": "HGO"
          },
          {
            "$elt": "Jalisco",
            "$id": "JAL"
          },
          {
            "$elt": "Michoacán",
            "$id": "MICH"
          },
          {
            "$elt": "Morelos",
            "$id": "MOR"
          },
          {
            "$elt": "Nayarit",
            "$id": "NAY"
          },
          {
            "$elt": "Nuevo León",
            "$id": "NL"
          },
          {
            "$elt": "Oaxaca",
            "$id": "OAX"
          },
          {
            "$elt": "Puebla",
            "$id": "PUE"
          },
          {
            "$elt": "Querétaro",
            "$id": "QRO"
          },
          {
            "$elt": "Quintana Roo",
            "$id": "Q ROO"
          },
          {
            "$elt": "San Luis Potosí",
            "$id": "SLP"
          },
          {
            "$elt": "Sinaloa",
            "$id": "SIN"
          },
          {
            "$elt": "Sonora",
            "$id": "SON"
          },
          {
            "$elt": "Tabasco",
            "$id": "TAB"
          },
          {
            "$elt": "Tamaulipas",
            "$id": "TAMPS"
          },
          {
            "$elt": "Tlaxcala",
            "$id": "TLAX"
          },
          {
            "$elt": "Veracruz",
            "$id": "VER"
          },
          {
            "$elt": "Yucatán",
            "$id": "YUC"
          },
          {
            "$elt": "Zacatecas",
            "$id": "ZAC"
          }
        ],
        "validationError": "Your postal code must contain 5 digits."
      },
      "MY": {
        "cityLabel": "City / Town / Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "stateLabel": "State / Federal territory",
        "stateList": [
          {
            "$elt": "Johor",
            "$id": "Johor"
          },
          {
            "$elt": "Kedah",
            "$id": "Kedah"
          },
          {
            "$elt": "Kelantan",
            "$id": "Kelantan"
          },
          {
            "$elt": "Kuala Lumpur",
            "$id": "Kuala Lumpur"
          },
          {
            "$elt": "Labuan",
            "$id": "Labuan"
          },
          {
            "$elt": "Melaka",
            "$id": "Melaka"
          },
          {
            "$elt": "Negeri Sembilan",
            "$id": "Negeri Sembilan"
          },
          {
            "$elt": "Pahang",
            "$id": "Pahang"
          },
          {
            "$elt": "Perak",
            "$id": "Perak"
          },
          {
            "$elt": "Perlis",
            "$id": "Perlis"
          },
          {
            "$elt": "Pulau Pinang",
            "$id": "Pulau Pinang"
          },
          {
            "$elt": "Putrajaya",
            "$id": "Putrajaya"
          },
          {
            "$elt": "Sabah",
            "$id": "Sabah"
          },
          {
            "$elt": "Sarawak",
            "$id": "Sarawak"
          },
          {
            "$elt": "Selangor",
            "$id": "Selangor"
          },
          {
            "$elt": "Terengganu",
            "$id": "Terengganu"
          }
        ],
        "validationError": "Your postcode must be 5 digits."
      },
      "MZ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NA": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NC": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NE": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NF": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NG": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postcode",
        "stateLabel": "State / Capital",
        "stateList": [
          {
            "$elt": "Abia",
            "$id": "ABIA STATE"
          },
          {
            "$elt": "Abuja Federal Capital Territory",
            "$id": "FCT"
          },
          {
            "$elt": "Adamawa",
            "$id": "ADAMAWA STATE"
          },
          {
            "$elt": "Akwa Ibom",
            "$id": "AKWA IBOM STATE"
          },
          {
            "$elt": "Anambra",
            "$id": "ANAMBRA STATE"
          },
          {
            "$elt": "Bauchi",
            "$id": "BAUCHI STATE"
          },
          {
            "$elt": "Bayelsa",
            "$id": "BAYELSA STATE"
          },
          {
            "$elt": "Benue",
            "$id": "BENUE STATE"
          },
          {
            "$elt": "Borno",
            "$id": "BORNO STATE"
          },
          {
            "$elt": "Cross River",
            "$id": "CROSS RIVER STATE"
          },
          {
            "$elt": "Delta",
            "$id": "DELTA STATE"
          },
          {
            "$elt": "Ebonyi",
            "$id": "EBONYI STATE"
          },
          {
            "$elt": "Edo",
            "$id": "EDO STATE"
          },
          {
            "$elt": "Ekiti",
            "$id": "EKITI STATE"
          },
          {
            "$elt": "Enugu",
            "$id": "ENUGU STATE"
          },
          {
            "$elt": "Gombe",
            "$id": "GOMBE STATE"
          },
          {
            "$elt": "Imo",
            "$id": "IMO STATE"
          },
          {
            "$elt": "Jigawa",
            "$id": "JIGAWA STATE"
          },
          {
            "$elt": "Kaduna",
            "$id": "KADUNA STATE"
          },
          {
            "$elt": "Kano",
            "$id": "KANO STATE"
          },
          {
            "$elt": "Katsina",
            "$id": "KATSINA STATE"
          },
          {
            "$elt": "Kebbi",
            "$id": "KEBBI STATE"
          },
          {
            "$elt": "Kogi",
            "$id": "KOGI STATE"
          },
          {
            "$elt": "Kwara",
            "$id": "KWARA STATE"
          },
          {
            "$elt": "Lagos",
            "$id": "LAGOS STATE"
          },
          {
            "$elt": "Nassarawa",
            "$id": "NASARAWA STATE"
          },
          {
            "$elt": "Niger",
            "$id": "NIGER STATE"
          },
          {
            "$elt": "Ogun",
            "$id": "OGUN STATE"
          },
          {
            "$elt": "Ondo",
            "$id": "ONDO STATE"
          },
          {
            "$elt": "Osun",
            "$id": "OSUN STATE"
          },
          {
            "$elt": "Oyo",
            "$id": "OYO STATE"
          },
          {
            "$elt": "Plateau",
            "$id": "PLATEAU STATE"
          },
          {
            "$elt": "Rivers",
            "$id": "RIVERS STATE"
          },
          {
            "$elt": "Sokoto",
            "$id": "SOKOTO STATE"
          },
          {
            "$elt": "Taraba",
            "$id": "TARABA STATE"
          },
          {
            "$elt": "Yobe",
            "$id": "YOBE STATE"
          },
          {
            "$elt": "Zamfara",
            "$id": "ZAMFARA STATE"
          }
        ],
        "validationError": "Your postcode must be 6 digits."
      },
      "NI": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NL": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits followed by 2 letters."
      },
      "NO": {
        "cityLabel": "City / Town",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "NP": {
        "cityLabel": "City / District",
        "groupStateList": [
          {
            "$id": "Capital",
            "group": [
              {
                "$elt": "Kathmandu",
                "$id": "KATHMANDU"
              }
            ],
            "label": "Capital"
          },
          {
            "$id": "NP-1",
            "group": [
              {
                "$elt": "Bagmati",
                "$id": "BAGMATI"
              },
              {
                "$elt": "Janakpur",
                "$id": "JANAKPUR"
              },
              {
                "$elt": "Narayani",
                "$id": "NARAYANI"
              }
            ],
            "label": "Central Region (Madhyamanchal)"
          },
          {
            "$id": "NP-4",
            "group": [
              {
                "$elt": "Kosi",
                "$id": "KOSI"
              },
              {
                "$elt": "Mechi",
                "$id": "MECHI"
              },
              {
                "$elt": "Sagarmatha",
                "$id": "SAGARMATHA"
              }
            ],
            "label": "Eastern Region (Purwanchal)"
          },
          {
            "$id": "NP-5",
            "group": [
              {
                "$elt": "Mahakali",
                "$id": "MAHAKALI"
              },
              {
                "$elt": "Seti",
                "$id": "SETI"
              }
            ],
            "label": "Far-Western Region (Sudur Pashchimanchal)"
          },
          {
            "$id": "NP-2",
            "group": [
              {
                "$elt": "Bheri",
                "$id": "BHERI"
              },
              {
                "$elt": "Karnali",
                "$id": "KARNALI"
              },
              {
                "$elt": "Rapti",
                "$id": "RAPTI"
              }
            ],
            "label": "Mid-Western Region (Madhya Pashchimanchal)"
          },
          {
            "$id": "NP-3",
            "group": [
              {
                "$elt": "Dhawalagiri",
                "$id": "DHAWALAGIRI"
              },
              {
                "$elt": "Gandaki",
                "$id": "GANDAKI"
              },
              {
                "$elt": "Lumbini",
                "$id": "LUMBINI"
              }
            ],
            "label": "Western Region (Pashchimanchal)"
          }
        ],
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Zone / Capital",
        "stateList": [
          {
            "$elt": "Bagmati",
            "$id": "BAGMATI"
          },
          {
            "$elt": "Bheri",
            "$id": "BHERI"
          },
          {
            "$elt": "Dhawalagiri",
            "$id": "DHAWALAGIRI"
          },
          {
            "$elt": "Gandaki",
            "$id": "GANDAKI"
          },
          {
            "$elt": "Janakpur",
            "$id": "JANAKPUR"
          },
          {
            "$elt": "Karnali",
            "$id": "KARNALI"
          },
          {
            "$elt": "Kathmandu",
            "$id": "KATHMANDU"
          },
          {
            "$elt": "Kosi",
            "$id": "KOSI"
          },
          {
            "$elt": "Lumbini",
            "$id": "LUMBINI"
          },
          {
            "$elt": "Mahakali",
            "$id": "MAHAKALI"
          },
          {
            "$elt": "Mechi",
            "$id": "MECHI"
          },
          {
            "$elt": "Narayani",
            "$id": "NARAYANI"
          },
          {
            "$elt": "Rapti",
            "$id": "RAPTI"
          },
          {
            "$elt": "Sagarmatha",
            "$id": "SAGARMATHA"
          },
          {
            "$elt": "Seti",
            "$id": "SETI"
          }
        ],
        "validationError": "Your postal code must be 5 digits."
      },
      "NR": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NU": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "NZ": {
        "cityLabel": "City / Suburb",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "OM": {
        "cityLabel": "City / Town",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "validationError": "Your postal code must be 3 digits."
      },
      "PA": {
        "cityLabel": "City / District",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province / Region",
        "stateList": [
          {
            "$elt": "Bocas del Toro",
            "$id": "Provincia de Bocas del Toro"
          },
          {
            "$elt": "Chiriquí",
            "$id": "Provincia de Chiriquí"
          },
          {
            "$elt": "Coclé",
            "$id": "Provincia de Coclé"
          },
          {
            "$elt": "Colón",
            "$id": "Provincia de Colón"
          },
          {
            "$elt": "Darién",
            "$id": "Provincia del Darién"
          },
          {
            "$elt": "Emberá-Wounaan",
            "$id": "Emberá-Wounaan"
          },
          {
            "$elt": "Guna de Madugandí",
            "$id": "Guna de Madugandí"
          },
          {
            "$elt": "Guna de Wargandí",
            "$id": "Guna de Wargandí"
          },
          {
            "$elt": "Guna Yala",
            "$id": "Guna Yala"
          },
          {
            "$elt": "Herrera",
            "$id": "Provincia de Herrera"
          },
          {
            "$elt": "Los Santos",
            "$id": "Provincia de Los Santos"
          },
          {
            "$elt": "Ngöbe-Buglé",
            "$id": "Ngöbe-Buglé"
          },
          {
            "$elt": "Panamá",
            "$id": "Provincia de Panamá"
          },
          {
            "$elt": "Panamá Oeste",
            "$id": "Provincia de Panamá Oeste"
          },
          {
            "$elt": "Veraguas",
            "$id": "Provincia de Veraguas"
          }
        ],
        "validationError": "Your postal code must be 4 digits."
      },
      "PE": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "validationError": "Your postal code must be 5 digits."
      },
      "PF": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "PG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "PH": {
        "cityLabel": "City / Municipality",
        "groupStateList": [
          {
            "$id": "PH-14",
            "group": [
              {
                "$elt": "Basilan",
                "$id": "BASILAN"
              },
              {
                "$elt": "Lanao del Sur",
                "$id": "LANAO DEL SUR"
              },
              {
                "$elt": "Maguindanao",
                "$id": "MAGUINDANAO"
              },
              {
                "$elt": "Sulu",
                "$id": "SULU"
              },
              {
                "$elt": "Tawi-Tawi",
                "$id": "TAWI-TAWI"
              }
            ],
            "label": "Autonomous Region in Muslim Mindanao"
          },
          {
            "$id": "PH-05",
            "group": [
              {
                "$elt": "Albay",
                "$id": "ALBAY"
              },
              {
                "$elt": "Camarines Norte",
                "$id": "CAMARINES NORTE"
              },
              {
                "$elt": "Camarines Sur",
                "$id": "CAMARINES SUR"
              },
              {
                "$elt": "Catanduanes",
                "$id": "CATANDUANES"
              },
              {
                "$elt": "Masbate",
                "$id": "MASBATE"
              },
              {
                "$elt": "Sorsogon",
                "$id": "SORSOGON"
              }
            ],
            "label": "Bicol"
          },
          {
            "$id": "PH-02",
            "group": [
              {
                "$elt": "Batanes",
                "$id": "BATANES"
              },
              {
                "$elt": "Cagayan",
                "$id": "CAGAYAN"
              },
              {
                "$elt": "Isabela",
                "$id": "ISABELA"
              },
              {
                "$elt": "Nueva Vizcaya",
                "$id": "NUEVA VIZCAYA"
              },
              {
                "$elt": "Quirino",
                "$id": "QUIRINO"
              }
            ],
            "label": "Cagayan Valley"
          },
          {
            "$id": "PH-40",
            "group": [
              {
                "$elt": "Batangas",
                "$id": "BATANGAS"
              },
              {
                "$elt": "Cavite",
                "$id": "CAVITE"
              },
              {
                "$elt": "Laguna",
                "$id": "LAGUNA"
              },
              {
                "$elt": "Quezon",
                "$id": "QUEZON"
              },
              {
                "$elt": "Rizal",
                "$id": "RIZAL"
              }
            ],
            "label": "Calabarzon"
          },
          {
            "$id": "PH-13",
            "group": [
              {
                "$elt": "Agusan del Norte",
                "$id": "AGUSAN DEL NORTE"
              },
              {
                "$elt": "Agusan del Sur",
                "$id": "AGUSAN DEL SUR"
              },
              {
                "$elt": "Dinagat Islands",
                "$id": "DINAGAT ISLANDS"
              },
              {
                "$elt": "Surigao del Norte",
                "$id": "SURIGAO DEL NORTE"
              },
              {
                "$elt": "Surigao del Sur",
                "$id": "SURIGAO DEL SUR"
              }
            ],
            "label": "Caraga"
          },
          {
            "$id": "PH-03",
            "group": [
              {
                "$elt": "Aurora",
                "$id": "AURORA"
              },
              {
                "$elt": "Bataan",
                "$id": "BATAAN"
              },
              {
                "$elt": "Bulacan",
                "$id": "BULACAN"
              },
              {
                "$elt": "Nueva Ecija",
                "$id": "NUEVA ECIJA"
              },
              {
                "$elt": "Pampanga",
                "$id": "PAMPANGA"
              },
              {
                "$elt": "Tarlac",
                "$id": "TARLAC"
              },
              {
                "$elt": "Zambales",
                "$id": "ZAMBALES"
              }
            ],
            "label": "Central Luzon"
          },
          {
            "$id": "PH-07",
            "group": [
              {
                "$elt": "Bohol",
                "$id": "BOHOL"
              },
              {
                "$elt": "Cebu",
                "$id": "CEBU"
              },
              {
                "$elt": "Negros Oriental",
                "$id": "NEGROS ORIENTAL"
              },
              {
                "$elt": "Siquijor",
                "$id": "SIQUIJOR"
              }
            ],
            "label": "Central Visayas"
          },
          {
            "$id": "PH-15",
            "group": [
              {
                "$elt": "Abra",
                "$id": "ABRA"
              },
              {
                "$elt": "Apayao",
                "$id": "APAYAO"
              },
              {
                "$elt": "Benguet",
                "$id": "BENGUET"
              },
              {
                "$elt": "Ifugao",
                "$id": "IFUGAO"
              },
              {
                "$elt": "Kalinga",
                "$id": "KALINGA"
              },
              {
                "$elt": "Mountain Province",
                "$id": "MOUNTAIN PROVINCE"
              }
            ],
            "label": "Cordillera Administrative Region"
          },
          {
            "$id": "PH-11",
            "group": [
              {
                "$elt": "Compostela Valley",
                "$id": "COMPOSTELA VALLEY"
              },
              {
                "$elt": "Davao del Norte",
                "$id": "DAVAO DEL NORTE"
              },
              {
                "$elt": "Davao del Sur",
                "$id": "DAVAO DEL SUR"
              },
              {
                "$elt": "Davao Oriental",
                "$id": "DAVAO ORIENTAL"
              }
            ],
            "label": "Davao"
          },
          {
            "$id": "PH-08",
            "group": [
              {
                "$elt": "Biliran",
                "$id": "BILIRAN"
              },
              {
                "$elt": "Eastern Samar",
                "$id": "EASTERN SAMAR"
              },
              {
                "$elt": "Leyte",
                "$id": "LEYTE"
              },
              {
                "$elt": "Northern Samar",
                "$id": "NORTHERN SAMAR"
              },
              {
                "$elt": "Samar (Western Samar)",
                "$id": "SAMAR"
              },
              {
                "$elt": "Southern Leyte",
                "$id": "SOUTHERN LEYTE"
              }
            ],
            "label": "Eastern Visayas"
          },
          {
            "$id": "PH-01",
            "group": [
              {
                "$elt": "Ilocos Norte",
                "$id": "ILOCOS NORTE"
              },
              {
                "$elt": "Ilocos Sur",
                "$id": "ILOCOS SUR"
              },
              {
                "$elt": "La Union",
                "$id": "LA UNION"
              },
              {
                "$elt": "Pangasinan",
                "$id": "PANGASINAN"
              }
            ],
            "label": "Ilocos"
          },
          {
            "$id": "PH-41",
            "group": [
              {
                "$elt": "Marinduque",
                "$id": "MARINDUQUE"
              },
              {
                "$elt": "Mindoro Occidental",
                "$id": "MINDORO OCCIDENTAL"
              },
              {
                "$elt": "Mindoro Oriental",
                "$id": "MINDORO ORIENTAL"
              },
              {
                "$elt": "Palawan",
                "$id": "PALAWAN"
              },
              {
                "$elt": "Romblon",
                "$id": "ROMBLON"
              }
            ],
            "label": "Mimaropa"
          },
          {
            "$id": "PH-00",
            "group": [
              {
                "$elt": "Manila",
                "$id": "MANILA"
              },
              {
                "$elt": "Metro Manila",
                "$id": "METRO MANILA"
              }
            ],
            "label": "National Capital Region"
          },
          {
            "$id": "PH-10",
            "group": [
              {
                "$elt": "Bukidnon",
                "$id": "BUKIDNON"
              },
              {
                "$elt": "Camiguin",
                "$id": "CAMIGUIN"
              },
              {
                "$elt": "Lanao del Norte",
                "$id": "LANAO DEL NORTE"
              },
              {
                "$elt": "Misamis Occidental",
                "$id": "MISAMIS OCCIDENTAL"
              },
              {
                "$elt": "Misamis Oriental",
                "$id": "MISAMIS ORIENTAL"
              }
            ],
            "label": "Northern Mindanao"
          },
          {
            "$id": "PH-12",
            "group": [
              {
                "$elt": "Cotabato",
                "$id": "COTABATO"
              },
              {
                "$elt": "Sarangani",
                "$id": "SARANGANI"
              },
              {
                "$elt": "South Cotabato",
                "$id": "SOUTH COTABATO"
              },
              {
                "$elt": "Sultan Kudarat",
                "$id": "SULTAN KUDARAT"
              }
            ],
            "label": "Soccsksargen"
          },
          {
            "$id": "PH-06",
            "group": [
              {
                "$elt": "Aklan",
                "$id": "AKLAN"
              },
              {
                "$elt": "Antique",
                "$id": "ANTIQUE"
              },
              {
                "$elt": "Capiz",
                "$id": "CAPIZ"
              },
              {
                "$elt": "Guimaras",
                "$id": "GUIMARAS"
              },
              {
                "$elt": "Iloilo",
                "$id": "ILOILO"
              },
              {
                "$elt": "Negros Occidental",
                "$id": "NEGROS OCCIDENTAL"
              }
            ],
            "label": "Western Visayas"
          },
          {
            "$id": "PH-09",
            "group": [
              {
                "$elt": "Zamboanga del Norte",
                "$id": "ZAMBOANGA DEL NORTE"
              },
              {
                "$elt": "Zamboanga del Sur",
                "$id": "ZAMBOANGA DEL SUR"
              },
              {
                "$elt": "Zamboanga Sibugay",
                "$id": "ZAMBOANGA SIBUGAY"
              }
            ],
            "label": "Zamboanga Peninsula"
          }
        ],
        "line1Label": "Address line 1",
        "line2Label": "Barangay / District",
        "optionalLabel": "(optional)",
        "postcodeLabel": "ZIP code",
        "stateLabel": "Province / Region",
        "stateList": [
          {
            "$elt": "Abra",
            "$id": "ABRA"
          },
          {
            "$elt": "Agusan del Norte",
            "$id": "AGUSAN DEL NORTE"
          },
          {
            "$elt": "Agusan del Sur",
            "$id": "AGUSAN DEL SUR"
          },
          {
            "$elt": "Aklan",
            "$id": "AKLAN"
          },
          {
            "$elt": "Albay",
            "$id": "ALBAY"
          },
          {
            "$elt": "Antique",
            "$id": "ANTIQUE"
          },
          {
            "$elt": "Apayao",
            "$id": "APAYAO"
          },
          {
            "$elt": "Aurora",
            "$id": "AURORA"
          },
          {
            "$elt": "Basilan",
            "$id": "BASILAN"
          },
          {
            "$elt": "Bataan",
            "$id": "BATAAN"
          },
          {
            "$elt": "Batanes",
            "$id": "BATANES"
          },
          {
            "$elt": "Batangas",
            "$id": "BATANGAS"
          },
          {
            "$elt": "Benguet",
            "$id": "BENGUET"
          },
          {
            "$elt": "Biliran",
            "$id": "BILIRAN"
          },
          {
            "$elt": "Bohol",
            "$id": "BOHOL"
          },
          {
            "$elt": "Bukidnon",
            "$id": "BUKIDNON"
          },
          {
            "$elt": "Bulacan",
            "$id": "BULACAN"
          },
          {
            "$elt": "Cagayan",
            "$id": "CAGAYAN"
          },
          {
            "$elt": "Camarines Norte",
            "$id": "CAMARINES NORTE"
          },
          {
            "$elt": "Camarines Sur",
            "$id": "CAMARINES SUR"
          },
          {
            "$elt": "Camiguin",
            "$id": "CAMIGUIN"
          },
          {
            "$elt": "Capiz",
            "$id": "CAPIZ"
          },
          {
            "$elt": "Catanduanes",
            "$id": "CATANDUANES"
          },
          {
            "$elt": "Cavite",
            "$id": "CAVITE"
          },
          {
            "$elt": "Cebu",
            "$id": "CEBU"
          },
          {
            "$elt": "Compostela Valley",
            "$id": "COMPOSTELA VALLEY"
          },
          {
            "$elt": "Cotabato",
            "$id": "COTABATO"
          },
          {
            "$elt": "Davao del Norte",
            "$id": "DAVAO DEL NORTE"
          },
          {
            "$elt": "Davao del Sur",
            "$id": "DAVAO DEL SUR"
          },
          {
            "$elt": "Davao Oriental",
            "$id": "DAVAO ORIENTAL"
          },
          {
            "$elt": "Dinagat Islands",
            "$id": "DINAGAT ISLANDS"
          },
          {
            "$elt": "Eastern Samar",
            "$id": "EASTERN SAMAR"
          },
          {
            "$elt": "Guimaras",
            "$id": "GUIMARAS"
          },
          {
            "$elt": "Ifugao",
            "$id": "IFUGAO"
          },
          {
            "$elt": "Ilocos Norte",
            "$id": "ILOCOS NORTE"
          },
          {
            "$elt": "Ilocos Sur",
            "$id": "ILOCOS SUR"
          },
          {
            "$elt": "Iloilo",
            "$id": "ILOILO"
          },
          {
            "$elt": "Isabela",
            "$id": "ISABELA"
          },
          {
            "$elt": "Kalinga",
            "$id": "KALINGA"
          },
          {
            "$elt": "La Union",
            "$id": "LA UNION"
          },
          {
            "$elt": "Laguna",
            "$id": "LAGUNA"
          },
          {
            "$elt": "Lanao del Norte",
            "$id": "LANAO DEL NORTE"
          },
          {
            "$elt": "Lanao del Sur",
            "$id": "LANAO DEL SUR"
          },
          {
            "$elt": "Leyte",
            "$id": "LEYTE"
          },
          {
            "$elt": "Maguindanao",
            "$id": "MAGUINDANAO"
          },
          {
            "$elt": "Manila",
            "$id": "MANILA"
          },
          {
            "$elt": "Marinduque",
            "$id": "MARINDUQUE"
          },
          {
            "$elt": "Masbate",
            "$id": "MASBATE"
          },
          {
            "$elt": "Metro Manila",
            "$id": "METRO MANILA"
          },
          {
            "$elt": "Mindoro Occidental",
            "$id": "MINDORO OCCIDENTAL"
          },
          {
            "$elt": "Mindoro Oriental",
            "$id": "MINDORO ORIENTAL"
          },
          {
            "$elt": "Misamis Occidental",
            "$id": "MISAMIS OCCIDENTAL"
          },
          {
            "$elt": "Misamis Oriental",
            "$id": "MISAMIS ORIENTAL"
          },
          {
            "$elt": "Mountain Province",
            "$id": "MOUNTAIN PROVINCE"
          },
          {
            "$elt": "Negros Occidental",
            "$id": "NEGROS OCCIDENTAL"
          },
          {
            "$elt": "Negros Oriental",
            "$id": "NEGROS ORIENTAL"
          },
          {
            "$elt": "Northern Samar",
            "$id": "NORTHERN SAMAR"
          },
          {
            "$elt": "Nueva Ecija",
            "$id": "NUEVA ECIJA"
          },
          {
            "$elt": "Nueva Vizcaya",
            "$id": "NUEVA VIZCAYA"
          },
          {
            "$elt": "Palawan",
            "$id": "PALAWAN"
          },
          {
            "$elt": "Pampanga",
            "$id": "PAMPANGA"
          },
          {
            "$elt": "Pangasinan",
            "$id": "PANGASINAN"
          },
          {
            "$elt": "Quezon",
            "$id": "QUEZON"
          },
          {
            "$elt": "Quirino",
            "$id": "QUIRINO"
          },
          {
            "$elt": "Rizal",
            "$id": "RIZAL"
          },
          {
            "$elt": "Romblon",
            "$id": "ROMBLON"
          },
          {
            "$elt": "Samar (Western Samar)",
            "$id": "SAMAR"
          },
          {
            "$elt": "Sarangani",
            "$id": "SARANGANI"
          },
          {
            "$elt": "Siquijor",
            "$id": "SIQUIJOR"
          },
          {
            "$elt": "Sorsogon",
            "$id": "SORSOGON"
          },
          {
            "$elt": "South Cotabato",
            "$id": "SOUTH COTABATO"
          },
          {
            "$elt": "Southern Leyte",
            "$id": "SOUTHERN LEYTE"
          },
          {
            "$elt": "Sultan Kudarat",
            "$id": "SULTAN KUDARAT"
          },
          {
            "$elt": "Sulu",
            "$id": "SULU"
          },
          {
            "$elt": "Surigao del Norte",
            "$id": "SURIGAO DEL NORTE"
          },
          {
            "$elt": "Surigao del Sur",
            "$id": "SURIGAO DEL SUR"
          },
          {
            "$elt": "Tarlac",
            "$id": "TARLAC"
          },
          {
            "$elt": "Tawi-Tawi",
            "$id": "TAWI-TAWI"
          },
          {
            "$elt": "Zambales",
            "$id": "ZAMBALES"
          },
          {
            "$elt": "Zamboanga del Norte",
            "$id": "ZAMBOANGA DEL NORTE"
          },
          {
            "$elt": "Zamboanga del Sur",
            "$id": "ZAMBOANGA DEL SUR"
          },
          {
            "$elt": "Zamboanga Sibugay",
            "$id": "ZAMBOANGA SIBUGAY"
          }
        ],
        "validationError": "Your ZIP code must be 4 digits."
      },
      "PL": {
        "cityLabel": "City / Town",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Dolnośląskie",
            "$id": "DOLNOŚLĄSKIE"
          },
          {
            "$elt": "Kujawsko-pomorskie",
            "$id": "KUJAWSKO-POMORSKIE"
          },
          {
            "$elt": "Lubelskie",
            "$id": "LUBELSKIE"
          },
          {
            "$elt": "Lubuskie",
            "$id": "LUBUSKIE"
          },
          {
            "$elt": "Łódzkie",
            "$id": "ŁÓDZKIE"
          },
          {
            "$elt": "Małopolskie",
            "$id": "MAŁOPOLSKIE"
          },
          {
            "$elt": "Mazowieckie",
            "$id": "MAZOWIECKIE"
          },
          {
            "$elt": "Opolskie",
            "$id": "OPOLSKIE"
          },
          {
            "$elt": "Podkarpackie",
            "$id": "PODKARPACKIE"
          },
          {
            "$elt": "Podlaskie",
            "$id": "PODLASKIE"
          },
          {
            "$elt": "Pomorskie",
            "$id": "POMORSKIE"
          },
          {
            "$elt": "Śląskie",
            "$id": "ŚLĄSKIE"
          },
          {
            "$elt": "Świętokrzyskie",
            "$id": "ŚWIĘTOKRZYSKIE"
          },
          {
            "$elt": "Warmińsko-mazurskie",
            "$id": "WARMIŃSKO-MAZURSKIE"
          },
          {
            "$elt": "Wielkopolskie",
            "$id": "WIELKOPOLSKIE"
          },
          {
            "$elt": "Zachodnio-pomorskie",
            "$id": "ZACHODNIOPOMORSKIE"
          }
        ],
        "validationError": "Your postal code must be 5 digits in the following format: 05-470"
      },
      "PM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "PN": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "PT": {
        "cityLabel": "City",
        "line1Label": "Street address",
        "line2Label": "Town / Village / Post office",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "District",
        "validationError": "Your postal code must be 4 or 7 digits."
      },
      "PW": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "PY": {
        "cityLabel": "Post town",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "QA": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)"
      },
      "RE": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits and begin with 974 or 984."
      },
      "RO": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Judet / Sector",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 6 digits."
      },
      "RS": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 or 6 digits."
      },
      "RU": {
        "cityLabel": "Center of population (city, village)",
        "line1Label": "Street, building, apartment",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "District, Region",
        "validationError": "Your postal code must be 6 digits and cannot begin with 0."
      },
      "RW": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SA": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "District",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits and can be followed by a dash and 4 digits."
      },
      "SB": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SC": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SE": {
        "cityLabel": "City / Town",
        "line1Label": "Address line",
        "line2Label": "Address line",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "SG": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 6 digits."
      },
      "SH": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SI": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "SJ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SK": {
        "cityLabel": "Post Office name",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits."
      },
      "SL": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SM": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4789 followed by a single digit."
      },
      "SN": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SO": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SR": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "ST": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "SV": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Department",
        "stateList": [
          {
            "$elt": "Ahuachapán",
            "$id": "AHUACHAPÁN"
          },
          {
            "$elt": "Cabañas",
            "$id": "CABAÑAS"
          },
          {
            "$elt": "Chalatenango",
            "$id": "CHALATENANGO"
          },
          {
            "$elt": "Cuscatlán",
            "$id": "CUSCATLÁN"
          },
          {
            "$elt": "La Libertad",
            "$id": "LA LIBERTAD"
          },
          {
            "$elt": "La Paz",
            "$id": "LA PAZ"
          },
          {
            "$elt": "La Unión",
            "$id": "LA UNIÓN"
          },
          {
            "$elt": "Morazán",
            "$id": "MORAZÁN"
          },
          {
            "$elt": "San Miguel",
            "$id": "SAN MIGUEL"
          },
          {
            "$elt": "San Salvador",
            "$id": "SAN SALVADOR"
          },
          {
            "$elt": "San Vicente",
            "$id": "SAN VICENTE"
          },
          {
            "$elt": "Santa Ana",
            "$id": "SANTA ANA"
          },
          {
            "$elt": "Sonsonate",
            "$id": "SONSONATE"
          },
          {
            "$elt": "Usulután",
            "$id": "USULUTÁN"
          }
        ],
        "validationError": "Your postal code must be 4 digits."
      },
      "SZ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TC": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TD": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TH": {
        "cityLabel": "District",
        "line1Label": "House number and street name",
        "line2Label": "Address (continued) / Sub-district",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Province",
        "stateList": [
          {
            "$elt": "Amnat Charoen",
            "$id": "Amnat Charoen"
          },
          {
            "$elt": "Ang Thong",
            "$id": "Ang Thong"
          },
          {
            "$elt": "Bangkok",
            "$id": "Bangkok"
          },
          {
            "$elt": "Bueng Kan",
            "$id": "Bueng Kan"
          },
          {
            "$elt": "Buri Ram",
            "$id": "Buri Ram"
          },
          {
            "$elt": "Chachoengsao",
            "$id": "Chachoengsao"
          },
          {
            "$elt": "Chai Nat",
            "$id": "Chai Nat"
          },
          {
            "$elt": "Chaiyaphum",
            "$id": "Chaiyaphum"
          },
          {
            "$elt": "Chanthaburi",
            "$id": "Chanthaburi"
          },
          {
            "$elt": "Chiang Mai",
            "$id": "Chiang Mai"
          },
          {
            "$elt": "Chiang Rai",
            "$id": "Chiang Rai"
          },
          {
            "$elt": "Chon Buri",
            "$id": "Chon Buri"
          },
          {
            "$elt": "Chumphon",
            "$id": "Chumphon"
          },
          {
            "$elt": "Kalasin",
            "$id": "Kalasin"
          },
          {
            "$elt": "Kamphaeng Phet",
            "$id": "Kamphaeng Phet"
          },
          {
            "$elt": "Kanchanaburi",
            "$id": "Kanchanaburi"
          },
          {
            "$elt": "Khon Kaen",
            "$id": "Khon Kaen"
          },
          {
            "$elt": "Krabi",
            "$id": "Krabi"
          },
          {
            "$elt": "Lampang",
            "$id": "Lampang"
          },
          {
            "$elt": "Lamphun",
            "$id": "Lamphun"
          },
          {
            "$elt": "Loei",
            "$id": "Loei"
          },
          {
            "$elt": "Lop Buri",
            "$id": "Lop Buri"
          },
          {
            "$elt": "Mae Hong Son",
            "$id": "Mae Hong Son"
          },
          {
            "$elt": "Maha Sarakham",
            "$id": "Maha Sarakham"
          },
          {
            "$elt": "Mukdahan",
            "$id": "Mukdahan"
          },
          {
            "$elt": "Nakhon Nayok",
            "$id": "Nakhon Nayok"
          },
          {
            "$elt": "Nakhon Pathom",
            "$id": "Nakhon Pathom"
          },
          {
            "$elt": "Nakhon Phanom",
            "$id": "Nakhon Phanom"
          },
          {
            "$elt": "Nakhon Ratchasima",
            "$id": "Nakhon Ratchasima"
          },
          {
            "$elt": "Nakhon Sawan",
            "$id": "Nakhon Sawan"
          },
          {
            "$elt": "Nakhon Si Thammarat",
            "$id": "Nakhon Si Thammarat"
          },
          {
            "$elt": "Nan",
            "$id": "Nan"
          },
          {
            "$elt": "Narathiwat",
            "$id": "Narathiwat"
          },
          {
            "$elt": "Nong Bua Lamphu",
            "$id": "Nong Bua Lamphu"
          },
          {
            "$elt": "Nong Khai",
            "$id": "Nong Khai"
          },
          {
            "$elt": "Nonthaburi",
            "$id": "Nonthaburi"
          },
          {
            "$elt": "Pathum Thani",
            "$id": "Pathum Thani"
          },
          {
            "$elt": "Pattani",
            "$id": "Pattani"
          },
          {
            "$elt": "Phang Nga",
            "$id": "Phang Nga"
          },
          {
            "$elt": "Phatthalung",
            "$id": "Phatthalung"
          },
          {
            "$elt": "Phatthaya",
            "$id": "Phatthaya"
          },
          {
            "$elt": "Phayao",
            "$id": "Phayao"
          },
          {
            "$elt": "Phetchabun",
            "$id": "Phetchabun"
          },
          {
            "$elt": "Phetchaburi",
            "$id": "Phetchaburi"
          },
          {
            "$elt": "Phichit",
            "$id": "Phichit"
          },
          {
            "$elt": "Phitsanulok",
            "$id": "Phitsanulok"
          },
          {
            "$elt": "Phra Nakhon Si Ayutthaya",
            "$id": "Phra Nakhon Si Ayutthaya"
          },
          {
            "$elt": "Phrae",
            "$id": "Phrae"
          },
          {
            "$elt": "Phuket",
            "$id": "Phuket"
          },
          {
            "$elt": "Prachin Buri",
            "$id": "Prachin Buri"
          },
          {
            "$elt": "Prachuap Khiri Khan",
            "$id": "Prachuap Khiri Khan"
          },
          {
            "$elt": "Ranong",
            "$id": "Ranong"
          },
          {
            "$elt": "Ratchaburi",
            "$id": "Ratchaburi"
          },
          {
            "$elt": "Rayong",
            "$id": "Rayong"
          },
          {
            "$elt": "Roi Et",
            "$id": "Roi Et"
          },
          {
            "$elt": "Sa Kaeo",
            "$id": "Sa Kaeo"
          },
          {
            "$elt": "Sakon Nakhon",
            "$id": "Sakon Nakhon"
          },
          {
            "$elt": "Samut Prakan",
            "$id": "Samut Prakan"
          },
          {
            "$elt": "Samut Sakhon",
            "$id": "Samut Sakhon"
          },
          {
            "$elt": "Samut Songkhram",
            "$id": "Samut Songkhram"
          },
          {
            "$elt": "Saraburi",
            "$id": "Saraburi"
          },
          {
            "$elt": "Satun",
            "$id": "Satun"
          },
          {
            "$elt": "Si Sa Ket",
            "$id": "Si Sa Ket"
          },
          {
            "$elt": "Sing Buri",
            "$id": "Sing Buri"
          },
          {
            "$elt": "Songkhla",
            "$id": "Songkhla"
          },
          {
            "$elt": "Sukhothai",
            "$id": "Sukhothai"
          },
          {
            "$elt": "Suphan Buri",
            "$id": "Suphan Buri"
          },
          {
            "$elt": "Surat Thani",
            "$id": "Surat Thani"
          },
          {
            "$elt": "Surin",
            "$id": "Surin"
          },
          {
            "$elt": "Tak",
            "$id": "Tak"
          },
          {
            "$elt": "Trang",
            "$id": "Trang"
          },
          {
            "$elt": "Trat",
            "$id": "Trat"
          },
          {
            "$elt": "Ubon Ratchathani",
            "$id": "Ubon Ratchathani"
          },
          {
            "$elt": "Udon Thani",
            "$id": "Udon Thani"
          },
          {
            "$elt": "Uthai Thani",
            "$id": "Uthai Thani"
          },
          {
            "$elt": "Uttaradit",
            "$id": "Uttaradit"
          },
          {
            "$elt": "Yala",
            "$id": "Yala"
          },
          {
            "$elt": "Yasothon",
            "$id": "Yasothon"
          }
        ],
        "validationError": "Your postal code must be 5 digits."
      },
      "TJ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TN": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TO": {
        "cityLabel": "Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)"
      },
      "TR": {
        "cityLabel": "City",
        "cityList": [
          {
            "$elt": "İstanbul",
            "$id": "İSTANBUL"
          },
          {
            "$elt": "Ankara",
            "$id": "ANKARA"
          },
          {
            "$elt": "İzmir",
            "$id": "İZMİR"
          },
          {
            "$elt": "Adana",
            "$id": "ADANA"
          },
          {
            "$elt": "Adıyaman",
            "$id": "ADIYAMAN"
          },
          {
            "$elt": "Afyonkarahisar",
            "$id": "AFYONKARAHİSAR"
          },
          {
            "$elt": "Ağrı",
            "$id": "AĞRI"
          },
          {
            "$elt": "Aksaray",
            "$id": "AKSARAY"
          },
          {
            "$elt": "Amasya",
            "$id": "AMASYA"
          },
          {
            "$elt": "Antalya",
            "$id": "ANTALYA"
          },
          {
            "$elt": "Ardahan",
            "$id": "ARDAHAN"
          },
          {
            "$elt": "Artvin",
            "$id": "ARTVİN"
          },
          {
            "$elt": "Aydın",
            "$id": "AYDIN"
          },
          {
            "$elt": "Balıkesir",
            "$id": "BALIKESİR"
          },
          {
            "$elt": "Bartın",
            "$id": "BARTIN"
          },
          {
            "$elt": "Batman",
            "$id": "BATMAN"
          },
          {
            "$elt": "Bayburt",
            "$id": "BAYBURT"
          },
          {
            "$elt": "Bilecik",
            "$id": "BİLECİK"
          },
          {
            "$elt": "Bingöl",
            "$id": "BİNGÖL"
          },
          {
            "$elt": "Bitlis",
            "$id": "BİTLİS"
          },
          {
            "$elt": "Bolu",
            "$id": "BOLU"
          },
          {
            "$elt": "Burdur",
            "$id": "BURDUR"
          },
          {
            "$elt": "Bursa",
            "$id": "BURSA"
          },
          {
            "$elt": "Çanakkale",
            "$id": "ÇANAKKALE"
          },
          {
            "$elt": "Çankırı",
            "$id": "ÇANKIRI"
          },
          {
            "$elt": "Çorum",
            "$id": "ÇORUM"
          },
          {
            "$elt": "Denizli",
            "$id": "DENİZLİ"
          },
          {
            "$elt": "Diyarbakır",
            "$id": "DİYARBAKIR"
          },
          {
            "$elt": "Düzce",
            "$id": "DÜZCE"
          },
          {
            "$elt": "Edirne",
            "$id": "EDİRNE"
          },
          {
            "$elt": "Elazığ",
            "$id": "ELAZIĞ"
          },
          {
            "$elt": "Erzincan",
            "$id": "ERZİNCAN"
          },
          {
            "$elt": "Erzurum",
            "$id": "ERZURUM"
          },
          {
            "$elt": "Eskişehir",
            "$id": "ESKİŞEHİR"
          },
          {
            "$elt": "Gaziantep",
            "$id": "GAZİANTEP"
          },
          {
            "$elt": "Giresun",
            "$id": "GİRESUN"
          },
          {
            "$elt": "Gümüşhane",
            "$id": "GÜMÜŞHANE"
          },
          {
            "$elt": "Hakkâri",
            "$id": "HAKKÂRİ"
          },
          {
            "$elt": "Hatay",
            "$id": "HATAY"
          },
          {
            "$elt": "Iğdır",
            "$id": "IĞDIR"
          },
          {
            "$elt": "Isparta",
            "$id": "ISPARTA"
          },
          {
            "$elt": "Kahramanmaraş",
            "$id": "KAHRAMANMARAŞ"
          },
          {
            "$elt": "Karabük",
            "$id": "KARABÜK"
          },
          {
            "$elt": "Karaman",
            "$id": "KARAMAN"
          },
          {
            "$elt": "Kars",
            "$id": "KARS"
          },
          {
            "$elt": "Kastamonu",
            "$id": "KASTAMONU"
          },
          {
            "$elt": "Kayseri",
            "$id": "KAYSERİ"
          },
          {
            "$elt": "Kırıkkale",
            "$id": "KIRIKKALE"
          },
          {
            "$elt": "Kırklareli",
            "$id": "KIRKLARELİ"
          },
          {
            "$elt": "Kırşehir",
            "$id": "KIRŞEHİR"
          },
          {
            "$elt": "Kilis",
            "$id": "KİLİS"
          },
          {
            "$elt": "Kocaeli",
            "$id": "KOCAELİ"
          },
          {
            "$elt": "Konya",
            "$id": "KONYA"
          },
          {
            "$elt": "Kütahya",
            "$id": "KÜTAHYA"
          },
          {
            "$elt": "Malatya",
            "$id": "MALATYA"
          },
          {
            "$elt": "Manisa",
            "$id": "MANİSA"
          },
          {
            "$elt": "Mardin",
            "$id": "MARDİN"
          },
          {
            "$elt": "Mersin",
            "$id": "MERSİN"
          },
          {
            "$elt": "Muğla",
            "$id": "MUĞLA"
          },
          {
            "$elt": "Muş",
            "$id": "MUŞ"
          },
          {
            "$elt": "Nevşehir",
            "$id": "NEVŞEHİR"
          },
          {
            "$elt": "Niğde",
            "$id": "NİĞDE"
          },
          {
            "$elt": "Ordu",
            "$id": "ORDU"
          },
          {
            "$elt": "Osmaniye",
            "$id": "OSMANİYE"
          },
          {
            "$elt": "Rize",
            "$id": "RİZE"
          },
          {
            "$elt": "Sakarya",
            "$id": "SAKARYA"
          },
          {
            "$elt": "Samsun",
            "$id": "SAMSUN"
          },
          {
            "$elt": "Siirt",
            "$id": "SİİRT"
          },
          {
            "$elt": "Sinop",
            "$id": "SİNOP"
          },
          {
            "$elt": "Sivas",
            "$id": "SİVAS"
          },
          {
            "$elt": "Şanlıurfa",
            "$id": "ŞANLIURFA"
          },
          {
            "$elt": "Şırnak",
            "$id": "ŞIRNAK"
          },
          {
            "$elt": "Tekirdağ",
            "$id": "TEKİRDAĞ"
          },
          {
            "$elt": "Tokat",
            "$id": "TOKAT"
          },
          {
            "$elt": "Trabzon",
            "$id": "TRABZON"
          },
          {
            "$elt": "Tunceli",
            "$id": "TUNCELİ"
          },
          {
            "$elt": "Uşak",
            "$id": "UŞAK"
          },
          {
            "$elt": "Van",
            "$id": "VAN"
          },
          {
            "$elt": "Yalova",
            "$id": "YALOVA"
          },
          {
            "$elt": "Yozgat",
            "$id": "YOZGAT"
          },
          {
            "$elt": "Zonguldak",
            "$id": "ZONGULDAK"
          }
        ],
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "District",
        "validationError": "Your postal code must be 5 digits."
      },
      "TT": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 6 digits."
      },
      "TV": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "TW": {
        "cityLabel": "City / County",
        "cityList": [
          {
            "$elt": "Changhua County",
            "$id": "Changhua County"
          },
          {
            "$elt": "Chiayi City",
            "$id": "Chiayi City"
          },
          {
            "$elt": "Chiayi County",
            "$id": "Chiayi County"
          },
          {
            "$elt": "Hsinchu City",
            "$id": "Hsinchu City"
          },
          {
            "$elt": "Hsinchu County",
            "$id": "Hsinchu County"
          },
          {
            "$elt": "Hualien County",
            "$id": "Hualien County"
          },
          {
            "$elt": "Kaohsiung City",
            "$id": "Kaohsiung City"
          },
          {
            "$elt": "Keelung City",
            "$id": "Keelung City"
          },
          {
            "$elt": "Kinmen County",
            "$id": "Kinmen County"
          },
          {
            "$elt": "Lienchiang County",
            "$id": "Lienchiang County"
          },
          {
            "$elt": "Miaoli County",
            "$id": "Miaoli County"
          },
          {
            "$elt": "Nantou County",
            "$id": "Nantou County"
          },
          {
            "$elt": "New Taipei City",
            "$id": "New Taipei City"
          },
          {
            "$elt": "Penghu County",
            "$id": "Penghu County"
          },
          {
            "$elt": "Pingtung County",
            "$id": "Pingtung County"
          },
          {
            "$elt": "Taichung City",
            "$id": "Taichung City"
          },
          {
            "$elt": "Tainan City",
            "$id": "Tainan City"
          },
          {
            "$elt": "Taipei City",
            "$id": "Taipei City"
          },
          {
            "$elt": "Taitung County",
            "$id": "Taitung County"
          },
          {
            "$elt": "Taoyuan County",
            "$id": "Taoyuan County"
          },
          {
            "$elt": "Yilan County",
            "$id": "Yilan County"
          },
          {
            "$elt": "Yunlin County",
            "$id": "Yunlin County"
          }
        ],
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "selectLabel": "Select",
        "stateLabel": "Township / District",
        "validationError": "Your postal code must be 3 or 5 digits."
      },
      "TZ": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "UA": {
        "cityLabel": "Center of population",
        "line1Label": "Street address",
        "line2Label": "Additional information",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Region",
        "stateList": [
          {
            "$elt": "Cherkasy Oblast",
            "$id": "CHERKASKA OBL"
          },
          {
            "$elt": "Chernihiv Oblast",
            "$id": "CHERNIHIVSKA OBL"
          },
          {
            "$elt": "Chernivtsi Oblast",
            "$id": "CHERNIVETSKA OBL"
          },
          {
            "$elt": "Dnipropetrovsk Oblast",
            "$id": "DNIPROPETROVSKA OBL"
          },
          {
            "$elt": "Donetsk Oblast",
            "$id": "DONETSKA OBL"
          },
          {
            "$elt": "Ivano-Frankivsk Oblast",
            "$id": "IVANO-FRANKIVSKA OBL"
          },
          {
            "$elt": "Kharkiv Oblast",
            "$id": "KHARKIVSKA OBL"
          },
          {
            "$elt": "Kherson Oblast",
            "$id": "KHERSONSKA OBL"
          },
          {
            "$elt": "Khmelnytskyi Oblast",
            "$id": "KHMELNYTSKA OBL"
          },
          {
            "$elt": "Kirovohrad Oblast",
            "$id": "KIROVOHRADSKA OBL"
          },
          {
            "$elt": "Kyiv",
            "$id": "KYIV"
          },
          {
            "$elt": "Kyiv Oblast",
            "$id": "KYIVSKA OBL"
          },
          {
            "$elt": "Luhansk Oblast",
            "$id": "LUHANSKA OBL"
          },
          {
            "$elt": "Lviv Oblast",
            "$id": "LVIVSKA OBL"
          },
          {
            "$elt": "Mykolaiv Oblast",
            "$id": "MYKOLAIVSKA OBL"
          },
          {
            "$elt": "Odessa Oblast",
            "$id": "ODESKA OBL"
          },
          {
            "$elt": "Poltava Oblast",
            "$id": "POLTAVSKA OBL"
          },
          {
            "$elt": "Rivne Oblast",
            "$id": "RIVNENSKA OBL"
          },
          {
            "$elt": "Sumy Oblast",
            "$id": "SUMSKA OBL"
          },
          {
            "$elt": "Ternopil Oblast",
            "$id": "TERNOPILSKA OBL"
          },
          {
            "$elt": "Vinnytsia Oblast",
            "$id": "VINNYTSKA OBL"
          },
          {
            "$elt": "Volyn Oblast",
            "$id": "VOLYNSKA OBL"
          },
          {
            "$elt": "Zakarpattia Oblast",
            "$id": "ZAKARPATSKA OBL"
          },
          {
            "$elt": "Zaporizhia Oblast",
            "$id": "ZAPORIZKA OBL"
          },
          {
            "$elt": "Zhytomyr Oblast",
            "$id": "ZHYTOMYRSKA OBL"
          }
        ],
        "validationError": "Your postal code must be 5 digits."
      },
      "UG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "US": {
        "cityLabel": "City",
        "line1Label": "Street address",
        "line2Label": "Apt., ste., bldg.",
        "optionalLabel": "(optional)",
        "postcodeLabel": "ZIP code",
        "stateLabel": "State",
        "stateList": [
          {
            "$elt": "Alabama",
            "$id": "AL"
          },
          {
            "$elt": "Alaska",
            "$id": "AK"
          },
          {
            "$elt": "American Samoa",
            "$id": "AS"
          },
          {
            "$elt": "Arizona",
            "$id": "AZ"
          },
          {
            "$elt": "Arkansas",
            "$id": "AR"
          },
          {
            "$elt": "Armed Forces Americas",
            "$id": "AA"
          },
          {
            "$elt": "Armed Forces Europe",
            "$id": "AE"
          },
          {
            "$elt": "Armed Forces Pacific",
            "$id": "AP"
          },
          {
            "$elt": "California",
            "$id": "CA"
          },
          {
            "$elt": "Colorado",
            "$id": "CO"
          },
          {
            "$elt": "Connecticut",
            "$id": "CT"
          },
          {
            "$elt": "Delaware",
            "$id": "DE"
          },
          {
            "$elt": "District of Columbia",
            "$id": "DC"
          },
          {
            "$elt": "Federated States of Micronesia",
            "$id": "FM"
          },
          {
            "$elt": "Florida",
            "$id": "FL"
          },
          {
            "$elt": "Georgia",
            "$id": "GA"
          },
          {
            "$elt": "Guam",
            "$id": "GU"
          },
          {
            "$elt": "Hawaii",
            "$id": "HI"
          },
          {
            "$elt": "Idaho",
            "$id": "ID"
          },
          {
            "$elt": "Illinois",
            "$id": "IL"
          },
          {
            "$elt": "Indiana",
            "$id": "IN"
          },
          {
            "$elt": "Iowa",
            "$id": "IA"
          },
          {
            "$elt": "Kansas",
            "$id": "KS"
          },
          {
            "$elt": "Kentucky",
            "$id": "KY"
          },
          {
            "$elt": "Louisiana",
            "$id": "LA"
          },
          {
            "$elt": "Maine",
            "$id": "ME"
          },
          {
            "$elt": "Marshall Islands",
            "$id": "MH"
          },
          {
            "$elt": "Maryland",
            "$id": "MD"
          },
          {
            "$elt": "Massachusetts",
            "$id": "MA"
          },
          {
            "$elt": "Michigan",
            "$id": "MI"
          },
          {
            "$elt": "Minnesota",
            "$id": "MN"
          },
          {
            "$elt": "Mississippi",
            "$id": "MS"
          },
          {
            "$elt": "Missouri",
            "$id": "MO"
          },
          {
            "$elt": "Montana",
            "$id": "MT"
          },
          {
            "$elt": "Nebraska",
            "$id": "NE"
          },
          {
            "$elt": "Nevada",
            "$id": "NV"
          },
          {
            "$elt": "New Hampshire",
            "$id": "NH"
          },
          {
            "$elt": "New Jersey",
            "$id": "NJ"
          },
          {
            "$elt": "New Mexico",
            "$id": "NM"
          },
          {
            "$elt": "New York",
            "$id": "NY"
          },
          {
            "$elt": "North Carolina",
            "$id": "NC"
          },
          {
            "$elt": "North Dakota",
            "$id": "ND"
          },
          {
            "$elt": "Northern Mariana Islands",
            "$id": "MP"
          },
          {
            "$elt": "Ohio",
            "$id": "OH"
          },
          {
            "$elt": "Oklahoma",
            "$id": "OK"
          },
          {
            "$elt": "Oregon",
            "$id": "OR"
          },
          {
            "$elt": "Palau",
            "$id": "PW"
          },
          {
            "$elt": "Pennsylvania",
            "$id": "PA"
          },
          {
            "$elt": "Puerto Rico",
            "$id": "PR"
          },
          {
            "$elt": "Rhode Island",
            "$id": "RI"
          },
          {
            "$elt": "South Carolina",
            "$id": "SC"
          },
          {
            "$elt": "South Dakota",
            "$id": "SD"
          },
          {
            "$elt": "Tennessee",
            "$id": "TN"
          },
          {
            "$elt": "Texas",
            "$id": "TX"
          },
          {
            "$elt": "Utah",
            "$id": "UT"
          },
          {
            "$elt": "Vermont",
            "$id": "VT"
          },
          {
            "$elt": "Virgin Islands",
            "$id": "VI"
          },
          {
            "$elt": "Virginia",
            "$id": "VA"
          },
          {
            "$elt": "Washington",
            "$id": "WA"
          },
          {
            "$elt": "West Virginia",
            "$id": "WV"
          },
          {
            "$elt": "Wisconsin",
            "$id": "WI"
          },
          {
            "$elt": "Wyoming",
            "$id": "WY"
          }
        ],
        "validationError": "Your ZIP code must be 5 or 9 digits."
      },
      "UY": {
        "cityLabel": "City / Town / Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Department",
        "stateList": [
          {
            "$elt": "Artigas",
            "$id": "Artigas"
          },
          {
            "$elt": "Canelones",
            "$id": "Canelones"
          },
          {
            "$elt": "Cerro Largo",
            "$id": "Cerro Largo"
          },
          {
            "$elt": "Colonia",
            "$id": "Colonia"
          },
          {
            "$elt": "Durazno",
            "$id": "Durazno"
          },
          {
            "$elt": "Flores",
            "$id": "Flores"
          },
          {
            "$elt": "Florida",
            "$id": "Florida"
          },
          {
            "$elt": "Lavalleja",
            "$id": "Lavalleja"
          },
          {
            "$elt": "Maldonado",
            "$id": "Maldonado"
          },
          {
            "$elt": "Montevideo",
            "$id": "Montevideo"
          },
          {
            "$elt": "Paysandú",
            "$id": "Paysandú"
          },
          {
            "$elt": "Río Negro",
            "$id": "Río Negro"
          },
          {
            "$elt": "Rivera",
            "$id": "Rivera"
          },
          {
            "$elt": "Rocha",
            "$id": "Rocha"
          },
          {
            "$elt": "Salto",
            "$id": "Salto"
          },
          {
            "$elt": "San José",
            "$id": "San José"
          },
          {
            "$elt": "Soriano",
            "$id": "Soriano"
          },
          {
            "$elt": "Tacuarembó",
            "$id": "Tacuarembó"
          },
          {
            "$elt": "Treinta y Tres",
            "$id": "Treinta y Tres"
          }
        ],
        "validationError": "Your postal code must be 5 digits and cannot start with 0."
      },
      "VA": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 00120."
      },
      "VC": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "VE": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Capital District / Federal Dependencies",
        "stateList": [
          {
            "$elt": "Amazonas",
            "$id": "ESTADO AMAZONAS"
          },
          {
            "$elt": "Anzoátegui",
            "$id": "ESTADO ANZOÁTEGUI"
          },
          {
            "$elt": "Apure",
            "$id": "ESTADO APURE"
          },
          {
            "$elt": "Aragua",
            "$id": "ESTADO ARAGUA"
          },
          {
            "$elt": "Barinas",
            "$id": "ESTADO BARINAS"
          },
          {
            "$elt": "Bolívar",
            "$id": "ESTADO BOLÍVAR"
          },
          {
            "$elt": "Carabobo",
            "$id": "ESTADO CARABOBO"
          },
          {
            "$elt": "Cojedes",
            "$id": "ESTADO COJEDES"
          },
          {
            "$elt": "Delta Amacuro",
            "$id": "ESTADO DELTA AMACURO"
          },
          {
            "$elt": "Dependencias Federales",
            "$id": "DEPENDENCIAS FEDERALES"
          },
          {
            "$elt": "Distrito Capital",
            "$id": "DISTRITO CAPITAL"
          },
          {
            "$elt": "Falcón",
            "$id": "ESTADO FALCÓN"
          },
          {
            "$elt": "Guárico",
            "$id": "ESTADO GUÁRICO"
          },
          {
            "$elt": "Lara",
            "$id": "ESTADO LARA"
          },
          {
            "$elt": "Mérida",
            "$id": "ESTADO MÉRIDA"
          },
          {
            "$elt": "Miranda",
            "$id": "ESTADO MIRANDA"
          },
          {
            "$elt": "Monagas",
            "$id": "ESTADO MONAGAS"
          },
          {
            "$elt": "Nueva Esparta",
            "$id": "ESTADO NUEVA ESPARTA"
          },
          {
            "$elt": "Portuguesa",
            "$id": "ESTADO PORTUGUESA"
          },
          {
            "$elt": "Sucre",
            "$id": "ESTADO SUCRE"
          },
          {
            "$elt": "Táchira",
            "$id": "ESTADO TÁCHIRA"
          },
          {
            "$elt": "Trujillo",
            "$id": "ESTADO TRUJILLO"
          },
          {
            "$elt": "Vargas",
            "$id": "ESTADO VARGAS"
          },
          {
            "$elt": "Yaracuy",
            "$id": "ESTADO YARACUY"
          },
          {
            "$elt": "Zulia",
            "$id": "ESTADO ZULIA"
          }
        ],
        "validationError": "Your postal code must be 4 digits and can be followed by a dash and a single letter."
      },
      "VG": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "VN": {
        "cityLabel": "Town",
        "line1Label": "Address line 1",
        "line2Label": "Subdistrict / Ward",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "Larger city / Province",
        "stateList": [
          {
            "$elt": "An Giang",
            "$id": "AN GIANG"
          },
          {
            "$elt": "Bà Rịa–Vũng Tàu",
            "$id": "BÀ RỊA–VŨNG TÀU"
          },
          {
            "$elt": "Bắc Giang",
            "$id": "BẮC GIANG"
          },
          {
            "$elt": "Bắc Kạn",
            "$id": "BẮC KẠN"
          },
          {
            "$elt": "Bạc Liêu",
            "$id": "BẠC LIÊU"
          },
          {
            "$elt": "Bắc Ninh",
            "$id": "BẮC NINH"
          },
          {
            "$elt": "Bến Tre",
            "$id": "BẾN TRE"
          },
          {
            "$elt": "Bình Định",
            "$id": "BÌNH ĐỊNH"
          },
          {
            "$elt": "Bình Dương",
            "$id": "BÌNH DƯƠNG"
          },
          {
            "$elt": "Bình Phước",
            "$id": "BÌNH PHƯỚC"
          },
          {
            "$elt": "Bình Thuận",
            "$id": "BÌNH THUẬN"
          },
          {
            "$elt": "Cà Mau",
            "$id": "CÀ MAU"
          },
          {
            "$elt": "Cần Thơ",
            "$id": "CẦN THƠ"
          },
          {
            "$elt": "Cao Bằng",
            "$id": "CAO BẰNG"
          },
          {
            "$elt": "Đà Nẵng",
            "$id": "ĐÀ NẴNG"
          },
          {
            "$elt": "Đắk Lắk",
            "$id": "ĐẮK LẮK"
          },
          {
            "$elt": "Đắk Nông",
            "$id": "ĐẮK NÔNG"
          },
          {
            "$elt": "Điện Biên",
            "$id": "ĐIỆN BIÊN"
          },
          {
            "$elt": "Đồng Nai",
            "$id": "ĐỒNG NAI"
          },
          {
            "$elt": "Đồng Tháp",
            "$id": "ĐỒNG THÁP"
          },
          {
            "$elt": "Gia Lai",
            "$id": "GIA LAI"
          },
          {
            "$elt": "Hà Giang",
            "$id": "HÀ GIANG"
          },
          {
            "$elt": "Hà Nam",
            "$id": "HÀ NAM"
          },
          {
            "$elt": "Hà Nội",
            "$id": "HÀ NỘI"
          },
          {
            "$elt": "Hà Tĩnh",
            "$id": "HÀ TĨNH"
          },
          {
            "$elt": "Hải Dương",
            "$id": "HẢI DƯƠNG"
          },
          {
            "$elt": "Hải Phòng",
            "$id": "HẢI PHÒNG"
          },
          {
            "$elt": "Hậu Giang",
            "$id": "HẬU GIANG"
          },
          {
            "$elt": "Hồ Chí Minh",
            "$id": "HỒ CHÍ MINH"
          },
          {
            "$elt": "Hòa Bình",
            "$id": "HÒA BÌNH"
          },
          {
            "$elt": "Hưng Yên",
            "$id": "HƯNG YÊN"
          },
          {
            "$elt": "Khánh Hòa",
            "$id": "KHÁNH HÒA"
          },
          {
            "$elt": "Kiên Giang",
            "$id": "KIÊN GIANG"
          },
          {
            "$elt": "Kon Tum",
            "$id": "KON TUM"
          },
          {
            "$elt": "Lai Châu",
            "$id": "LAI CHÂU"
          },
          {
            "$elt": "Lâm Đồng",
            "$id": "LÂM ĐỒNG"
          },
          {
            "$elt": "Lạng Sơn",
            "$id": "LẠNG SƠN"
          },
          {
            "$elt": "Lào Cai",
            "$id": "LÀO CAI"
          },
          {
            "$elt": "Long An",
            "$id": "LONG AN"
          },
          {
            "$elt": "Nam Định",
            "$id": "NAM ĐỊNH"
          },
          {
            "$elt": "Nghệ An",
            "$id": "NGHỆ AN"
          },
          {
            "$elt": "Ninh Bình",
            "$id": "NINH BÌNH"
          },
          {
            "$elt": "Ninh Thuận",
            "$id": "NINH THUẬN"
          },
          {
            "$elt": "Phú Thọ",
            "$id": "PHÚ THỌ"
          },
          {
            "$elt": "Phú Yên",
            "$id": "PHÚ YÊN"
          },
          {
            "$elt": "Quảng Bình",
            "$id": "QUẢNG BÌNH"
          },
          {
            "$elt": "Quảng Nam",
            "$id": "QUẢNG NAM"
          },
          {
            "$elt": "Quảng Ngãi",
            "$id": "QUẢNG NGÃI"
          },
          {
            "$elt": "Quảng Ninh",
            "$id": "QUẢNG NINH"
          },
          {
            "$elt": "Quảng Trị",
            "$id": "QUẢNG TRỊ"
          },
          {
            "$elt": "Sóc Trăng",
            "$id": "SÓC TRĂNG"
          },
          {
            "$elt": "Sơn La",
            "$id": "SƠN LA"
          },
          {
            "$elt": "Tây Ninh",
            "$id": "TÂY NINH"
          },
          {
            "$elt": "Thái Bình",
            "$id": "THÁI BÌNH"
          },
          {
            "$elt": "Thái Nguyên",
            "$id": "THÁI NGUYÊN"
          },
          {
            "$elt": "Thanh Hóa",
            "$id": "THANH HÓA"
          },
          {
            "$elt": "Thừa Thiên–Huế",
            "$id": "THỪA THIÊN–HUẾ"
          },
          {
            "$elt": "Tiền Giang",
            "$id": "TIỀN GIANG"
          },
          {
            "$elt": "Trà Vinh",
            "$id": "TRÀ VINH"
          },
          {
            "$elt": "Tuyên Quang",
            "$id": "TUYÊN QUANG"
          },
          {
            "$elt": "Vĩnh Long",
            "$id": "VĨNH LONG"
          },
          {
            "$elt": "Vĩnh Phúc",
            "$id": "VĨNH PHÚC"
          },
          {
            "$elt": "Yên Bái",
            "$id": "YÊN BÁI"
          }
        ],
        "validationError": "Your postal code must be 6 digits."
      },
      "VU": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "WF": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "WS": {
        "cityLabel": "Locality",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 4 digits."
      },
      "YE": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "YT": {
        "cityLabel": "City",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "validationError": "Your postal code must be 5 digits and begin with 976."
      },
      "ZA": {
        "cityLabel": "City / Town",
        "line1Label": "Address line 1",
        "line2Label": "Suburb",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "District / Province",
        "validationError": "Your postal code must be 4 digits."
      },
      "ZM": {
        "cityLabel": "City / Town / Village",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)",
        "postcodeLabel": "Postal code",
        "stateLabel": "State / Province / Region"
      },
      "ZW": {
        "cityLabel": "City / Town",
        "line1Label": "Address line 1",
        "line2Label": "Address line 2",
        "optionalLabel": "(optional)"
      }
    }
  },
  "nameEntry": {
    "layout": [
      {
        "$": "givenName",
        "required": true,
        "_": "FIRSTNAME"
      },
      {
        "$": "surname",
        "required": true,
        "_": "LASTNAME"
      }
    ],
    "strings": {
      "givenNameLabel": "First name",
      "optionalLabel": "(optional)",
      "surnameLabel": "Last name"
    }
  },
  "nameInformal": {
    "layout": [
      {
        "$": "givenName",
        "_": "有g"
      }
    ],
    "latinLayout": [
      {
        "$": "givenName",
        "_": "FIRSTNAME"
      }
    ]
  },
  "phoneEntry": {
    "masks": {
      "FIXED_LINE": "(000) 000-0000",
      "MOBILE": "(000) 000-0000"
    },
    "patterns": {
      "FIXED_LINE": "^(1)?((?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6})$",
      "MOBILE": "^(1)?((?:2(?:0[1-35-9]|1[02-9]|2[04589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[014679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|69|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-37]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[12])|7(?:0[1-46-8]|1[02-9]|2[0457]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-25]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[0459]))[2-9]\\d{6})$",
      "GENERAL": "^(1)?([2-9]\\d{9})$"
    }
  },
  "dateEntry": "mm/dd/yyyy",
  "dateFormat": "MM/dd/y",
  "directionality": "ltr",
  "currency": {
    "supportedSymbols": {
      "AED": "AED",
      "AFN": "AFN",
      "ALL": "ALL",
      "AMD": "AMD",
      "ANG": "ANG",
      "AOA": "Kz",
      "ARS": "$",
      "AUD": "$",
      "AWG": "AWG",
      "AZN": "AZN",
      "BAM": "KM",
      "BBD": "$",
      "BDT": "৳",
      "BGN": "BGN",
      "BHD": "BHD",
      "BIF": "BIF",
      "BMD": "$",
      "BND": "$",
      "BOB": "Bs",
      "BRL": "R$",
      "BSD": "$",
      "BTN": "BTN",
      "BWP": "P",
      "BYR": "р.",
      "BZD": "$",
      "CAD": "$",
      "CDF": "CDF",
      "CHF": "CHF",
      "CLP": "$",
      "CNY": "¥",
      "COP": "$",
      "CRC": "₡",
      "CUC": "$",
      "CUP": "$",
      "CVE": "CVE",
      "CZK": "Kč",
      "DJF": "DJF",
      "DKK": "kr",
      "DOP": "$",
      "DZD": "DZD",
      "EGP": "E£",
      "ERN": "ERN",
      "ETB": "ETB",
      "EUR": "€",
      "FJD": "$",
      "FKP": "£",
      "GBP": "£",
      "GEL": "GEL",
      "GHS": "GHS",
      "GIP": "£",
      "GMD": "GMD",
      "GNF": "FG",
      "GTQ": "Q",
      "GYD": "$",
      "HKD": "$",
      "HNL": "L",
      "HRK": "kn",
      "HTG": "HTG",
      "HUF": "Ft",
      "IDR": "Rp",
      "ILS": "₪",
      "INR": "₹",
      "IQD": "IQD",
      "IRR": "IRR",
      "ISK": "kr",
      "JMD": "$",
      "JOD": "JOD",
      "JPY": "¥",
      "KES": "KES",
      "KGS": "KGS",
      "KHR": "៛",
      "KMF": "CF",
      "KPW": "₩",
      "KRW": "₩",
      "KWD": "KWD",
      "KYD": "$",
      "KZT": "₸",
      "LAK": "₭",
      "LBP": "L£",
      "LKR": "Rs",
      "LRD": "$",
      "LSL": "LSL",
      "LYD": "LYD",
      "MAD": "MAD",
      "MDL": "MDL",
      "MGA": "Ar",
      "MKD": "MKD",
      "MMK": "K",
      "MNT": "₮",
      "MOP": "MOP",
      "MRO": "MRO",
      "MUR": "Rs",
      "MVR": "MVR",
      "MWK": "MWK",
      "MXN": "$",
      "MYR": "RM",
      "MZN": "MZN",
      "NAD": "$",
      "NGN": "₦",
      "NIO": "C$",
      "NOK": "kr",
      "NPR": "Rs",
      "NZD": "$",
      "OMR": "OMR",
      "PAB": "PAB",
      "PEN": "PEN",
      "PGK": "PGK",
      "PHP": "₱",
      "PKR": "Rs",
      "PLN": "zł",
      "PYG": "₲",
      "QAR": "QAR",
      "RON": "RON",
      "RSD": "RSD",
      "RUB": "RUB",
      "RWF": "RF",
      "SAR": "SAR",
      "SBD": "$",
      "SCR": "SCR",
      "SDG": "SDG",
      "SEK": "kr",
      "SGD": "$",
      "SHP": "£",
      "SLL": "SLL",
      "SOS": "SOS",
      "SRD": "$",
      "SSP": "£",
      "STD": "Db",
      "SYP": "£",
      "SZL": "SZL",
      "THB": "฿",
      "TJS": "TJS",
      "TMT": "TMT",
      "TND": "TND",
      "TOP": "T$",
      "TRY": "TL",
      "TTD": "$",
      "TWD": "NT$",
      "TZS": "TZS",
      "UAH": "₴",
      "UGX": "UGX",
      "USD": "$",
      "UYU": "$",
      "UZS": "UZS",
      "VEF": "Bs",
      "VND": "₫",
      "VUV": "VUV",
      "WST": "WST",
      "XAF": "FCFA",
      "XCD": "$",
      "XOF": "CFA",
      "XPF": "CFPF",
      "YER": "YER",
      "ZAR": "R",
      "ZMK": "ZMK",
      "ZMW": "ZK"
    },
    "styles": {
      "Currency": "¤#;-¤#",
      "ISOCurrency": "C#;-C#",
      "SymbolISOCurrency": "¤# C;-¤# C"
    },
    "digits": {
      "AED": 2,
      "AFN": 0,
      "ALL": 0,
      "AMD": 0,
      "ANG": 2,
      "AOA": 2,
      "ARS": 2,
      "AUD": 2,
      "AWG": 2,
      "AZN": 2,
      "BAM": 2,
      "BBD": 2,
      "BDT": 2,
      "BGN": 2,
      "BHD": 3,
      "BIF": 0,
      "BMD": 2,
      "BND": 2,
      "BOB": 2,
      "BRL": 2,
      "BSD": 2,
      "BTN": 2,
      "BWP": 2,
      "BYR": 0,
      "BZD": 2,
      "CAD": 2,
      "CDF": 2,
      "CHF": 2,
      "CLP": 0,
      "CNY": 2,
      "COP": 0,
      "CRC": 0,
      "CUC": 2,
      "CUP": 2,
      "CVE": 2,
      "CZK": 2,
      "DJF": 0,
      "DKK": 2,
      "DOP": 2,
      "DZD": 2,
      "EGP": 2,
      "ERN": 2,
      "ETB": 2,
      "EUR": 2,
      "FJD": 2,
      "FKP": 2,
      "GBP": 2,
      "GEL": 2,
      "GHS": 2,
      "GIP": 2,
      "GMD": 2,
      "GNF": 0,
      "GTQ": 2,
      "GYD": 0,
      "HKD": 2,
      "HNL": 2,
      "HRK": 2,
      "HTG": 2,
      "HUF": 0,
      "IDR": 0,
      "ILS": 2,
      "INR": 2,
      "IQD": 0,
      "IRR": 0,
      "ISK": 0,
      "JMD": 2,
      "JOD": 3,
      "JPY": 0,
      "KES": 2,
      "KGS": 2,
      "KHR": 2,
      "KMF": 0,
      "KPW": 0,
      "KRW": 0,
      "KWD": 3,
      "KYD": 2,
      "KZT": 2,
      "LAK": 0,
      "LBP": 0,
      "LKR": 2,
      "LRD": 2,
      "LSL": 2,
      "LYD": 3,
      "MAD": 2,
      "MDL": 2,
      "MGA": 0,
      "MKD": 2,
      "MMK": 0,
      "MNT": 0,
      "MOP": 2,
      "MRO": 0,
      "MUR": 0,
      "MVR": 2,
      "MWK": 2,
      "MXN": 2,
      "MYR": 2,
      "MZN": 2,
      "NAD": 2,
      "NGN": 2,
      "NIO": 2,
      "NOK": 2,
      "NPR": 2,
      "NZD": 2,
      "OMR": 3,
      "PAB": 2,
      "PEN": 2,
      "PGK": 2,
      "PHP": 2,
      "PKR": 0,
      "PLN": 2,
      "PYG": 0,
      "QAR": 2,
      "RON": 2,
      "RSD": 0,
      "RUB": 2,
      "RWF": 0,
      "SAR": 2,
      "SBD": 2,
      "SCR": 2,
      "SDG": 2,
      "SEK": 2,
      "SGD": 2,
      "SHP": 2,
      "SLL": 0,
      "SOS": 0,
      "SRD": 2,
      "SSP": 2,
      "STD": 0,
      "SYP": 0,
      "SZL": 2,
      "THB": 2,
      "TJS": 2,
      "TMT": 2,
      "TND": 3,
      "TOP": 2,
      "TRY": 2,
      "TTD": 2,
      "TWD": 0,
      "TZS": 0,
      "UAH": 2,
      "UGX": 0,
      "USD": 2,
      "UYU": 2,
      "UZS": 0,
      "VEF": 2,
      "VND": 0,
      "VUV": 0,
      "WST": 2,
      "XAF": 0,
      "XCD": 2,
      "XOF": 0,
      "XPF": 0,
      "YER": 0,
      "ZAR": 2,
      "ZMK": 0,
      "ZMW": 2
    }
  },
  "number": {
    "DECIMAL_PATTERN": "#,##0.###",
    "DECIMAL_SEP": ".",
    "EXP_SYMBOL": "E",
    "GROUP_SEP": ",",
    "INFINITY": "∞",
    "MINUS_SIGN": "-",
    "NAN": "NaN",
    "PERCENT": "%",
    "PERCENT_PATTERN": "#,##0%",
    "PERMILL": "‰",
    "PLUS_SIGN": "+",
    "SCIENTIFIC_PATTERN": "#E0",
    "ZERO_DIGIT": "0"
  },
  "territory": [
    {
      "code": "AL",
      "name": "Albania"
    },
    {
      "code": "DZ",
      "name": "Algeria"
    },
    {
      "code": "AD",
      "name": "Andorra"
    },
    {
      "code": "AO",
      "name": "Angola"
    },
    {
      "code": "AI",
      "name": "Anguilla"
    },
    {
      "code": "AG",
      "name": "Antigua & Barbuda"
    },
    {
      "code": "AR",
      "name": "Argentina"
    },
    {
      "code": "AM",
      "name": "Armenia"
    },
    {
      "code": "AW",
      "name": "Aruba"
    },
    {
      "code": "AU",
      "name": "Australia"
    },
    {
      "code": "AT",
      "name": "Austria"
    },
    {
      "code": "AZ",
      "name": "Azerbaijan"
    },
    {
      "code": "BS",
      "name": "Bahamas"
    },
    {
      "code": "BH",
      "name": "Bahrain"
    },
    {
      "code": "BB",
      "name": "Barbados"
    },
    {
      "code": "BY",
      "name": "Belarus"
    },
    {
      "code": "BE",
      "name": "Belgium"
    },
    {
      "code": "BZ",
      "name": "Belize"
    },
    {
      "code": "BJ",
      "name": "Benin"
    },
    {
      "code": "BM",
      "name": "Bermuda"
    },
    {
      "code": "BT",
      "name": "Bhutan"
    },
    {
      "code": "BO",
      "name": "Bolivia"
    },
    {
      "code": "BA",
      "name": "Bosnia & Herzegovina"
    },
    {
      "code": "BW",
      "name": "Botswana"
    },
    {
      "code": "BR",
      "name": "Brazil"
    },
    {
      "code": "VG",
      "name": "British Virgin Islands"
    },
    {
      "code": "BN",
      "name": "Brunei"
    },
    {
      "code": "BG",
      "name": "Bulgaria"
    },
    {
      "code": "BF",
      "name": "Burkina Faso"
    },
    {
      "code": "BI",
      "name": "Burundi"
    },
    {
      "code": "KH",
      "name": "Cambodia"
    },
    {
      "code": "CM",
      "name": "Cameroon"
    },
    {
      "code": "CA",
      "name": "Canada"
    },
    {
      "code": "CV",
      "name": "Cape Verde"
    },
    {
      "code": "KY",
      "name": "Cayman Islands"
    },
    {
      "code": "TD",
      "name": "Chad"
    },
    {
      "code": "CL",
      "name": "Chile"
    },
    {
      "code": "C2",
      "name": "China"
    },
    {
      "code": "CO",
      "name": "Colombia"
    },
    {
      "code": "KM",
      "name": "Comoros"
    },
    {
      "code": "CG",
      "name": "Congo - Brazzaville"
    },
    {
      "code": "CD",
      "name": "Congo - Kinshasa"
    },
    {
      "code": "CK",
      "name": "Cook Islands"
    },
    {
      "code": "CR",
      "name": "Costa Rica"
    },
    {
      "code": "CI",
      "name": "Côte d’Ivoire"
    },
    {
      "code": "HR",
      "name": "Croatia"
    },
    {
      "code": "CY",
      "name": "Cyprus"
    },
    {
      "code": "CZ",
      "name": "Czech Republic"
    },
    {
      "code": "DK",
      "name": "Denmark"
    },
    {
      "code": "DJ",
      "name": "Djibouti"
    },
    {
      "code": "DM",
      "name": "Dominica"
    },
    {
      "code": "DO",
      "name": "Dominican Republic"
    },
    {
      "code": "EC",
      "name": "Ecuador"
    },
    {
      "code": "EG",
      "name": "Egypt"
    },
    {
      "code": "SV",
      "name": "El Salvador"
    },
    {
      "code": "ER",
      "name": "Eritrea"
    },
    {
      "code": "EE",
      "name": "Estonia"
    },
    {
      "code": "ET",
      "name": "Ethiopia"
    },
    {
      "code": "FK",
      "name": "Falkland Islands"
    },
    {
      "code": "FO",
      "name": "Faroe Islands"
    },
    {
      "code": "FJ",
      "name": "Fiji"
    },
    {
      "code": "FI",
      "name": "Finland"
    },
    {
      "code": "FR",
      "name": "France"
    },
    {
      "code": "GF",
      "name": "French Guiana"
    },
    {
      "code": "PF",
      "name": "French Polynesia"
    },
    {
      "code": "GA",
      "name": "Gabon"
    },
    {
      "code": "GM",
      "name": "Gambia"
    },
    {
      "code": "GE",
      "name": "Georgia"
    },
    {
      "code": "DE",
      "name": "Germany"
    },
    {
      "code": "GI",
      "name": "Gibraltar"
    },
    {
      "code": "GR",
      "name": "Greece"
    },
    {
      "code": "GL",
      "name": "Greenland"
    },
    {
      "code": "GD",
      "name": "Grenada"
    },
    {
      "code": "GP",
      "name": "Guadeloupe"
    },
    {
      "code": "GT",
      "name": "Guatemala"
    },
    {
      "code": "GN",
      "name": "Guinea"
    },
    {
      "code": "GW",
      "name": "Guinea-Bissau"
    },
    {
      "code": "GY",
      "name": "Guyana"
    },
    {
      "code": "HN",
      "name": "Honduras"
    },
    {
      "code": "HK",
      "name": "Hong Kong SAR China"
    },
    {
      "code": "HU",
      "name": "Hungary"
    },
    {
      "code": "IS",
      "name": "Iceland"
    },
    {
      "code": "IN",
      "name": "India"
    },
    {
      "code": "ID",
      "name": "Indonesia"
    },
    {
      "code": "IE",
      "name": "Ireland"
    },
    {
      "code": "IL",
      "name": "Israel"
    },
    {
      "code": "IT",
      "name": "Italy"
    },
    {
      "code": "JM",
      "name": "Jamaica"
    },
    {
      "code": "JP",
      "name": "Japan"
    },
    {
      "code": "JO",
      "name": "Jordan"
    },
    {
      "code": "KZ",
      "name": "Kazakhstan"
    },
    {
      "code": "KE",
      "name": "Kenya"
    },
    {
      "code": "KI",
      "name": "Kiribati"
    },
    {
      "code": "KW",
      "name": "Kuwait"
    },
    {
      "code": "KG",
      "name": "Kyrgyzstan"
    },
    {
      "code": "LA",
      "name": "Laos"
    },
    {
      "code": "LV",
      "name": "Latvia"
    },
    {
      "code": "LS",
      "name": "Lesotho"
    },
    {
      "code": "LI",
      "name": "Liechtenstein"
    },
    {
      "code": "LT",
      "name": "Lithuania"
    },
    {
      "code": "LU",
      "name": "Luxembourg"
    },
    {
      "code": "MK",
      "name": "Macedonia"
    },
    {
      "code": "MG",
      "name": "Madagascar"
    },
    {
      "code": "MW",
      "name": "Malawi"
    },
    {
      "code": "MY",
      "name": "Malaysia"
    },
    {
      "code": "MV",
      "name": "Maldives"
    },
    {
      "code": "ML",
      "name": "Mali"
    },
    {
      "code": "MT",
      "name": "Malta"
    },
    {
      "code": "MH",
      "name": "Marshall Islands"
    },
    {
      "code": "MQ",
      "name": "Martinique"
    },
    {
      "code": "MR",
      "name": "Mauritania"
    },
    {
      "code": "MU",
      "name": "Mauritius"
    },
    {
      "code": "YT",
      "name": "Mayotte"
    },
    {
      "code": "MX",
      "name": "Mexico"
    },
    {
      "code": "FM",
      "name": "Micronesia"
    },
    {
      "code": "MD",
      "name": "Moldova"
    },
    {
      "code": "MC",
      "name": "Monaco"
    },
    {
      "code": "MN",
      "name": "Mongolia"
    },
    {
      "code": "ME",
      "name": "Montenegro"
    },
    {
      "code": "MS",
      "name": "Montserrat"
    },
    {
      "code": "MA",
      "name": "Morocco"
    },
    {
      "code": "MZ",
      "name": "Mozambique"
    },
    {
      "code": "NA",
      "name": "Namibia"
    },
    {
      "code": "NR",
      "name": "Nauru"
    },
    {
      "code": "NP",
      "name": "Nepal"
    },
    {
      "code": "NL",
      "name": "Netherlands"
    },
    {
      "code": "AN",
      "name": "Netherlands Antilles"
    },
    {
      "code": "NC",
      "name": "New Caledonia"
    },
    {
      "code": "NZ",
      "name": "New Zealand"
    },
    {
      "code": "NI",
      "name": "Nicaragua"
    },
    {
      "code": "NE",
      "name": "Niger"
    },
    {
      "code": "NG",
      "name": "Nigeria"
    },
    {
      "code": "NU",
      "name": "Niue"
    },
    {
      "code": "NF",
      "name": "Norfolk Island"
    },
    {
      "code": "NO",
      "name": "Norway"
    },
    {
      "code": "OM",
      "name": "Oman"
    },
    {
      "code": "PW",
      "name": "Palau"
    },
    {
      "code": "PA",
      "name": "Panama"
    },
    {
      "code": "PG",
      "name": "Papua New Guinea"
    },
    {
      "code": "PY",
      "name": "Paraguay"
    },
    {
      "code": "PE",
      "name": "Peru"
    },
    {
      "code": "PH",
      "name": "Philippines"
    },
    {
      "code": "PN",
      "name": "Pitcairn Islands"
    },
    {
      "code": "PL",
      "name": "Poland"
    },
    {
      "code": "PT",
      "name": "Portugal"
    },
    {
      "code": "QA",
      "name": "Qatar"
    },
    {
      "code": "RE",
      "name": "Réunion"
    },
    {
      "code": "RO",
      "name": "Romania"
    },
    {
      "code": "RU",
      "name": "Russia"
    },
    {
      "code": "RW",
      "name": "Rwanda"
    },
    {
      "code": "WS",
      "name": "Samoa"
    },
    {
      "code": "SM",
      "name": "San Marino"
    },
    {
      "code": "ST",
      "name": "São Tomé & Príncipe"
    },
    {
      "code": "SA",
      "name": "Saudi Arabia"
    },
    {
      "code": "SN",
      "name": "Senegal"
    },
    {
      "code": "RS",
      "name": "Serbia"
    },
    {
      "code": "SC",
      "name": "Seychelles"
    },
    {
      "code": "SL",
      "name": "Sierra Leone"
    },
    {
      "code": "SG",
      "name": "Singapore"
    },
    {
      "code": "SK",
      "name": "Slovakia"
    },
    {
      "code": "SI",
      "name": "Slovenia"
    },
    {
      "code": "SB",
      "name": "Solomon Islands"
    },
    {
      "code": "SO",
      "name": "Somalia"
    },
    {
      "code": "ZA",
      "name": "South Africa"
    },
    {
      "code": "KR",
      "name": "South Korea"
    },
    {
      "code": "ES",
      "name": "Spain"
    },
    {
      "code": "LK",
      "name": "Sri Lanka"
    },
    {
      "code": "SH",
      "name": "St. Helena"
    },
    {
      "code": "KN",
      "name": "St. Kitts & Nevis"
    },
    {
      "code": "LC",
      "name": "St. Lucia"
    },
    {
      "code": "PM",
      "name": "St. Pierre & Miquelon"
    },
    {
      "code": "VC",
      "name": "St. Vincent & Grenadines"
    },
    {
      "code": "SR",
      "name": "Suriname"
    },
    {
      "code": "SJ",
      "name": "Svalbard & Jan Mayen"
    },
    {
      "code": "SZ",
      "name": "Swaziland"
    },
    {
      "code": "SE",
      "name": "Sweden"
    },
    {
      "code": "CH",
      "name": "Switzerland"
    },
    {
      "code": "TW",
      "name": "Taiwan"
    },
    {
      "code": "TJ",
      "name": "Tajikistan"
    },
    {
      "code": "TZ",
      "name": "Tanzania"
    },
    {
      "code": "TH",
      "name": "Thailand"
    },
    {
      "code": "TG",
      "name": "Togo"
    },
    {
      "code": "TO",
      "name": "Tonga"
    },
    {
      "code": "TT",
      "name": "Trinidad & Tobago"
    },
    {
      "code": "TN",
      "name": "Tunisia"
    },
    {
      "code": "TR",
      "name": "Turkey"
    },
    {
      "code": "TM",
      "name": "Turkmenistan"
    },
    {
      "code": "TC",
      "name": "Turks & Caicos Islands"
    },
    {
      "code": "TV",
      "name": "Tuvalu"
    },
    {
      "code": "UG",
      "name": "Uganda"
    },
    {
      "code": "UA",
      "name": "Ukraine"
    },
    {
      "code": "AE",
      "name": "United Arab Emirates"
    },
    {
      "code": "GB",
      "name": "United Kingdom"
    },
    {
      "code": "US",
      "name": "United States"
    },
    {
      "code": "UY",
      "name": "Uruguay"
    },
    {
      "code": "VU",
      "name": "Vanuatu"
    },
    {
      "code": "VA",
      "name": "Vatican City"
    },
    {
      "code": "VE",
      "name": "Venezuela"
    },
    {
      "code": "VN",
      "name": "Vietnam"
    },
    {
      "code": "WF",
      "name": "Wallis & Futuna"
    },
    {
      "code": "YE",
      "name": "Yemen"
    },
    {
      "code": "ZM",
      "name": "Zambia"
    },
    {
      "code": "ZW",
      "name": "Zimbabwe"
    }
  ],
  "languageLabel": {
    "ar": "العربية",
    "en": "English",
    "es": "Español",
    "fr": "Français",
    "da": "Dansk",
    "zh": "中文",
    "zh-Hant": "中文",
    "zh-Hans": "中文",
    "de": "Deutsch",
    "he": "עברית",
    "id": "Bahasa Indonesia",
    "it": "Italiano",
    "ja": "日本語",
    "ko": "한국어",
    "no": "Norsk Bokmål",
    "nl": "Nederlands",
    "pl": "Polski",
    "pt": "Português",
    "ru": "Русский",
    "sv": "Svenska",
    "th": "ไทย",
    "tr": "Türkçe"
  }
});