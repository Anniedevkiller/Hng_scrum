import requests
from fastapi import Request
from functools import lru_cache


country_to_currency = {
    'AF': 'afn',  # Afghanistan
    'AL': 'all',  # Albania
    'DZ': 'dzd',  # Algeria
    'AD': 'eur',  # Andorra
    'AO': 'aoa',  # Angola
    'AR': 'ars',  # Argentina
    'AM': 'amd',  # Armenia
    'AW': 'awg',  # Aruba
    'AU': 'aud',  # Australia
    'AT': 'eur',  # Austria
    'AZ': 'azn',  # Azerbaijan
    'BS': 'bsd',  # Bahamas
    'BH': 'bhd',  # Bahrain
    'BD': 'bdt',  # Bangladesh
    'BB': 'bbd',  # Barbados
    'BY': 'byr',  # Belarus
    'BE': 'eur',  # Belgium
    'BZ': 'bzd',  # Belize
    'BJ': 'cfa',  # Benin
    'BT': 'btn',  # Bhutan
    'BO': 'bob',  # Bolivia
    'BA': 'bam',  # Bosnia and Herzegovina
    'BW': 'bwp',  # Botswana
    'BR': 'brl',  # Brazil
    'BN': 'bnd',  # Brunei
    'BG': 'bgn',  # Bulgaria
    'BF': 'bfa',  # Burkina Faso
    'BI': 'bif',  # Burundi
    'KH': 'khr',  # Cambodia
    'CM': 'cfa',  # Cameroon
    'CA': 'cad',  # Canada
    'CV': 'cve',  # Cape Verde
    'KY': 'kyd',  # Cayman Islands
    'CF': 'cfa',  # Central African Republic
    'TD': 'cfa',  # Chad
    'CL': 'clp',  # Chile
    'CN': 'cny',  # China
    'CO': 'cop',  # Colombia
    'KM': 'kmf',  # Comoros
    'CD': 'cdf',  # Congo (Congo Kinshasa)
    'CG': 'cdf',  # Congo (Congo Brazzaville)
    'CR': 'crc',  # Costa Rica
    'HR': 'hrk',  # Croatia
    'CU': 'cup',  # Cuba
    'CY': 'cyp',  # Cyprus
    'CZ': 'czk',  # Czech Republic
    'DK': 'dkk',  # Denmark
    'DJ': 'djf',  # Djibouti
    'DM': 'dollar',  # Dominica
    'DO': 'dopr',  # Dominican Republic
    'EC': 'usd',  # Ecuador
    'EG': 'egp',  # Egypt
    'SV': 'usd',  # El Salvador
    'GQ': 'gqe',  # Equatorial Guinea
    'ER': 'ern',  # Eritrea
    'EE': 'eek',  # Estonia
    'ET': 'etb',  # Ethiopia
    'FO': 'fok',  # Faroe Islands
    'FJ': 'fjd',  # Fiji
    'FI': 'eur',  # Finland
    'FR': 'eur',  # France
    'GA': 'xaf',  # Gabon
    'GM': 'gmd',  # Gambia
    'GE': 'gel',  # Georgia
    'DE': 'eur',  # Germany
    'GH': 'ghs',  # Ghana
    'GI': 'gip',  # Gibraltar
    'GR': 'eur',  # Greece
    'GL': 'gln',  # Greenland
    'GD': 'gda',  # Grenada
    'GU': 'usd',  # Guam
    'GT': 'gtq',  # Guatemala
    'GN': 'gnf',  # Guinea
    'GW': 'gnf',  # Guinea-Bissau
    'GY': 'gyd',  # Guyana
    'HT': 'htg',  # Haiti
    'HN': 'hnl',  # Honduras
    'HK': 'hkd',  # Hong Kong
    'HU': 'huf',  # Hungary
    'IS': 'isk',  # Iceland
    'IN': 'inr',  # India
    'ID': 'idr',  # Indonesia
    'IR': 'irr',  # Iran
    'IQ': 'iqd',  # Iraq
    'IE': 'eur',  # Ireland
    'IL': 'ils',  # Israel
    'IT': 'eur',  # Italy
    'JM': 'jmd',  # Jamaica
    'JP': 'jpy',  # Japan
    'JO': 'jod',  # Jordan
    'KE': 'kes',  # Kenya
    'KG': 'kgs',  # Kyrgyzstan
    'KH': 'khr',  # Cambodia
    'KI': 'kik',  # Kiribati
    'KR': 'krw',  # South Korea
    'KW': 'kwd',  # Kuwait
    'LA': 'kip',  # Laos
    'LB': 'lbp',  # Lebanon
    'LS': 'lsl',  # Lesotho
    'LR': 'lrd',  # Liberia
    'LY': 'lyd',  # Libya
    'LI': 'chf',  # Liechtenstein
    'LT': 'ltl',  # Lithuania
    'LU': 'eur',  # Luxembourg
    'MO': 'mop',  # Macau
    'MK': 'mkd',  # North Macedonia
    'MG': 'mga',  # Madagascar
    'MW': 'mwk',  # Malawi
    'MY': 'myr',  # Malaysia
    'ML': 'mali',  # Mali
    'MT': 'eur',  # Malta
    'MH': 'usd',  # Marshall Islands
    'MQ': 'fkp',  # Martinique
    'MR': 'mru',  # Mauritania
    'MU': 'mur',  # Mauritius
    'YT': 'mvr',  # Mayotte
    'MX': 'mxn',  # Mexico
    'FM': 'usd',  # Micronesia
    'MD': 'mdl',  # Moldova
    'MC': 'eur',  # Monaco
    'MN': 'mnt',  # Mongolia
    'ME': 'eur',  # Montenegro
    'MS': 'usd',  # Montserrat
    'MA': 'mad',  # Morocco
    'MZ': 'mzn',  # Mozambique
    'NA': 'nad',  # Namibia
    'NP': 'npr',  # Nepal
    'NL': 'eur',  # Netherlands
    'NC': 'xpf',  # New Caledonia
    'NZ': 'nzd',  # New Zealand
    'NI': 'cordobas',  # Nicaragua
    'NE': 'cfa',  # Niger
    'NG': 'ngn',  # Nigeria
    'NO': 'nok',  # Norway
    'OM': 'omr',  # Oman
    'PK': 'pkr',  # Pakistan
    'PA': 'usd',  # Panama
    'PG': 'pgk',  # Papua New Guinea
    'PY': 'pyg',  # Paraguay
    'PE': 'pen',  # Peru
    'PH': 'php',  # Philippines
    'PL': 'pln',  # Poland
    'PT': 'eur',  # Portugal
    'PR': 'usd',  # Puerto Rico
    'QA': 'qar',  # Qatar
    'RO': 'ron',  # Romania
    'RU': 'rub',  # Russia
    'RW': 'rwf',  # Rwanda
    'SA': 'sar',  # Saudi Arabia
    'SN': 'cfa',  # Senegal
    'SG': 'sgd',  # Singapore
    'RS': 'rsd',  # Serbia
    'SK': 'skk',  # Slovakia
    'SI': 'siw',  # Slovenia
    'SB': 'sbd',  # Solomon Islands
    'SO': 'sos',  # Somalia
    'ZA': 'zar',  # South Africa
    'SS': 'ssp',  # South Sudan
    'ES': 'eur',  # Spain
    'LK': 'lkr',  # Sri Lanka
    'SD': 'sdg',  # Sudan
    'SR': 'srd',  # Suriname
    'SZ': 'szl',  # Swaziland
    'SE': 'sek',  # Sweden
    'CH': 'chf',  # Switzerland
    'SY': 'syp',  # Syria
    'TW': 'twd',  # Taiwan
    'TJ': 'tjs',  # Tajikistan
    'TZ': 'tzs',  # Tanzania
    'TH': 'thb',  # Thailand
    'TG': 'tgd',  # Togo
    'TK': 'tkt',  # Tokelau
    'TO': 'tonga',  # Tonga
    'TT': 'ttd',  # Trinidad and Tobago
    'TN': 'tnd',  # Tunisia
    'TR': 'try',  # Turkey
    'TM': 'tmm',  # Turkmenistan
    'TC': 'tct',  # Turks and Caicos Islands
    'TV': 'aud',  # Tuvalu
    'UG': 'ugx',  # Uganda
    'UA': 'uah',  # Ukraine
    'AE': 'aed',  # United Arab Emirates
    'GB': 'gbp',  # United Kingdom
    'US': 'usd',  # United States
    'UY': 'uyu',  # Uruguay
    'UZ': 'uzs',  # Uzbekistan
    'VU': 'vuv',  # Vanuatu
    'VE': 'vef',  # Venezuela
    'VN': 'vnd',  # Vietnam
    'WF': 'wst',  # Wallis and Futuna
    'EH': 'mad',  # Western Sahara
    'YE': 'yer',  # Yemen
    'ZM': 'zmw',  # Zambia
    'ZW': 'zwl',  # Zimbabwe
}



@lru_cache(maxsize=100)
def fetch_country_from_ip(ip_address: str) -> str:
    """
    Fetches the country code based on the IP address using an external API.
    If the IP address is a localhost address, the URL won't include the IP.
    Caches the result to avoid redundant external requests for the same IP.

    Parameters:
    - ip_address (str): The IP address of the client making the request.

    Returns:
    str: The country code associated with the IP address or 'US' in case of failure.
    """
    localhost_ips = {'127.0.0.1', 'localhost', '::1'}

    url = 'https://api.country.is' if ip_address in localhost_ips else f'https://api.country.is/{ip_address}'

    try:
        response = requests.get(url)
        response.raise_for_status()
        country = response.json().get('country', 'US')
        return country
    except requests.RequestException:
        return 'US'



def get_user_currency_from_ip(request: Request) -> str:
    """
    This function retrieves the user's currency based on their IP address.
    It sends a request to an external API to determine the user's country,
    then uses a predefined dictionary to map the country to its corresponding currency.
    If the country is not found in the dictionary, it defaults to 'USD'.

    Parameters:
    - request: The FastAPI Request object, which provides client and header information.

    Returns:
    str: The user's currency code in uppercase.
    """
    client_host = request.client.host
    forwarded_for = request.headers.get("x-forwarded-for")
    ip_address = forwarded_for.split(",")[0] if forwarded_for else client_host
    country = fetch_country_from_ip(ip_address)    
    currency = country_to_currency.get(country, 'USD').upper()

    return currency


