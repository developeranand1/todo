import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


const countryList = [
  {
    name: 'Afghanistan',
    code: 'AF',
    callingCode: '+93',
  },
  {
    name: 'Albania',
    code: 'AL',
    callingCode: '+355',
  },
  {
    name: 'Algeria',
    code: 'DZ',
    callingCode: '+213',
  },
  {
    name: 'Andorra',
    code: 'AD',
    callingCode: '+376',
  },
  {
    name: 'Angola',
    code: 'AO',
    callingCode: '+244',
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG',
    callingCode: '+1',
  },
  {
    name: 'Argentina',
    code: 'AR',
    callingCode: '+54',
  },
  {
    name: 'Armenia',
    code: 'AM',
    callingCode: '+374',
  },
  {
    name: 'Australia',
    code: 'AU',
    callingCode: '+61',
  },
  {
    name: 'Austria',
    code: 'AT',
    callingCode: '+43',
  },
  {
    name: 'Azerbaijan',
    code: 'AZ',
    callingCode: '+994',
  },
  {
    name: 'Bahamas',
    code: 'BS',
    callingCode: '+1',
  },
  {
    name: 'Bahrain',
    code: 'BH',
    callingCode: '+973',
  },
  {
    name: 'Bangladesh',
    code: 'BD',
    callingCode: '+880',
  },
  {
    name: 'Barbados',
    code: 'BB',
    callingCode: '+1',
  },
  {
    name: 'Belarus',
    code: 'BY',
    callingCode: '+375',
  },
  {
    name: 'Belgium',
    code: 'BE',
    callingCode: '+32',
  },
  {
    name: 'Belize',
    code: 'BZ',
    callingCode: '+501',
  },
  {
    name: 'Benin',
    code: 'BJ',
    callingCode: '+229',
  },
  {
    name: 'Bhutan',
    code: 'BT',
    callingCode: '+975',
  },
  {
    name: 'Bolivia',
    code: 'BO',
    callingCode: '+591',
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA',
    callingCode: '+387',
  },
  {
    name: 'Botswana',
    code: 'BW',
    callingCode: '+267',
  },
  {
    name: 'Brazil',
    code: 'BR',
    callingCode: '+55',
  },
  {
    name: 'Brunei',
    code: 'BN',
    callingCode: '+673',
  },
  {
    name: 'Bulgaria',
    code: 'BG',
    callingCode: '+359',
  },
  {
    name: 'Burkina Faso',
    code: 'BF',
    callingCode: '+226',
  },
  {
    name: 'Burundi',
    code: 'BI',
    callingCode: '+257',
  },
  {
    name: 'Cabo Verde',
    code: 'CV',
    callingCode: '+238',
  },
  {
    name: 'Cambodia',
    code: 'KH',
    callingCode: '+855',
  },
  {
    name: 'Cameroon',
    code: 'CM',
    callingCode: '+237',
  },
  {
    name: 'Canada',
    code: 'CA',
    callingCode: '+1',
  },
  {
    name: 'Central African Republic',
    code: 'CF',
    callingCode: '+236',
  },
  {
    name: 'Chad',
    code: 'TD',
    callingCode: '+235',
  },
  {
    name: 'Chile',
    code: 'CL',
    callingCode: '+56',
  },
  {
    name: 'China',
    code: 'CN',
    callingCode: '+86',
  },
  {
    name: 'Colombia',
    code: 'CO',
    callingCode: '+57',
  },
  {
    name: 'Comoros',
    code: 'KM',
    callingCode: '+269',
  },
  {
    name: 'Congo (Congo-Brazzaville)',
    code: 'CG',
    callingCode: '+242',
  },
  {
    name: 'Costa Rica',
    code: 'CR',
    callingCode: '+506',
  },
  {
    name: 'Croatia',
    code: 'HR',
    callingCode: '+385',
  },
  {
    name: 'Cuba',
    code: 'CU',
    callingCode: '+53',
  },
  {
    name: 'Cyprus',
    code: 'CY',
    callingCode: '+357',
  },
  {
    name: 'Czech Republic',
    code: 'CZ',
    callingCode: '+420',
  },
  {
    name: 'Democratic Republic of the Congo',
    code: 'CD',
    callingCode: '+243',
  },
  {
    name: 'Denmark',
    code: 'DK',
    callingCode: '+45',
  },
  {
    name: 'Djibouti',
    code: 'DJ',
    callingCode: '+253',
  },
  {
    name: 'Dominica',
    code: 'DM',
    callingCode: '+1',
  },
  {
    name: 'Dominican Republic',
    code: 'DO',
    callingCode: '+1',
  },
  {
    name: 'East Timor (Timor-Leste)',
    code: 'TL',
    callingCode: '+670',
  },
  {
    name: 'Ecuador',
    code: 'EC',
    callingCode: '+593',
  },
  {
    name: 'Egypt',
    code: 'EG',
    callingCode: '+20',
  },
  {
    name: 'El Salvador',
    code: 'SV',
    callingCode: '+503',
  },
  {
    name: 'Equatorial Guinea',
    code: 'GQ',
    callingCode: '+240',
  },
  {
    name: 'Eritrea',
    code: 'ER',
    callingCode: '+291',
  },
  {
    name: 'Estonia',
    code: 'EE',
    callingCode: '+372',
  },
  {
    name: "Eswatini (fmr. 'Swaziland')",
    code: 'SZ',
    callingCode: '+268',
  },
  {
    name: 'Ethiopia',
    code: 'ET',
    callingCode: '+251',
  },
  {
    name: 'Fiji',
    code: 'FJ',
    callingCode: '+679',
  },
  {
    name: 'Finland',
    code: 'FI',
    callingCode: '+358',
  },
  {
    name: 'France',
    code: 'FR',
    callingCode: '+33',
  },
  {
    name: 'Gabon',
    code: 'GA',
    callingCode: '+241',
  },
  {
    name: 'Gambia',
    code: 'GM',
    callingCode: '+220',
  },
  {
    name: 'Georgia',
    code: 'GE',
    callingCode: '+995',
  },
  {
    name: 'Germany',
    code: 'DE',
    callingCode: '+49',
  },
  {
    name: 'Ghana',
    code: 'GH',
    callingCode: '+233',
  },
  {
    name: 'Greece',
    code: 'GR',
    callingCode: '+30',
  },
  {
    name: 'Grenada',
    code: 'GD',
    callingCode: '+1',
  },
  {
    name: 'Guatemala',
    code: 'GT',
    callingCode: '+502',
  },
  {
    name: 'Guinea',
    code: 'GN',
    callingCode: '+224',
  },
  {
    name: 'Guinea-Bissau',
    code: 'GW',
    callingCode: '+245',
  },
  {
    name: 'Guyana',
    code: 'GY',
    callingCode: '+592',
  },
  {
    name: 'Haiti',
    code: 'HT',
    callingCode: '+509',
  },
  {
    name: 'Holy See',
    code: 'VA',
    callingCode: '+379',
  },
  {
    name: 'Honduras',
    code: 'HN',
    callingCode: '+504',
  },
  {
    name: 'Hungary',
    code: 'HU',
    callingCode: '+36',
  },
  {
    name: 'Iceland',
    code: 'IS',
    callingCode: '+354',
  },
  {
    name: 'India',
    code: 'IN',
    callingCode: '+91',
  },
  {
    name: 'Indonesia',
    code: 'ID',
    callingCode: '+62',
  },
  {
    name: 'Iran',
    code: 'IR',
    callingCode: '+98',
  },
  {
    name: 'Iraq',
    code: 'IQ',
    callingCode: '+964',
  },
  {
    name: 'Ireland',
    code: 'IE',
    callingCode: '+353',
  },
  {
    name: 'Israel',
    code: 'IL',
    callingCode: '+972',
  },
  {
    name: 'Italy',
    code: 'IT',
    callingCode: '+39',
  },
  {
    name: 'Jamaica',
    code: 'JM',
    callingCode: '+1',
  },
  {
    name: 'Japan',
    code: 'JP',
    callingCode: '+81',
  },
  {
    name: 'Jordan',
    code: 'JO',
    callingCode: '+962',
  },
  {
    name: 'Kazakhstan',
    code: 'KZ',
    callingCode: '+7',
  },
  {
    name: 'Kenya',
    code: 'KE',
    callingCode: '+254',
  },
  {
    name: 'Kiribati',
    code: 'KI',
    callingCode: '+686',
  },
  {
    name: 'Korea, North',
    code: 'KP',
    callingCode: '+850',
  },
  {
    name: 'Korea, South',
    code: 'KR',
    callingCode: '+82',
  },
  {
    name: 'Kosovo',
    code: 'XK',
    callingCode: '+383',
  },
  {
    name: 'Kuwait',
    code: 'KW',
    callingCode: '+965',
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG',
    callingCode: '+996',
  },
  {
    name: 'Laos',
    code: 'LA',
    callingCode: '+856',
  },
  {
    name: 'Latvia',
    code: 'LV',
    callingCode: '+371',
  },
  {
    name: 'Lebanon',
    code: 'LB',
    callingCode: '+961',
  },
  {
    name: 'Lesotho',
    code: 'LS',
    callingCode: '+266',
  },
  {
    name: 'Liberia',
    code: 'LR',
    callingCode: '+231',
  },
  {
    name: 'Libya',
    code: 'LY',
    callingCode: '+218',
  },
  {
    name: 'Liechtenstein',
    code: 'LI',
    callingCode: '+423',
  },
  {
    name: 'Lithuania',
    code: 'LT',
    callingCode: '+370',
  },
  {
    name: 'Luxembourg',
    code: 'LU',
    callingCode: '+352',
  },
  {
    name: 'Madagascar',
    code: 'MG',
    callingCode: '+261',
  },
  {
    name: 'Malawi',
    code: 'MW',
    callingCode: '+265',
  },
  {
    name: 'Malaysia',
    code: 'MY',
    callingCode: '+60',
  },
  {
    name: 'Maldives',
    code: 'MV',
    callingCode: '+960',
  },
  {
    name: 'Mali',
    code: 'ML',
    callingCode: '+223',
  },
  {
    name: 'Malta',
    code: 'MT',
    callingCode: '+356',
  },
  {
    name: 'Marshall Islands',
    code: 'MH',
    callingCode: '+692',
  },
  {
    name: 'Mauritania',
    code: 'MR',
    callingCode: '+222',
  },
  {
    name: 'Mauritius',
    code: 'MU',
    callingCode: '+230',
  },
  {
    name: 'Mexico',
    code: 'MX',
    callingCode: '+52',
  },
  {
    name: 'Micronesia',
    code: 'FM',
    callingCode: '+691',
  },
  {
    name: 'Moldova',
    code: 'MD',
    callingCode: '+373',
  },
  {
    name: 'Monaco',
    code: 'MC',
    callingCode: '+377',
  },
  {
    name: 'Mongolia',
    code: 'MN',
    callingCode: '+976',
  },
  {
    name: 'Montenegro',
    code: 'ME',
    callingCode: '+382',
  },
  {
    name: 'Morocco',
    code: 'MA',
    callingCode: '+212',
  },
  {
    name: 'Mozambique',
    code: 'MZ',
    callingCode: '+258',
  },
  {
    name: 'Myanmar (formerly Burma)',
    code: 'MM',
    callingCode: '+95',
  },
  {
    name: 'Namibia',
    code: 'NA',
    callingCode: '+264',
  },
  {
    name: 'Nauru',
    code: 'NR',
    callingCode: '+674',
  },
  {
    name: 'Nepal',
    code: 'NP',
    callingCode: '+977',
  },
  {
    name: 'Netherlands',
    code: 'NL',
    callingCode: '+31',
  },
  {
    name: 'New Zealand',
    code: 'NZ',
    callingCode: '+64',
  },
  {
    name: 'Nicaragua',
    code: 'NI',
    callingCode: '+505',
  },
  {
    name: 'Niger',
    code: 'NE',
    callingCode: '+227',
  },
  {
    name: 'Nigeria',
    code: 'NG',
    callingCode: '+234',
  },
  {
    name: 'North Macedonia',
    code: 'MK',
    callingCode: '+389',
  },
  {
    name: 'Norway',
    code: 'NO',
    callingCode: '+47',
  },
  {
    name: 'Oman',
    code: 'OM',
    callingCode: '+968',
  },
  {
    name: 'Pakistan',
    code: 'PK',
    callingCode: '+92',
  },
  {
    name: 'Palau',
    code: 'PW',
    callingCode: '+680',
  },
  {
    name: 'Palestine State',
    code: 'PS',
    callingCode: '+970',
  },
  {
    name: 'Panama',
    code: 'PA',
    callingCode: '+507',
  },
  {
    name: 'Papua New Guinea',
    code: 'PG',
    callingCode: '+675',
  },
  {
    name: 'Paraguay',
    code: 'PY',
    callingCode: '+595',
  },
  {
    name: 'Peru',
    code: 'PE',
    callingCode: '+51',
  },
  {
    name: 'Philippines',
    code: 'PH',
    callingCode: '+63',
  },
  {
    name: 'Poland',
    code: 'PL',
    callingCode: '+48',
  },
  {
    name: 'Portugal',
    code: 'PT',
    callingCode: '+351',
  },
  {
    name: 'Qatar',
    code: 'QA',
    callingCode: '+974',
  },
  {
    name: 'Romania',
    code: 'RO',
    callingCode: '+40',
  },
  {
    name: 'Russia',
    code: 'RU',
    callingCode: '+7',
  },
  {
    name: 'Rwanda',
    code: 'RW',
    callingCode: '+250',
  },
  {
    name: 'Saint Kitts and Nevis',
    code: 'KN',
    callingCode: '+1',
  },
  {
    name: 'Saint Lucia',
    code: 'LC',
    callingCode: '+1',
  },
  {
    name: 'Saint Vincent and the Grenadines',
    code: 'VC',
    callingCode: '+1',
  },
  {
    name: 'Samoa',
    code: 'WS',
    callingCode: '+685',
  },
  {
    name: 'San Marino',
    code: 'SM',
    callingCode: '+378',
  },
  {
    name: 'Sao Tome and Principe',
    code: 'ST',
    callingCode: '+239',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    callingCode: '+966',
  },
  {
    name: 'Senegal',
    code: 'SN',
    callingCode: '+221',
  },
  {
    name: 'Serbia',
    code: 'RS',
    callingCode: '+381',
  },
  {
    name: 'Seychelles',
    code: 'SC',
    callingCode: '+248',
  },
  {
    name: 'Sierra Leone',
    code: 'SL',
    callingCode: '+232',
  },
  {
    name: 'Singapore',
    code: 'SG',
    callingCode: '+65',
  },
  {
    name: 'Slovakia',
    code: 'SK',
    callingCode: '+421',
  },
  {
    name: 'Slovenia',
    code: 'SI',
    callingCode: '+386',
  },
  {
    name: 'Solomon Islands',
    code: 'SB',
    callingCode: '+677',
  },
  {
    name: 'Somalia',
    code: 'SO',
    callingCode: '+252',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    callingCode: '+27',
  },
  {
    name: 'South Sudan',
    code: 'SS',
    callingCode: '+211',
  },
  {
    name: 'Spain',
    code: 'ES',
    callingCode: '+34',
  },
  {
    name: 'Sri Lanka',
    code: 'LK',
    callingCode: '+94',
  },
  {
    name: 'Sudan',
    code: 'SD',
    callingCode: '+249',
  },
  {
    name: 'Suriname',
    code: 'SR',
    callingCode: '+597',
  },
  {
    name: 'Sweden',
    code: 'SE',
    callingCode: '+46',
  },
  {
    name: 'Switzerland',
    code: 'CH',
    callingCode: '+41',
  },
  {
    name: 'Syria',
    code: 'SY',
    callingCode: '+963',
  },
  {
    name: 'Taiwan',
    code: 'TW',
    callingCode: '+886',
  },
  {
    name: 'Tajikistan',
    code: 'TJ',
    callingCode: '+992',
  },
  {
    name: 'Tanzania',
    code: 'TZ',
    callingCode: '+255',
  },
  {
    name: 'Thailand',
    code: 'TH',
    callingCode: '+66',
  },
  {
    name: 'Togo',
    code: 'TG',
    callingCode: '+228',
  },
  {
    name: 'Tonga',
    code: 'TO',
    callingCode: '+676',
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT',
    callingCode: '+1',
  },
  {
    name: 'Tunisia',
    code: 'TN',
    callingCode: '+216',
  },
  {
    name: 'Turkey',
    code: 'TR',
    callingCode: '+90',
  },
  {
    name: 'Turkmenistan',
    code: 'TM',
    callingCode: '+993',
  },
  {
    name: 'Tuvalu',
    code: 'TV',
    callingCode: '+688',
  },
  {
    name: 'Uganda',
    code: 'UG',
    callingCode: '+256',
  },
  {
    name: 'Ukraine',
    code: 'UA',
    callingCode: '+380',
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    callingCode: '+971',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    callingCode: '+44',
  },
  {
    name: 'United States',
    code: 'US',
    callingCode: '+1',
  },
  {
    name: 'Uruguay',
    code: 'UY',
    callingCode: '+598',
  },
  {
    name: 'Uzbekistan',
    code: 'UZ',
    callingCode: '+998',
  },
  {
    name: 'Vanuatu',
    code: 'VU',
    callingCode: '+678',
  },
  {
    name: 'Vatican City',
    code: 'VA',
    callingCode: '+39',
  },
  {
    name: 'Venezuela',
    code: 'VE',
    callingCode: '+58',
  },
  {
    name: 'Vietnam',
    code: 'VN',
    callingCode: '+84',
  },
  {
    name: 'Yemen',
    code: 'YE',
    callingCode: '+967',
  },
  {
    name: 'Zambia',
    code: 'ZM',
    callingCode: '+260',
  },
  {
    name: 'Zimbabwe',
    code: 'ZW',
    callingCode: '+263',
  },
];

const gender = ['Male', 'Female'];





@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  showBasic: boolean = true;
  showPersonal: boolean = false;
  showAddressForm: boolean = false;

  showBasicDetails() {
    this.showBasic = true;
    this.showPersonal = false;
    this.showAddressForm = false;
  }

  showPersonalDetails() {
    this.showBasic = false;
    this.showPersonal = true;
    this.showAddressForm = false;
  }

  showAddress() {
    this.showBasic = false;
    this.showPersonal = false;
    this.showAddressForm = true;
  }

  createAccount!: FormGroup;
  selectedState: string = 'Select State';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createAccoutForm();
  }

  createAccoutForm() {
    this.createAccount = this.fb.group({
      username: [''],
      password: [''],
      confirmPassword: [''],
      language: ['Select Language'],
      securityQuestion: ['Security Questions'],
      securityAnswer: [''],
      firstName: [''],
      lastName: [''],
      occupations: [''],
      country: [''],
      dob: [''],
      email: [''],
      mobileNo: [''],
      gender: [''],
      maritalStatus:[''],
      nationality: [''],
      flat: [''],
      street: [''],
      locality: [''],
      pincode: [''],
      state: ['Select State'],
      city: [''],
    });

    this.createAccount.get('state')?.valueChanges.subscribe((value: string) => {
      this.selectedState = value;
    });
  }

  onCreateAccount() {
    console.log(this.createAccount.value);
    this.showAlert=!this.showAlert;
  }

  getStateKeys(): string[] {
    return Object.keys(this.indiaStates);
  }

  allLanguage: string[] = [
    'Hindi',
    'English',
    'Bengali',
    'Telugu',
    'Marathi',
    'Tamil',
    'Urdu',
    'Gujarati',
    'Kannada',
    'Odia (Oriya)',
    'Malayalam',
    'Punjabi',
    'Assamese',
    'Maithili',
    'Santali',
    'Kashmiri',
    'Nepali',
    'Konkani',
    'Sindhi',
    'Manipuri',
    'Dogri',
    'Bodo',
    'Sanskrit (Classical Language)',
  ];

  securityQuestion: string[] = [
    ' Security Question',
    ' What is your pet name?',
    'What was the name of your first school?',
    'Who was your Childhood hero?',
    'What is your favorite past-time?',
    'What is your all time favorite sports team?',
    'What is your fathers middle name?',
    'What make was your first car or bike?',
    'Where did you first meet your spouse?',
  ];

  occupations: string[] = [
    'GOVERNMENT',
    'PUBLIC',
    'PRIVATE',
    'PROFESSIONAL',
    'SELF EMPLOYED',
    'STUDENT',
    'OTHER',
  ];

  countries: string[] = countryList.map((country) => country.name);
  genders: string[] = gender;



  indiaStates: any = {
    'Select State': [],
    'Andhra Pradesh': [
      'Anantapur',
      'Chittoor',
      'East Godavari',
      'Guntur',
      'Krishna',
      'Kurnool',
      'Prakasam',
      'Sri Potti Sriramulu Nellore',
      'Srikakulam',
      'Visakhapatnam',
      'Vizianagaram',
      'West Godavari',
      'YSR Kadapa (Y.S.R. District)',
    ],
    'Arunachal Pradesh': [
      'Tawang',
      'West Kameng',
      'East Kameng',
      'Papum Pare',
      'Kurung Kumey',
      'Kra Daadi',
      'Lower Subansiri',
      'Upper Subansiri',
      'West Siang',
      'East Siang',
      'Siang',
      'Upper Siang',
      'Lower Siang',
      'Lower Dibang Valley',
      'Dibang Valley',
      'Anjaw',
      'Lohit',
      'Namsai',
      'Changlang',
      'Tirap',
      'Longding',
    ],
    Assam: [
      'Baksa',
      'Barpeta',
      'Biswanath',
      'Bongaigaon',
      'Cachar',
      'Charaideo',
      'Chirang',
      'Darrang',
      'Dhemaji',
      'Dhubri',
      'Dibrugarh',
      'Dima Hasao',
      'Goalpara',
      'Golaghat',
      'Hailakandi',
      'Hojai',
      'Jorhat',
      'Kamrup',
      'Kamrup Metropolitan',
      'Karbi Anglong',
      'Karimganj',
      'Kokrajhar',
      'Lakhimpur',
      'Majuli',
      'Morigaon',
      'Nagaon',
      'Nalbari',
      'Sivasagar',
      'Sonitpur',
      'South Salmara-Mankachar',
      'Tinsukia',
      'Udalguri',
      'West Karbi Anglong',
    ],
    Bihar: [
      'Araria',
      'Arwal',
      'Aurangabad',
      'Banka',
      'Begusarai',
      'Bhagalpur',
      'Bhojpur',
      'Buxar',
      'Darbhanga',
      'East Champaran (Motihari)',
      'Gaya',
      'Gopalganj',
      'Jamui',
      'Jehanabad',
      'Kaimur (Bhabua)',
      'Katihar',
      'Khagaria',
      'Kishanganj',
      'Lakhisarai',
      'Madhepura',
      'Madhubani',
      'Munger (Monghyr)',
      'Muzaffarpur',
      'Nalanda',
      'Nawada',
      'Patna',
      'Purnia (Purnea)',
      'Rohtas',
      'Saharsa',
      'Samastipur',
      'Saran',
      'Sheikhpura',
      'Sheohar',
      'Sitamarhi',
      'Siwan',
      'Supaul',
      'Vaishali',
      'West Champaran',
    ],
    Chhattisgarh: [
      'Balod',
      'Baloda Bazar',
      'Balrampur',
      'Bastar',
      'Bemetara',
      'Bijapur',
      'Bilaspur',
      'Dantewada (South Bastar)',
      'Dhamtari',
      'Durg',
      'Gariyaband',
      'Janjgir-Champa',
      'Jashpur',
      'Kabirdham (Kawardha)',
      'Kanker (North Bastar)',
      'Kondagaon',
      'Korba',
      'Koriya',
      'Mahasamund',
      'Mungeli',
      'Narayanpur',
      'Raigarh',
      'Raipur',
      'Rajnandgaon',
      'Sukma',
      'Surajpur',
      'Surguja',
    ],
    Goa: ['North Goa', 'South Goa'],
    Gujarat: [
      'Ahmedabad',
      'Amreli',
      'Anand',
      'Aravalli',
      'Banaskantha (Palanpur)',
      'Bharuch',
      'Bhavnagar',
      'Botad',
      'Chhota Udaipur',
      'Dahod',
      'Dang',
      'Devbhoomi Dwarka',
      'Gandhinagar',
      'Gir Somnath',
      'Jamnagar',
      'Junagadh',
      'Kachchh',
      'Kheda (Nadiad)',
      'Mahisagar',
      'Mehsana',
      'Morbi',
      'Narmada (Rajpipla)',
      'Navsari',
      'Panchmahal (Godhra)',
      'Patan',
      'Porbandar',
      'Rajkot',
      'Sabarkantha (Himmatnagar)',
      'Surat',
      'Surendranagar',
      'Tapi (Vyara)',
      'Vadodara',
      'Valsad',
    ],
    Haryana: [
      'Ambala',
      'Bhiwani',
      'Charkhi Dadri',
      'Faridabad',
      'Fatehabad',
      'Gurugram (Gurgaon)',
      'Hisar',
      'Jhajjar',
      'Jind',
      'Kaithal',
      'Karnal',
      'Kurukshetra',
      'Mahendragarh',
      'Nuh',
      'Palwal',
      'Panchkula',
      'Panipat',
      'Rewari',
      'Rohtak',
      'Sirsa',
      'Sonipat',
      'Yamunanagar',
    ],
    'Himachal Pradesh': [
      'Bilaspur',
      'Chamba',
      'Hamirpur',
      'Kangra',
      'Kinnaur',
      'Kullu',
      'Lahaul and Spiti',
      'Mandi',
      'Shimla',
      'Sirmaur',
      'Solan',
      'Una',
    ],
    Jharkhand: [
      'Bokaro',
      'Chatra',
      'Deoghar',
      'Dhanbad',
      'Dumka',
      'East Singhbhum (Jamshedpur)',
      'Garhwa',
      'Giridih',
      'Godda',
      'Gumla',
      'Hazaribagh',
      'Jamtara',
      'Khunti',
      'Koderma',
      'Latehar',
      'Lohardaga',
      'Pakur',
      'Palamu',
      'Ramgarh',
      'Ranchi',
      'Sahibganj',
      'Seraikela-Kharsawan',
      'Simdega',
      'West Singhbhum (Chaibasa)',
    ],
    Karnataka: [
      'Bagalkot',
      'Ballari (Bellary)',
      'Belagavi (Belgaum)',
      'Bengaluru (Bangalore) Rural',
      'Bengaluru (Bangalore) Urban',
      'Bidar',
      'Chamarajanagar',
      'Chikballapur',
      'Chikkamagaluru (Chikmagalur)',
      'Chitradurga',
      'Dakshina Kannada',
      'Davangere',
      'Dharwad',
      'Gadag',
      'Hassan',
      'Haveri',
      'Kalaburagi (Gulbarga)',
      'Kodagu',
      'Kolar',
      'Koppal',
      'Mandya',
      'Mysuru (Mysore)',
      'Raichur',
      'Ramanagara',
      'Shivamogga (Shimoga)',
      'Tumakuru (Tumkur)',
      'Udupi',
      'Uttara Kannada (Karwar)',
      'Vijayapura (Bijapur)',
      'Yadgir',
    ],
    Kerala: [
      'Alappuzha',
      'Ernakulam',
      'Idukki',
      'Kannur',
      'Kasaragod',
      'Kollam',
      'Kottayam',
      'Kozhikode',
      'Malappuram',
      'Palakkad',
      'Pathanamthitta',
      'Thiruvananthapuram',
      'Thrissur',
      'Wayanad',
    ],
    'Madhya Pradesh': [
      'Agar Malwa',
      'Alirajpur',
      'Anuppur',
      'Ashoknagar',
      'Balaghat',
      'Barwani',
      'Betul',
      'Bhind',
      'Bhopal',
      'Burhanpur',
      'Chhatarpur',
      'Chhindwara',
      'Damoh',
      'Datia',
      'Dewas',
      'Dhar',
      'Dindori',
      'Guna',
      'Gwalior',
      'Harda',
      'Hoshangabad',
      'Indore',
      'Jabalpur',
      'Jhabua',
      'Katni',
      'Khandwa (East Nimar)',
      'Khargone (West Nimar)',
      'Mandla',
      'Mandsaur',
      'Morena',
      'Narsinghpur',
      'Neemuch',
      'Panna',
      'Raisen',
      'Rajgarh',
      'Ratlam',
      'Rewa',
      'Sagar',
      'Satna',
      'Sehore',
      'Seoni',
      'Shahdol',
      'Shajapur',
      'Sheopur',
      'Shivpuri',
      'Sidhi',
      'Singrauli',
      'Tikamgarh',
      'Ujjain',
      'Umaria',
      'Vidisha',
    ],
    Maharashtra: [
      'Ahmednagar',
      'Akola',
      'Amravati',
      'Aurangabad',
      'Beed',
      'Bhandara',
      'Buldhana',
      'Chandrapur',
      'Dhule',
      'Gadchiroli',
      'Gondia',
      'Hingoli',
      'Jalgaon',
      'Jalna',
      'Kolhapur',
      'Latur',
      'Mumbai City',
      'Mumbai Suburban',
      'Nagpur',
      'Nanded',
      'Nandurbar',
      'Nashik',
      'Osmanabad',
      'Palghar',
      'Parbhani',
      'Pune',
      'Raigad',
      'Ratnagiri',
      'Sangli',
      'Satara',
      'Sindhudurg',
      'Solapur',
      'Thane',
      'Wardha',
      'Washim',
      'Yavatmal',
    ],
    Manipur: [
      'Bishnupur',
      'Chandel',
      'Churachandpur',
      'Imphal East',
      'Imphal West',
      'Jiribam',
      'Kakching',
      'Kamjong',
      'Kangpokpi',
      'Noney',
      'Pherzawl',
      'Senapati',
      'Tamenglong',
      'Tengnoupal',
      'Thoubal',
      'Ukhrul',
    ],
    Meghalaya: [
      'East Garo Hills',
      'East Jaintia Hills',
      'East Khasi Hills',
      'North Garo Hills',
      'Ri-Bhoi',
      'South Garo Hills',
      'South West Garo Hills',
      'South West Khasi Hills',
      'West Garo Hills',
      'West Jaintia Hills',
      'West Khasi Hills',
    ],
    Mizoram: [
      'Aizawl',
      'Champhai',
      'Hnahthial',
      'Khawzawl',
      'Kolasib',
      'Lawngtlai',
      'Lunglei',
      'Mamit',
      'Saiha',
      'Saitual',
      'Serchhip',
    ],
    Nagaland: [
      'Dimapur',
      'Kiphire',
      'Kohima',
      'Longleng',
      'Mokokchung',
      'Mon',
      'Peren',
      'Phek',
      'Tuensang',
      'Wokha',
      'Zunheboto',
    ],
    Odisha: [
      'Angul',
      'Balangir',
      'Balasore',
      'Bargarh',
      'Bhadrak',
      'Boudh',
      'Cuttack',
      'Deogarh',
      'Dhenkanal',
      'Gajapati',
      'Ganjam',
      'Jagatsinghpur',
      'Jajpur',
      'Jharsuguda',
      'Kalahandi',
      'Kandhamal',
      'Kendrapara',
      'Kendujhar (Keonjhar)',
      'Khordha',
      'Koraput',
      'Malkangiri',
      'Mayurbhanj',
      'Nabarangpur',
      'Nayagarh',
      'Nuapada',
      'Puri',
      'Rayagada',
      'Sambalpur',
      'Subarnapur (Sonepur)',
      'Sundargarh',
    ],
    Punjab: [
      'Amritsar',
      'Barnala',
      'Bathinda',
      'Faridkot',
      'Fatehgarh Sahib',
      'Fazilka',
      'Ferozepur',
      'Gurdaspur',
      'Hoshiarpur',
      'Jalandhar',
      'Kapurthala',
      'Ludhiana',
      'Mansa',
      'Moga',
      'Muktsar',
      'Pathankot',
      'Patiala',
      'Rupnagar',
      'Sahibzada Ajit Singh Nagar (Mohali)',
      'Sangrur',
      'Shahid Bhagat Singh Nagar (Nawanshahr)',
      'Sri Muktsar Sahib',
      'Tarn Taran',
    ],
    Rajasthan: [
      'Ajmer',
      'Alwar',
      'Banswara',
      'Baran',
      'Barmer',
      'Bharatpur',
      'Bhilwara',
      'Bikaner',
      'Bundi',
      'Chittorgarh',
      'Churu',
      'Dausa',
      'Dholpur',
      'Dungarpur',
      'Hanumangarh',
      'Jaipur',
      'Jaisalmer',
      'Jalore',
      'Jhalawar',
      'Jhunjhunu',
      'Jodhpur',
      'Karauli',
      'Kota',
      'Nagaur',
      'Pali',
      'Pratapgarh',
      'Rajsamand',
      'Sawai Madhopur',
      'Sikar',
      'Sirohi',
      'Sri Ganganagar',
      'Tonk',
      'Udaipur',
    ],
    Sikkim: ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'],
    'Tamil Nadu': [],
    Telangana: [
      'Adilabad',
      'Bhadradri Kothagudem',
      'Hyderabad',
      'Jagtial',
      'Jangaon',
      'Jayashankar Bhupalapally',
      'Jogulamba Gadwal',
      'Kamareddy',
      'Karimnagar',
      'Khammam',
      'Komaram Bheem Asifabad',
      'Mahabubabad',
      'Mahabubnagar',
      'Mancherial',
      'Medak',
      'Medchal–Malkajgiri',
      'Mulugu',
      'Nagarkurnool',
      'Nalgonda',
      'Narayanpet',
      'Nirmal',
      'Nizamabad',
      'Peddapalli',
      'Rajanna Sircilla',
      'Rangareddy',
      'Sangareddy',
      'Siddipet',
      'Suryapet',
      'Vikarabad',
      'Wanaparthy',
      'Warangal Rural',
      'Warangal Urban',
      'Yadadri Bhuvanagiri',
    ],
    Tripura: [
      'Dhalai',
      'Gomati',
      'Khowai',
      'North Tripura',
      'Sepahijala',
      'South Tripura',
      'Unakoti',
      'West Tripura',
    ],
    'Uttar Pradesh': [
      'Agra',
      'Aligarh',
      'Ambedkar Nagar',
      'Amethi (Chatrapati Sahuji Mahraj Nagar)',
      'Amroha (J.P. Nagar)',
      'Auraiya',
      'Ayodhya (Faizabad)',
      'Azamgarh',
      'Baghpat',
      'Bahraich',
      'Ballia',
      'Balrampur',
      'Banda',
      'Barabanki',
      'Bareilly',
      'Basti',
      'Bhadohi',
      'Bijnor',
      'Budaun',
      'Bulandshahr',
      'Chandauli',
      'Chitrakoot',
      'Deoria',
      'Etah',
      'Etawah',
      'Farrukhabad',
      'Fatehpur',
      'Firozabad',
      'Gautam Buddha Nagar',
      'Ghaziabad',
      'Ghazipur',
      'Gonda',
      'Gorakhpur',
      'Hamirpur',
      'Hapur (Panchsheel Nagar)',
      'Hardoi',
      'Hathras',
      'Jalaun',
      'Jaunpur',
      'Jhansi',
      'Kannauj',
      'Kanpur Dehat',
      'Kanpur Nagar',
      'Kasganj',
      'Kaushambi',
      'Kheri',
      'Kushinagar (Padrauna)',
      'Lakhimpur - Kheri',
      'Lalitpur',
      'Lucknow',
      'Maharajganj',
      'Mahoba',
      'Mainpuri',
      'Mathura',
      'Mau',
      'Meerut',
      'Mirzapur',
      'Moradabad',
      'Muzaffarnagar',
      'Pilibhit',
      'Pratapgarh',
      'Prayagraj (Allahabad)',
      'Raebareli',
      'Rampur',
      'Saharanpur',
      'Sambhal (Bhim Nagar)',
      'Sant Kabir Nagar',
      'Shahjahanpur',
      'Shamali (Prabuddh Nagar)',
      'Shravasti',
      'Siddharth Nagar',
      'Sitapur',
      'Sonbhadra',
      'Sultanpur',
      'Unnao',
      'Varanasi',
    ],
    Uttarakhand: [
      'Almora',
      'Bageshwar',
      'Chamoli',
      'Champawat',
      'Dehradun',
      'Haridwar',
      'Nainital',
      'Pauri Garhwal',
      'Pithoragarh',
      'Rudraprayag',
      'Tehri Garhwal',
      'Udham Singh Nagar',
      'Uttarkashi',
    ],
    'West Bengal': [
      'Alipurduar',
      'Bankura',
      'Birbhum',
      'Cooch Behar',
      'Dakshin Dinajpur (South Dinajpur)',
      'Darjeeling',
      'Hooghly',
      'Howrah',
      'Jalpaiguri',
      'Jhargram',
      'Kalimpong',
      'Kolkata',
      'Malda',
      'Murshidabad',
      'Nadia',
      'North 24 Parganas',
      'Paschim Medinipur (West Medinipur)',
      'Paschim Bardhaman (West Bardhaman)',
      'Purba Bardhaman (East Bardhaman)',
      'Purba Medinipur (East Medinipur)',
      'Purulia',
      'South 24 Parganas',
      'Uttar Dinajpur (North Dinajpur)',
    ],
    'Andaman and Nicobar Islands': [
      'Nicobar',
      'North and Middle Andaman',
      'South Andaman',
    ],
    Chandigarh: ['Chandigarh'],
    'Dadra and Nagar Haveli and Daman and Diu': [
      'Dadra and Nagar Haveli',
      'Daman',
      'Diu',
    ],
    Delhi: [
      'Central Delhi',
      'East Delhi',
      'New Delhi',
      'North Delhi',
      'North East Delhi',
      'North West Delhi',
      'Shahdara',
      'South Delhi',
      'South East Delhi',
      'South West Delhi',
      'West Delhi',
    ],
    Lakshadweep: ['Lakshadweep'],
    Puducherry: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'],
  };

  showAlert=true;

  hideAlert(){
    
    this.showAlert=!this.showAlert;
    setTimeout(() => {
      this.showAlert=this.showAlert;
    },3000)
  }
}
