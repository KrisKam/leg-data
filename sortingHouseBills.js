let bills = [{
  //   "bill": "HB18-1001",
  //   "title": "FAMLI Family Medical Leave Insurance Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1001",
  //   "description": "Concerning the creation of a family and medical leave insurance program.",
  //   "last_action": "04/30/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. F. Winter", "Rep. M. Gray", "Sen. K. Donovan", "Sen. R. Fields"],
  //   "subject": ["Labor & Employment"]
  // }, {
  //   "bill": "HB18-1002",
  //   "title": "Rural School District Teaching Fellowship Programs",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1002",
  //   "description": "Concerning teaching fellowship programs to assist rural school districts in hiring high-quality teachers, and, in connection therewith, creating the \"Rural Colorado Grow Your Own Educator Act\" and making an appropriation.",
  //   "last_action": "05/25/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Rep. B. Rankin", "Sen. D. Coram", "Sen. N. Todd"],
  //   "subject": ["Higher Education"]
  // }, {
  //   "bill": "HB18-1003",
  //   "title": "Opioid Misuse Prevention",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1003",
  //   "description": "Concerning measures to prevent opioid misuse in Colorado, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/21/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Pettersen", "Sen. K. Priola", "Sen. C. Jahn"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1004",
  //   "title": "Continue Child Care Contribution Tax Credit",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1004",
  //   "description": "Concerning the continuation of the income tax credit for a qualifying contribution to promote child care in the state.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Coleman", "Rep. J. Wilson", "Sen. J. Tate", "Sen. J. Kefalas"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1005",
  //   "title": "Notice To Students Of Postsecondary Courses",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1005",
  //   "description": "Concerning notice of postsecondary course enrollment options available to high school students.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Pettersen", "Rep. J. Becker", "Sen. K. Priola"],
  //   "subject": ["Education & School Finance (Pre & K-12)", "Higher Education"]
  // }, {
  //   "bill": "HB18-1006",
  //   "title": "Infant Newborn Screening",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1006",
  //   "description": "Concerning modifications to the newborn screening program administered by the department of public health and environment, and, in connection therewith, making an appropriation.",
  //   "last_action": "06/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Rep. L. Liston", "Sen. B. Gardner", "Sen. D. Moreno"],
  //   "subject": ["Health Care & Health Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1007",
  //   "title": "Substance Use Disorder Payment And Coverage",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1007",
  //   "description": "Concerning payment issues related to substance use disorders.",
  //   "last_action": "05/21/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Kennedy", "Rep. J. Singer", "Sen. K. Lambert", "Sen. C. Jahn"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1008",
  //   "title": "Mussel-free Colorado Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1008",
  //   "description": "Concerning the financing of the division of parks and wildlife's aquatic nuisance species program, and, in connection therewith, creating an aquatic nuisance species stamp for the operation of motorboats and sailboats in waters of the state, increasing penalties related to the introduction of aquatic nuisance species into the waters of the state, and combining two separate funds related to the aquatic nuisance species program into one fund.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Esgar", "Rep. J. Arndt", "Sen. K. Donovan", "Sen. D. Coram"],
  //   "subject": ["Natural Resources & Environment", "Water"]
  // }, {
  //   "bill": "HB18-1009",
  //   "title": "Diabetes Drug Pricing Transparency Act 2018",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1009",
  //   "description": "Concerning transparency in diabetes prescription drugs pricing, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Roberts", "Sen. K. Donovan"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1010",
  //   "title": "Department Of Human Services Report Data And Add MembersTo Working Group",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1010",
  //   "description": "Concerning youth committed to the department of human services, and, in connection therewith, requiring the department to report certain data and adding members to the youth restraint and seclusion working group.",
  //   "last_action": "03/7/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lee", "Rep. J. Wilson", "Sen. D. Coram"],
  //   "subject": ["Children & Domestic Matters", "Human Services"]
  
  // }, {
  //   "bill": "HB18-1011",
  //   "title": "Marijuana Business Allow Publicly Traded Owners",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1011",
  //   "description": "Concerning measures to allow greater investment flexibility in marijuana businesses, and, in connection therewith, making an appropriation.",
  //   "last_action": "06/5/2018 | Governor Vetoed",
  //   "sponsors": ["Rep. D. Pabon", "Rep. K. Van Winkle", "Sen. T. Neville", "Sen. C. Jahn"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1012",
  //   "title": "Vision Care Plans Carriers Eye Care Providers",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1012",
  //   "description": "Concerning vision care plans for eye care services.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Becker", "Rep. S. Lontine", "Sen. K. Lundberg", "Sen. I. Aguilar"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1013",
  //   "title": "Income Tax Credit For Endowment Contributions",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1013",
  //   "description": "Concerning an income tax credit for charitable contributions to an eligible endowment fund.",
  //   "last_action": "05/10/2018 | House Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. A. Garnett", "Sen. K. Priola"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1014",
  //   "title": "Social Studies Assessment In High Schools",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1014",
  //   "description": "Concerning removing the requirement that the social studies assessment be administered in high school.",
  //   "last_action": "02/28/2018 | House Committee on Education Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Buck"],
  //   "subject": []
  // }, {
  //   "bill": "HB18-1015",
  //   "title": "Repeal Ammunition Magazine Prohibition",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1015",
  //   "description": "Concerning the repeal of certain provisions concerning ammunition magazines.",
  //   "last_action": "02/21/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Humphrey", "Rep. L. Saine", "Sen. O. Hill"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1016",
  //   "title": "Honor The Service Of The Seabees",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1016",
  //   "description": "Concerning the creation of a Seabees license plate to honor the Seabees tradition, and, in connection therewith, making an appropriation.",
  //   "last_action": "03/20/2018 | Senate Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Danielson", "Sen. R. Fields"],
  //   "subject": ["Military & Veterans", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1017",
  //   "title": "Psychology Interjurisdictional Compact",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1017",
  //   "description": "Concerning the adoption of an interstate compact to allow a person authorized to practice psychology in a compact state in which the person is not licensed, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/12/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Michaelson Jenet", "Sen. B. Gardner", "Sen. S. Fenberg"],
  //   "subject": ["Health Care & Health Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1018",
  //   "title": "Human Trafficking Commercial Driver's License",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1018",
  //   "description": "Concerning a requirement that education to prevent human trafficking be included in the training to obtain a commercial driver's license.",
  //   "last_action": "04/12/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Carver", "Rep. D. Jackson", "Sen. R. Zenzinger", "Sen. J. Cooke"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1019",
  //   "title": "Kindergarten Through Twelfth Grade Accreditation Weighted Factors",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1019",
  //   "description": "Concerning criteria applied in determining performance ratings for entities in the elementary and secondary public education system, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Foote", "Sen. K. Priola"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1020",
  //   "title": "Civil Forfeiture Reforms",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1020",
  //   "description": "Concerning civil forfeiture reform, and, in connection therewith, changing the entity required to report on forfeitures, expanding the scope of the forfeitures to be reported, establishing grant programs, changing the disbursement of net forfeiture proceeds, and making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Herod", "Sen. D. Kagan", "Sen. T. Neville", "Sen. B. Gardner"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1021",
  //   "title": "Task Force For Youth Experiencing Homelessness",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1021",
  //   "description": "Concerning addressing the issue of youth who are experiencing homelessness in Colorado, and, in connection therewith, making an appropriation.",
  //   "last_action": "03/21/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. E. Hooton", "Rep. L. Landgraf", "Sen. J. Kefalas"],
  //   "subject": ["Children & Domestic Matters"]
  // }, {
  //   "bill": "HB18-1022",
  //   "title": "DOR Department Of Revenue Issue Sales Tax Request For Information",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1022",
  //   "description": "Concerning a requirement that the department of revenue issue a request for information for an electronic sales and use tax simplification system.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Sias", "Rep. T. Kraft-Tharp", "Sen. C. Jahn", "Sen. T. Neville"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1023",
  //   "title": "Relocate Title 12 Marijuana To New Title 44",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1023",
  //   "description": "Concerning the nonsubstantive relocation of laws related to legalized marijuana from title 12, Colorado Revised Statutes, as part of the organizational recodification of title 12.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Herod", "Sen. B. Gardner"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1024",
  //   "title": "Relocate Title 12 Racing to New Title 44",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1024",
  //   "description": "Concerning the nonsubstantive relocation of laws related to the regulation of racing from title 12, Colorado Revised Statutes, to a new title 44 as part of the organizational recodification of title 12.",
  //   "last_action": "03/7/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lee", "Sen. D. Kagan"],
  //   "subject": ["State Government", "State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1025",
  //   "title": "Relocate Title 12 Liquor Laws To Title 44",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1025",
  //   "description": "Concerning the nonsubstantive relocation of laws related to the regulation of alcohol beverages from title 12, Colorado Revised Statutes, to a new title 44 as part of the organizational recodification of title 12, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Herod", "Sen. J. Cooke", "Sen. B. Gardner"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1026",
  //   "title": "Relocate Title 12 Liquor Division Fund To Title 44",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1026",
  //   "description": "Concerning the nonsubstantive relocation of the law creating the liquor enforcement division and state licensing authority cash fund from title 24, Colorado Revised Statutes, to a new title 44 as part of the organizational recodification of title 12.",
  //   "last_action": "03/7/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Herod", "Sen. J. Cooke", "Sen. B. Gardner"],
  //   "subject": ["Courts & Judicial", "Liquor, Tobacco, & Marijuana", "State Government"]
  // }, {
  //   "bill": "HB18-1027",
  //   "title": "Relocate Title 24 Lottery To New Title 44",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1027",
  //   "description": "Concerning the nonsubstantive relocation of laws related to the regulation of the lottery from title 24, Colorado Revised Statutes, to a new title 44 as part of the organizational recodification of title 12.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Wist", "Sen. D. Kagan"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1028",
  //   "title": "Attorney General Deceptive Practice Court Order",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1028",
  //   "description": "Concerning clarification of the standard required for applications for a court order to require compliance with investigations of deceptive trade practices.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. C. Wist", "Sen. L. Court", "Sen. J. Tate"],
  //   "subject": ["Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1029",
  //   "title": "Lowering Mandatory Parole From 5 Years To 3 Years",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1029",
  //   "description": "Concerning lowering the period of mandatory parole from five years to three years for certain felony offenses.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Weissman", "Sen. K. Lundberg"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1030",
  //   "title": "Prohibit Discrimination Labor Union Participation",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1030",
  //   "description": "Concerning the prohibition of discrimination against employees based on labor union participation.",
  //   "last_action": "01/24/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Everett", "Sen. T. Neville"],
  //   "subject": ["Labor & Employment"]
  // }, {
  //   "bill": "HB18-1031",
  //   "title": "Employer Entry FPPA Fire And Police Pension Association Defined Benefit System",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1031",
  //   "description": "Concerning employer entry into the fire and police pension association defined benefit system.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Melton", "Rep. K. Ransom", "Sen. J. Cooke", "Sen. M. Jones"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1032",
  //   "title": "Access Medical Records State Emergency Medical Services Patient Care Database",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1032",
  //   "description": "Concerning access to medical records from the department of public health and environment's EMS agency patient care database by health information organization networks.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Kennedy", "Rep. D. Thurlow", "Sen. R. Fields", "Sen. J. Tate"],
  //   "subject": ["Public Health"]
  // }, {
  //   "bill": "HB18-1033",
  //   "title": "Employee Leave To Participate In Elections",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1033",
  //   "description": "Concerning the time in which employees are entitled to take leave to participate in elections.",
  //   "last_action": "02/28/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. M. Weissman", "Sen. D. Coram"],
  //   "subject": ["Elections & Redistricting"]
  // }, {
  //   "bill": "HB18-1034",
  //   "title": "Career And Technical Education Capital Grant Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1034",
  //   "description": "Concerning creation of a grant program for capital costs relating to career and technical education.",
  //   "last_action": "05/7/2018 | House Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Covarrubias", "Rep. H. McKean", "Sen. K. Priola"],
  //   "subject": ["Higher Education"]
  // }, {
  //   "bill": "HB18-1035",
  //   "title": "Increase General Fund Reserve",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1035",
  //   "description": "Concerning an increase in the amount of the general fund reserve.",
  //   "last_action": "01/24/2018 | House Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Lebsock"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1036",
  //   "title": "Reduce Business Personal Property Taxes",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1036",
  //   "description": "Concerning the reduction of business personal property taxes.",
  //   "last_action": "02/1/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Leonard", "Sen. T. Neville"],
  //   "subject": ["Local Government"]
  // }, {
  //   "bill": "HB18-1037",
  //   "title": "Concealed Handguns On School Grounds",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1037",
  //   "description": "Concerning allowing concealed handgun permit holders to carry concealed handguns on school grounds.",
  //   "last_action": "02/21/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Neville", "Sen. T. Neville"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1038",
  //   "title": "Land Surveyors Continuing Education Requirement",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1038",
  //   "description": "Concerning establishing a continuing education requirement for professional land surveyors.",
  //   "last_action": "02/28/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Valdez", "Sen. D. Coram", "Sen. K. Donovan"],
  //   "subject": ["Business & Economic Development"]
  // }, {
  //   "bill": "HB18-1039",
  //   "title": "Change Date Of Regular Special District Elections",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1039",
  //   "description": "Concerning changing regular special district elections to May of each odd-numbered year, and, in connection therewith, adjusting the length of terms served by directors elected in 2020 and 2022 in order to implement the new election schedule.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. K. Ransom", "Sen. B. Gardner"],
  //   "subject": ["Elections & Redistricting"]
  // }, {
  //   "bill": "HB18-1040",
  //   "title": "Inmate Treatment Incentive Plans",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1040",
  //   "description": "Concerning incentives for provision of sex offender services in the department of corrections.",
  //   "last_action": "05/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. A. Benavidez", "Sen. R. Fields"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1041",
  //   "title": "Crime Of Cruelty To Certified Police Working Horse",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1041",
  //   "description": "Concerning adding certified police working horses to the crime of cruelty to a service animal or a certified police working dog.",
  //   "last_action": "03/7/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Catlin", "Sen. D. Coram"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1042",
  //   "title": "Private Interstate Commercial Vehicle Registration",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1042",
  //   "description": "Concerning the creation of a program to authorize private providers to register commercial vehicles as Class A personal property, and, in connection therewith, making and reducing an appropriation.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Becker", "Rep. J. Ginal", "Sen. R. Scott", "Sen. R. Zenzinger"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1043",
  //   "title": "Beef Country Of Origin Recognition System",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1043",
  //   "description": "Concerning a requirement that a retailer indicate the country of origin of beef sold to the public.",
  //   "last_action": "01/29/2018 | House Committee on Agriculture, Livestock, & Natural Resources Postpone Indefinitely",
  //   "sponsors": ["Rep. K. Lewis", "Sen. V. Marble"],
  //   "subject": ["Agriculture", "Public Health"]
  // }, {
  //   "bill": "HB18-1044",
  //   "title": "Colorado Children's Trust Fund Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1044",
  //   "description": "Concerning the \"Colorado Children's Trust Fund Act\".",
  //   "last_action": "02/26/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Sen. K. Priola"],
  //   "subject": ["Children & Domestic Matters", "Human Services", "Public Health"]
  // }, {
  //   "bill": "HB18-1045",
  //   "title": "Dental Hygienist Apply Silver Diamine Fluoride",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1045",
  //   "description": "Concerning the application of silver diamine fluoride to dental patients.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Singer", "Sen. J. Tate"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1046",
  //   "title": "New Birth Certificate To Reflect Gender Change",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1046",
  //   "description": "Concerning the issuance of a new birth certificate with a gender designation that differs from the gender designated on the person's original birth certificate.",
  //   "last_action": "03/28/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Esgar", "Sen. D. Moreno"],
  //   "subject": ["Public Health"]
  // }, {
  //   "bill": "HB18-1047",
  //   "title": "Fair Campaign Practices Act Technical Changes",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1047",
  //   "description": "Concerning technical modifications to the \"Fair Campaign Practices Act\" to facilitate its administration.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. S. Lontine", "Sen. B. Gardner"],
  //   "subject": ["Elections & Redistricting"]
  // }, {
  //   "bill": "HB18-1048",
  //   "title": "Fort Lewis College Spending Hesperus Account",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1048",
  //   "description": "Concerning the expenditure of money from the Hesperus account by the board of trustees of Fort Lewis college.",
  //   "last_action": "03/7/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. McLachlan", "Sen. D. Coram"],
  //   "subject": ["Higher Education"]
  // }, {
  //   "bill": "HB18-1049",
  //   "title": "DHS Department of Human Services Authority To Lease Grand Junction Regional Center",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1049",
  //   "description": "Concerning the department of human services' authority to continue to lease portions of the Grand Junction regional center campus to third-party behavioral health providers.",
  //   "last_action": "04/12/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Thurlow", "Sen. R. Scott"],
  //   "subject": ["Capital Construction", "Human Services"]
  // }, {
  //   "bill": "HB18-1050",
  //   "title": "Competency To Proceed Juvenile Justice System",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1050",
  //   "description": "Concerning competency to proceed for juveniles involved in the juvenile justice system.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Singer", "Sen. R. Fields"],
  //   "subject": ["Children & Domestic Matters", "Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1051",
  //   "title": "Statutory Provisions Extinguish Unattended Fires",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1051",
  //   "description": "Concerning statutory provisions enacted to promote the extinguishment of unattended fires.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Rep. T. Carver", "Sen. D. Coram", "Sen. M. Merrifield"],
  //   "subject": ["Local Government"]
  // }, {
  //   "bill": "HB18-1052",
  //   "title": "Exception To 2-year Higher Education Service Areas",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1052",
  //   "description": "Concerning local education providers' receipt of concurrent enrollment courses from a two-year institution of higher education outside of the institution's approved service area when the institution approved to serve the local education provider declines to provide concurrent enrollment courses.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lundeen", "Rep. J. Bridges", "Sen. N. Todd"],
  //   "subject": ["Higher Education"]
  // }, {
  //   "bill": "HB18-1053",
  //   "title": "Reclaimed Water Use For Marijuana Cultivation",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1053",
  //   "description": "Concerning the allowable uses of reclaimed domestic wastewater, and, in connection therewith, allowing reclaimed domestic wastewater to be used for marijuana cultivation.",
  //   "last_action": "05/2/2018 | Senate Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Arndt", "Rep. C. Hansen", "Sen. K. Donovan"],
  //   "subject": ["Public Health", "Water"]
  // }, {
  //   "bill": "HB18-1054",
  //   "title": "Affordable Housing Plastic Shopping Bag Tax",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1054",
  //   "description": "Concerning an increase in funding for affordable housing through a tax on plastic shopping bags.",
  //   "last_action": "01/31/2018 | House Committee on Local Government Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Rosenthal", "Sen. L. Court"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1055",
  //   "title": "Increase Surcharge For Court Security Cash Fund",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1055",
  //   "description": "Concerning increasing a certain surcharge on court fees, and, in connection therewith, awarding the amount of the increase to each court that collects a fee upon which the surcharge is assessed.",
  //   "last_action": "01/23/2018 | House Committee on Judiciary Postpone Indefinitely",
  //   "sponsors": ["Rep. A. Benavidez"],
  //   "subject": ["Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1056",
  //   "title": "FPPA Fire And Police Pension Association Statewide Standard Health History Form",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1056",
  //   "description": "Concerning the statewide standard health history form that members of the fire and police pension association complete when commencing employment.",
  //   "last_action": "04/12/2018 | Governor Signed",
  //   "sponsors": ["Rep. K. Van Winkle", "Rep. D. Williams", "Sen. J. Cooke"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1057",
  //   "title": "Disclosure Of Information For Asset Recovery",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1057",
  //   "description": "Concerning the collection of debts, and, in connection therewith, allowing collection agents to add certain expenses to amounts due for collection.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. H. McKean", "Sen. D. Coram"],
  //   "subject": ["Courts & Judicial", "Labor & Employment"]
  // }, {
  //   "bill": "HB18-1058",
  //   "title": "Financial Assistance For County Jails And Courts",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1058",
  //   "description": "Concerning the provision of financial assistance to counties for county facilities.",
  //   "last_action": "03/8/2018 | House Committee on Judiciary Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Beckman", "Sen. D. Coram"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "State Government"]
  // }, {
  //   "bill": "HB18-1059",
  //   "title": "Require 911 Call",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1059",
  //   "description": "Concerning a failure to summon emergency assistance.",
  //   "last_action": "02/6/2018 | House Committee on Judiciary Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Wilson"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1060",
  //   "title": "Income Tax Deduction For Military Retirement Benefits",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1060",
  //   "description": "Concerning a state income tax deduction for military retirement benefits for an individual who is under fifty-five years of age.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Danielson", "Rep. L. Landgraf", "Sen. L. Crowder", "Sen. A. Williams"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1061",
  //   "title": "No Encryption Of Dispatch Radio Communications",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1061",
  //   "description": "Concerning dispatch radio communications by government entities.",
  //   "last_action": "01/18/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. K. Van Winkle"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Local Government", "State Government"]
  // }, {
  //   "bill": "HB18-1062",
  //   "title": "Sales Tax On Retail Marijuana",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1062",
  //   "description": "Concerning the sales tax imposed on sales of retail marijuana, and, in connection therewith, reducing the retail marijuana sales tax rate by two and nine-tenths percent and repealing the general state sales tax exemption for sales of retail marijuana.",
  //   "last_action": "02/7/2018 | House Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Lebsock"],
  //   "subject": ["Fiscal Policy & Taxes", "Gaming, Lottery, & Racing"]
  // }, {
  //   "bill": "HB18-1063",
  //   "title": "Consumer Control Of Consumer Credit Information",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1063",
  //   "description": "Concerning a consumer's right to control the information contained in the file that a consumer reporting agency has on the consumer.",
  //   "last_action": "02/14/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Williams"],
  //   "subject": ["Financial Services & Commerce"]
  // }, {
  //   "bill": "HB18-1064",
  //   "title": "Training Program Prevention Child Sexual Abuse",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1064",
  //   "description": "Concerning a training program to prevent child sexual abuse for persons who work with young children in some capacity as part of their employment, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/24/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Michaelson Jenet", "Sen. D. Coram", "Sen. R. Fields"],
  //   "subject": ["Children & Domestic Matters"]
  // }, {
  //   "bill": "HB18-1065",
  //   "title": "DHS Department of Human Services Employee Discipline Harm To Vulnerable Persons",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1065",
  //   "description": "Concerning discipline of a department of human services employee when the employee is found to have mistreated a vulnerable person.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. S. Beckman", "Rep. J. Buckner", "Sen. K. Lambert"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1066",
  //   "title": "Clarify Sexually Exploitative Material Discovery",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1066",
  //   "description": "Concerning clarifying that the law enforcement and defense counsel exemption for sexual exploitation of a child crime does not change the discovery procedures for sexually exploitative material.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. Y. Willett", "Rep. M. Foote", "Sen. J. Cooke"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1067",
  //   "title": "Right To Rest Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1067",
  //   "description": "Concerning the creation of the \"Colorado Right to Rest Act\".",
  //   "last_action": "03/14/2018 | House Committee on Local Government Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Melton", "Rep. J. Salazar"],
  //   "subject": ["Civil Law", "Crimes, Corrections, & Enforcement", "Housing", "Local Government"]
  // }, {
  //   "bill": "HB18-1068",
  //   "title": "Eliminate Registered In Naturopathic Doctor Title",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1068",
  //   "description": "Concerning the elimination of \"registered\" in the title of a naturopathic doctor.",
  //   "last_action": "02/26/2018 | Senate Committee on Business, Labor, & Technology Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Ginal", "Rep. L. Landgraf", "Sen. L. Crowder", "Sen. D. Coram"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1069",
  //   "title": "Reclaimed Water Use For Toilet Flushing",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1069",
  //   "description": "Concerning the allowable uses of reclaimed domestic wastewater, and, in connection therewith, allowing reclaimed domestic wastewater to be used for toilet flushing and making an appropriation.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Arndt", "Rep. D. Thurlow", "Sen. D. Coram"],
  //   "subject": ["Public Health", "Water"]
  // }, {
  //   "bill": "HB18-1070",
  //   "title": "Additional Public School Capital Construction Funding",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1070",
  //   "description": "Concerning an increase in the amount of financial assistance that can be provided for public school capital construction under the \"Building Excellent Schools Today Act\", and, in connection therewith, increasing the amount of retail marijuana excise tax revenue that is credited to the public school capital construction assistance fund and making an appropriation.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Young", "Rep. C. Wist", "Sen. R. Scott", "Sen. R. Zenzinger"],
  //   "subject": ["Capital Construction", "Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1071",
  //   "title": "Regulate Oil Gas Operations Protect Public Safety",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1071",
  //   "description": "Concerning the regulation of oil and gas operations in a manner consistent with the protection of public safety.",
  //   "last_action": "03/7/2018 | Senate Committee on Agriculture, Natural Resources, & Energy Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Salazar", "Sen. D. Moreno"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1072",
  //   "title": "Red Light Camera Repeal",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1072",
  //   "description": "Concerning the elimination of the use of automated vehicle identification systems for traffic law enforcement.",
  //   "last_action": "02/14/2018 | House Committee on Transportation & Energy Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Humphrey", "Sen. T. Neville"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1073",
  //   "title": "Water District Ability Contract Water Assets",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1073",
  //   "description": "Concerning water districts' ability to enter into contracts regarding their water-related assets.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Gray", "Sen. B. Gardner"],
  //   "subject": ["Water"]
  // }, {
  //   "bill": "HB18-1074",
  //   "title": "Deadly Force Against Intruder At A Business",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1074",
  //   "description": "Concerning the use of deadly physical force against a person who has made an illegal entry into a place of business.",
  //   "last_action": "02/21/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Everett", "Sen. V. Marble"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1075",
  //   "title": "Enactment of CRS 2017",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1075",
  //   "description": "Concerning the enactment of Colorado Revised Statutes 2017 as the positive and statutory law of the state of Colorado.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lee", "Rep. L. Herod", "Sen. D. Kagan", "Sen. J. Cooke"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1076",
  //   "title": "Peace Officers Standards and Training Board Revoke Certification For Untruthful Statement",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1076",
  //   "description": "Concerning the P.O.S.T. board revoking the certification of a peace officer who is found to have made an untruthful statement, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/9/2018 | Senate Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Salazar", "Sen. D. Moreno", "Sen. D. Coram"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1077",
  //   "title": "Penalty For Burglary Of Firearms",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1077",
  //   "description": "Concerning the penalty for a person who commits burglary to acquire firearms, and, in connection therewith, making an appropriation.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Liston", "Rep. D. Valdez", "Sen. L. Garcia", "Sen. R. Scott"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1078",
  //   "title": "Court Programs For Veterans",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1078",
  //   "description": "Concerning court programs for defendants who have served in the armed forces.",
  //   "last_action": "04/12/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Landgraf", "Rep. T. Exum", "Sen. B. Gardner"],
  //   "subject": ["Courts & Judicial", "Military & Veterans"]
  // }, {
  //   "bill": "HB18-1079",
  //   "title": "Recommend Use Of State's Long-term Works Reserve",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1079",
  //   "description": "Concerning a requirement that the works allocation committee prepare annual recommendations for the use of the Colorado long-term works reserve.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. S. Beckman", "Sen. L. Crowder"],
  //   "subject": ["Human Services", "Local Government"]
  // }, {
  //   "bill": "HB18-1080",
  //   "title": "Climate Leadership Awards Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1080",
  //   "description": "Concerning development of a Colorado climate leadership awards program.",
  //   "last_action": "02/7/2018 | House Committee on Transportation & Energy Postpone Indefinitely",
  //   "sponsors": ["Rep. E. Hooton"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1081",
  //   "title": "State Court Administrator Reminder Call Center",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1081",
  //   "description": "Concerning requiring the state court administrator to administer a division to remind criminal defendants to appear in court as scheduled, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. A. Benavidez", "Rep. P. Lee", "Sen. J. Cooke"],
  //   "subject": ["Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1082",
  //   "title": "A Woman's Right To Accurate Health Care Information",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1082",
  //   "description": "Concerning the creation of the \"Women's Reproductive Information Guarantee for Health and Transparency (RIGHT) Act\".",
  //   "last_action": "02/22/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. L. Saine", "Sen. V. Marble"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1083",
  //   "title": "On-demand Air Carriers Sales And Use Tax Exemption",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1083",
  //   "description": "Concerning a sales and use tax exemption for aircraft to be used by on-demand air carriers.",
  //   "last_action": "06/5/2018 | Governor Vetoed",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. L. Sias", "Sen. J. Tate", "Sen. A. Williams"],
  //   "subject": ["Local Government", "State Government"]
  // }, {
  //   "bill": "HB18-1084",
  //   "title": "County Lodging Tax Revenue Allowable Uses",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1084",
  //   "description": "Concerning the expansion of the allowable uses of county lodging tax revenue.",
  //   "last_action": "02/14/2018 | House Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Thurlow", "Rep. M. Hamner", "Sen. D. Coram"],
  //   "subject": ["Local Government"]
  // }, {
  //   "bill": "HB18-1085",
  //   "title": "Health Effects Industrial Wind Turbines",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1085",
  //   "description": "Concerning research on the health effects of industrial wind energy turbines.",
  //   "last_action": "02/8/2018 | House Committee on Transportation & Energy Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Lundeen"],
  //   "subject": ["Public Health"]
  // }, {
  //   "bill": "HB18-1086",
  //   "title": "Community College Bachelor Science Degree Nursing ",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1086",
  //   "description": "Concerning allowing community colleges to offer a bachelor of science degree in nursing.",
  //   "last_action": "03/24/2018 | Governor Became Law",
  //   "sponsors": ["Rep. J. Buckner", "Rep. P. Lundeen", "Sen. T. Neville", "Sen. I. Aguilar"],
  //   "subject": ["Higher Education"]
  // }, {
  //   "bill": "HB18-1087",
  //   "title": "Colorado Department Of Public Safety Authority To Repeal Rules",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1087",
  //   "description": "Concerning department of public safety authority to repeal rules relating to defunct boards.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Thurlow", "Sen. D. Kagan", "Sen. D. Coram"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1088",
  //   "title": "Funding For Full-day Kindergarten",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1088",
  //   "description": "Concerning increasing the supplemental kindergarten enrollment for purposes of calculating public school finance.",
  //   "last_action": "05/7/2018 | House Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Wilson"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1089",
  //   "title": "No Monetary Conditions Of Bond For Misdemeanors",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1089",
  //   "description": "Concerning reform of pretrial criminal procedures, and, in connection therewith, prohibiting the use of monetary bonding except for certain defendants and requiring courts to conduct timely hearings to reconsider monetary conditions of bond under certain circumstances.",
  //   "last_action": "04/16/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. A. Benavidez", "Sen. R. Fields"],
  //   "subject": ["Courts & Judicial", "Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1090",
  //   "title": "Credit Security Freeze For Minors And At-risk Adults",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1090",
  //   "description": "Concerning the placement of a security freeze by a consumer reporting agency on the consumer report of a consumer who is under the charge of a guardian.",
  //   "last_action": "02/7/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. C. Duran", "Rep. K. Ransom"],
  //   "subject": ["Financial Services & Commerce"]
  // }, {
  //   "bill": "HB18-1091",
  //   "title": "Dementia Diseases And Related Disabilities",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1091",
  //   "description": "Concerning dementia diseases, and, in connection therewith, updating statutory references to dementia diseases and related disabilities.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. S. Beckman", "Rep. J. Ginal", "Sen. J. Smallwood", "Sen. N. Todd"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1092",
  //   "title": "Marijuana Delivery Pilot Project",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1092",
  //   "description": "Concerning a pilot program for marijuana delivery, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/18/2018 | Senate Committee on Judiciary Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Melton", "Rep. J. Singer", "Sen. T. Neville"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1093",
  //   "title": "Reclaimed Water Use For Edible Crops",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1093",
  //   "description": "Concerning the allowable uses of reclaimed domestic wastewater, and, in connection therewith, allowing reclaimed domestic wastewater to be used for food crops and making an appropriation.",
  //   "last_action": "04/28/2018 | Governor Became Law",
  //   "sponsors": ["Rep. J. Arndt", "Sen. D. Coram"],
  //   "subject": ["Public Health", "Water"]
  // }, {
  //   "bill": "HB18-1094",
  //   "title": "Children And Youth Mental Health Treatment Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1094",
  //   "description": "Concerning the reauthorization of the \"Child Mental Health Treatment Act\", and, in connection therewith, making an appropriation.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Herod", "Rep. C. Wist", "Sen. B. Martinez Humenik", "Sen. D. Moreno"],
  //   "subject": ["Children & Domestic Matters", "Health Care & Health Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1095",
  //   "title": "Educator License Requirements Military Spouses",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1095",
  //   "description": "Concerning educator licenses issued to military spouses.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Carver", "Rep. J. Arndt", "Sen. B. Gardner", "Sen. N. Todd"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1096",
  //   "title": "Special Event Permit Alcohol Beverages",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1096",
  //   "description": "Concerning the eligibility of certain entities to apply for a special event permit to sell alcohol beverages.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Gray", "Sen. K. Priola"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1097",
  //   "title": "Patient Choice Of Pharmacy",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1097",
  //   "description": "Concerning the ability of a person eligible for prescription drug benefits to choose the pharmacy at which to fill a prescription drug order.",
  //   "last_action": "03/19/2018 | Senate Committee on Business, Labor, & Technology Postpone Indefinitely",
  //   "sponsors": ["Rep. M. Catlin", "Rep. J. Danielson", "Sen. D. Coram", "Sen. N. Todd"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1098",
  //   "title": "Roll Over Year-end Balance Envtl Response Account",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1098",
  //   "description": "Concerning the expanded ability of the Colorado oil and gas conservation commission to finance the remediation of oil and gas locations.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Saine", "Rep. M. Gray", "Sen. V. Marble"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1099",
  //   "title": "Broadband Deployment Level Playing Field",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1099",
  //   "description": "Concerning criteria that the broadband deployment board is required to develop with regard to an incumbent telecommunications provider's exercise of a right to implement a broadband deployment project in an unserved area of the state upon a nonincumbent provider's application to the broadband deployment board to implement a proposed broadband deployment project in the unserved area.",
  //   "last_action": "04/2/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Catlin", "Rep. B. McLachlan", "Sen. D. Coram"],
  //   "subject": ["Telecommunications & Information Technology"]
  // }, {
  //   "bill": "HB18-1100",
  //   "title": "Educator Licensure Cash Fund",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1100",
  //   "description": "Concerning the continuous appropriation of money in the educator licensure cash fund.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1101",
  //   "title": "Retail Marijuana Sales Tax Appropriations For Schools",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1101",
  //   "description": "Concerning modification of the manner in which gross retail marijuana tax revenue that is transferred from the general fund to the state public school fund as required by current law is appropriated from the state public school fund.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["Capital Construction", "Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1102",
  //   "title": "Extend District Attorney Fellowships To 18 Months",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1102",
  //   "description": "Concerning extending the length of prosecution fellowships from one year to fifteen months, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/7/2018 | Senate Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Roberts", "Rep. C. Wist", "Sen. J. Cooke"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Local Government"]
  // }, {
  //   "bill": "HB18-1103",
  //   "title": "Local Government Off-highway Vehicle Regulation",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1103",
  //   "description": "Concerning the ability of a local government to require a driver to meet safety standards for the use of an off-highway vehicle.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. McLachlan", "Sen. D. Coram"],
  //   "subject": ["Natural Resources & Environment", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1104",
  //   "title": "Family Preservation For Parents With Disability",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1104",
  //   "description": "Concerning family preservation safeguards for parents with disabilities.",
  //   "last_action": "04/25/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Danielson", "Sen. D. Moreno", "Sen. K. Lambert"],
  //   "subject": ["Children & Domestic Matters"]
  // }, {
  //   "bill": "HB18-1105",
  //   "title": "Motor And Powersports Vehicle License Requirement",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1105",
  //   "description": "Concerning the unlicensed sale of vehicles.",
  //   "last_action": "03/7/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Liston", "Rep. J. Melton", "Sen. J. Tate"],
  //   "subject": ["Business & Economic Development", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1106",
  //   "title": "Minimum Wage Requirement Waiver",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1106",
  //   "description": "Concerning the ability to waive minimum wage requirements.",
  //   "last_action": "01/24/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Williams"],
  //   "subject": ["Labor & Employment"]
  // }, {
  //   "bill": "HB18-1107",
  //   "title": "Prewire Residence For Electric Vehicle Charging Port",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1107",
  //   "description": "Concerning a requirement that builders of new residences offer buyers the option to accommodate electric vehicle charging systems.",
  //   "last_action": "03/20/2018 | Senate Committee on Transportation Postpone Indefinitely",
  //   "sponsors": ["Rep. M. Weissman", "Sen. K. Priola"],
  //   "subject": ["Business & Economic Development", "Energy", "Housing", "Natural Resources & Environment", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1108",
  //   "title": "Commission Deaf Hard Of Hearing Deafblind",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1108",
  //   "description": "Concerning the Colorado commission for the deaf and hard of hearing, and, in connection therewith, renaming the commission the Colorado commission for the deaf, hard of hearing, and deafblind; creating the Colorado deafblind citizens council to advise the commission on deafblind issues; clarifying and expanding the commission's duties to provide services to the deaf, hard of hearing, and deafblind; and changing the membership of the committee charged with reviewing grant applications.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Danielson", "Sen. N. Todd"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1109",
  //   "title": "Discretionary Parole Of Special Needs Offenders",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1109",
  //   "description": "Concerning discretionary parole of special needs offenders.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Weissman", "Sen. J. Cooke"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1110",
  //   "title": "Colorado Constitutional Right",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1110",
  //   "description": "Concerning protecting persons lawfully present in Colorado who are engaged in an act that is protected by the Colorado constitution from a federal agency.",
  //   "last_action": "02/1/2018 | House Committee on Judiciary Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Lebsock"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1111",
  //   "title": "Modifications To PERA Public Employees' Retirement Association Board Of Trustees",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1111",
  //   "description": "Concerning the board of trustees of the public employees' retirement association.",
  //   "last_action": "02/14/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Everett", "Sen. T. Neville"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1112",
  //   "title": "Pharmacist Health Care Services Coverage",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1112",
  //   "description": "Concerning covered health care services provided by a pharmacist.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Becker", "Rep. D. Esgar", "Sen. L. Crowder"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1113",
  //   "title": "Small Business Regulatory Reform",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1113",
  //   "description": "Concerning state agency requirements for the enforcement of new regulatory requirements on small businesses, and, in connection therewith, enacting the \"Regulatory Reform Act of 2018\".",
  //   "last_action": "02/14/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Neville", "Sen. T. Neville", "Sen. V. Marble"],
  //   "subject": ["Business & Economic Development"]
  // }, {
  //   "bill": "HB18-1114",
  //   "title": "Require License Practice Genetic Counseling",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1114",
  //   "description": "Concerning the regulation of genetic counselors, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/24/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Ginal", "Rep. J. Buckner", "Sen. N. Todd"],
  //   "subject": ["Business & Economic Development"]
  // }, {
  //   "bill": "HB18-1115",
  //   "title": "Department of Public Safety Human Trafficking-related Training",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1115",
  //   "description": "Concerning the provision of training materials related to human trafficking by the department of public safety, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/8/2018 | Senate Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Carver", "Rep. J. Ginal", "Sen. J. Cooke", "Sen. L. Garcia"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "State Government"]
  // }, {
  //   "bill": "HB18-1116",
  //   "title": "Broadband Deployment Board Apply For Federal Funds",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1116",
  //   "description": "Concerning measures authorizing the broadband deployment board to seek federal money earmarked for financing broadband deployment.",
  //   "last_action": "01/29/2018 | Sent to the Governor",
  //   "sponsors": ["Rep. B. Rankin", "Sen. D. Moreno"],
  //   "subject": ["Telecommunications & Information Technology"]
  // }, {
  //   "bill": "HB18-1117",
  //   "title": "Self-service Storage Facility Personal Property Liens",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1117",
  //   "description": "Concerning liens that attach to personal property that is stored at a self-service storage facility.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. K. Van Winkle", "Rep. J. Coleman", "Sen. J. Tate"],
  //   "subject": ["Business & Economic Development"]
  // }, {
  //   "bill": "HB18-1118",
  //   "title": "Create Health Care Legislative Review Committee",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1118",
  //   "description": "Concerning the creation of the statewide health care review committee to study health care issues that affect Colorado residents throughout the state, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Ginal", "Rep. S. Beckman", "Sen. I. Aguilar", "Sen. L. Crowder"],
  //   "subject": ["Health Care & Health Insurance", "Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1119",
  //   "title": "Highway Building & Maintenance Funding",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1119",
  //   "description": "Concerning sustainable rural highway building and maintenance funding, and, in connection therewith, requiring a specified percentage of net revenue generated by the existing state sales and use tax to be credited to the state highway fund; requiring the transportation commission to submit to the voters of the state at the November 2018 general election a ballot question, which, if approved, will, without raising taxes, authorize the state to issue transportation revenue anticipation notes for the purpose of funding the construction of specified high-priority highway projects, will require all of the notes to be issued and projects commenced within three years of the notes being authorized, will exclude note proceeds and investment earnings on note proceeds from state fiscal year spending limits, and will repeal an existing requirement that the state treasurer execute lease-purchase agreements for the purpose of funding transportation projects; and requiring the sales and use tax net revenue credited to the state highway fund to be used to repay any notes issued and to fund maintenance on qualified federal aid highways.",
  //   "last_action": "02/21/2018 | House Committee on Transportation & Energy Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Leonard", "Sen. T. Neville"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1120",
  //   "title": "The Prohibition Of Dismemberment Abortions",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1120",
  //   "description": "Concerning the prohibition of dismemberment abortions.",
  //   "last_action": "02/28/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Neville", "Sen. T. Neville", "Sen. V. Marble"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1121",
  //   "title": "No Funding Trafficking Aborted Human Body Parts",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1121",
  //   "description": "Concerning the termination of state funding for higher education institutions that engage in the trafficking of aborted human body parts.",
  //   "last_action": "02/28/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Leonard", "Sen. T. Neville", "Sen. V. Marble"],
  //   "subject": ["Higher Education", "State Government"]
  // }, {
  //   "bill": "HB18-1122",
  //   "title": "Accounting Of Conservation Easements In The State",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1122",
  //   "description": "Concerning a public accounting of conservation easements created in the state.",
  //   "last_action": "03/15/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. K. Lewis", "Sen. J. Sonnenberg", "Sen. V. Marble"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1123",
  //   "title": "Conservation Easement Tax Credit Time Out",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1123",
  //   "description": "Concerning measures to enforce a reduction in the abuse of conservation easements in the state, and, in connection therewith, placing a temporary moratorium on the ability of a taxpayer to claim a state income tax credit for the donation of an easement.",
  //   "last_action": "03/15/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. K. Lewis", "Sen. J. Sonnenberg", "Sen. V. Marble"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1124",
  //   "title": "General Assembly Legislative Aides",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1124",
  //   "description": "Concerning support staff for members of the general assembly.",
  //   "last_action": "05/4/2018 | House Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. C. Hansen"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1125",
  //   "title": "Tax Credit Employer-assisted Housing Pilot Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1125",
  //   "description": "Concerning the creation of a credit against the state income tax as a pilot program to promote employer-assisted housing projects in rural areas.",
  //   "last_action": "02/26/2018 | House Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Wilson"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1126",
  //   "title": "Limit Homeowners' Association Regulation Of Dogs By Size Or Breed",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1126",
  //   "description": "Concerning the permissible regulation of dogs in common interest communities.",
  //   "last_action": "02/26/2018 | House Third Reading Lost - No Amendments",
  //   "sponsors": ["Rep. P. Rosenthal"],
  //   "subject": ["Civil Law", "Housing"]
  // }, {
  //   "bill": "HB18-1127",
  //   "title": "Residential Landlord Rental Application",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1127",
  //   "description": "Concerning the rental application process for prospective tenants.",
  //   "last_action": "03/14/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Jackson", "Rep. C. Kennedy", "Sen. S. Fenberg"],
  //   "subject": ["Housing"]
  // }, {
  //   "bill": "HB18-1128",
  //   "title": "Protections For Consumer Data Privacy",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1128",
  //   "description": "Concerning strengthening protections for consumer data privacy.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Wist", "Rep. J. Bridges", "Sen. K. Lambert", "Sen. L. Court"],
  //   "subject": ["Telecommunications & Information Technology"]
  // }, {
  //   "bill": "HB18-1129",
  //   "title": "Consumer Report Security Freeze For Protected Consumers",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1129",
  //   "description": "Concerning a consumer reporting agency's placement of a security freeze on the consumer report of a consumer who is under the charge of a guardian at the request of the consumer's guardian.",
  //   "last_action": "02/7/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Lawrence", "Sen. J. Tate"],
  //   "subject": ["Financial Services & Commerce"]
  // }, {
  //   "bill": "HB18-1130",
  //   "title": "School District-authorized Instructors",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1130",
  //   "description": "Concerning increasing the availability of qualified personnel who are licensed in another state to teach in public schools.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Williams", "Rep. J. Arndt", "Sen. B. Gardner"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1131",
  //   "title": "Court System For Remote Participation In Hearings",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1131",
  //   "description": "Concerning a program to facilitate conducting judicial proceedings via networking technology.",
  //   "last_action": "04/16/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Michaelson Jenet", "Sen. L. Crowder", "Sen. R. Fields"],
  //   "subject": ["Courts & Judicial", "Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1132",
  //   "title": "Increase Department Of Corrections Reimbursement To County Jails",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1132",
  //   "description": "Concerning the amount that the department of corrections is required to reimburse a county or city and county for the confinement and maintenance in a local jail of any person who is sentenced to a term of imprisonment in a correctional facility.",
  //   "last_action": "04/25/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Michaelson Jenet", "Sen. L. Crowder"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1133",
  //   "title": "Marijuana Processor Registration",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1133",
  //   "description": "Concerning registration for marijuana fibrous waste recycling facilities.",
  //   "last_action": "02/23/2018 | House Committee on Agriculture, Livestock, & Natural Resources Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Lebsock", "Sen. V. Marble"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1134",
  //   "title": "Use Of Colorado Preschool Program Positions",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1134",
  //   "description": "Concerning eligibility of kindergarten students funded through early childhood at-risk enhancement positions.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Pettersen", "Rep. J. Wilson", "Sen. M. Merrifield", "Sen. B. Martinez Humenik"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1135",
  //   "title": "Extend Advanced Industry Export Acceleration Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1135",
  //   "description": "Concerning the extension of the advanced industries export acceleration program, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. J. Wilson", "Sen. J. Tate"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1136",
  //   "title": "Substance Use Disorder Treatment",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1136",
  //   "description": "Concerning treatment for individuals with substance use disorders, and, in connection therewith, adding residential and inpatient treatment to the Colorado medical assistance program and making an appropriation.",
  //   "last_action": "06/5/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Pettersen", "Sen. K. Priola", "Sen. C. Jahn"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1137",
  //   "title": "Reporting Requirements Department Of Transportation And Department Of Public Safety To General Assembly",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1137",
  //   "description": "Concerning the scheduled repeal of reports to the general assembly, and, in connection therewith, continuing the requirements for reports by the department of transportation and the department of public safety.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. H. McKean", "Sen. R. Zenzinger"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1138",
  //   "title": "Public Official Oaths And Affirmations",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1138",
  //   "description": "Concerning standardizing public official oaths of office, and, in connection therewith, providing a uniform oath text and establishing requirements for taking, subscribing, administering, and filing public oaths of office.",
  //   "last_action": "04/2/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Arndt", "Sen. R. Zenzinger"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1139",
  //   "title": "Reporting Requirements For Park Fees Set By Rule",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1139",
  //   "description": "Concerning the removal of outdated statutory references to repealed reporting requirements that were previously imposed on the parks and wildlife commission with regard to its rule-making authority to set fees.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. E. Hooton", "Sen. R. Zenzinger"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1140",
  //   "title": "Public Official Personal Surety Bonds",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1140",
  //   "description": "Concerning public official personal surety bonds, and, in connection therewith, repealing obsolete provisions and authorizing the purchase of insurance in lieu of public official personal surety bonds.",
  //   "last_action": "03/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. H. McKean", "Sen. D. Moreno"],
  //   "subject": ["Local Government", "State Government"]
  // }, {
  //   "bill": "HB18-1141",
  //   "title": "Modernize Early Childhood Council Language",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1141",
  //   "description": "Concerning the removal of outdated references in statute to \"early childhood care and education councils\".",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. E. Hooton", "Sen. R. Zenzinger"],
  //   "subject": ["Children & Domestic Matters", "Education & School Finance (Pre & K-12)", "Human Services"]
  // }, {
  //   "bill": "HB18-1142",
  //   "title": "Remove Term \"Pauper\" From Colorado Revised Statutes",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1142",
  //   "description": "Concerning modernizing language in statutory sections that refer to paupers.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. E. Hooton", "Rep. D. Thurlow", "Sen. B. Martinez Humenik", "Sen. R. Zenzinger"],
  //   "subject": ["Local Government"]
  // }, {
  //   "bill": "HB18-1143",
  //   "title": "Unconstitutional Part Sexually Explicit Materials",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1143",
  //   "description": "Concerning the repeal of statutory provisions relating to sexually explicit materials harmful to children that were ruled unconstitutional by the Colorado supreme court.",
  //   "last_action": "05/2/2018 | House Second Reading Special Order - Laid Over to 05/09/2018 - No Amendments",
  //   "sponsors": ["Rep. J. Arndt", "Rep. D. Thurlow", "Sen. D. Moreno", "Sen. B. Martinez Humenik"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1144",
  //   "title": "Update Publishing Requirement DOR Department Of Revenue Taxes Paid Table",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1144",
  //   "description": "Concerning certain publishing requirements for the department of revenue's \"Disclosure of Average Taxes Paid\" table.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Thurlow", "Sen. J. Tate"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1145",
  //   "title": "Enjoined Laws On Ballot Issue Petition Circulators",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1145",
  //   "description": "Concerning the repeal of laws regulating ballot issue petition circulators that have been permanently enjoined from enforcement.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. E. Hooton", "Sen. D. Moreno"],
  //   "subject": ["Elections & Redistricting"]
  // }, {
  //   "bill": "HB18-1146",
  //   "title": "Sunset Measurement Standards Law",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1146",
  //   "description": "Concerning the continuation under the sunset law of the measurement standards law.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Melton", "Sen. D. Coram"],
  //   "subject": ["Agriculture"]
  // }, {
  //   "bill": "HB18-1147",
  //   "title": "Sunset Process Weather Modification",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1147",
  //   "description": "Concerning the continuation of the regulation of people who modify the weather, and, in connection therewith, implementing the sunset review recommendations of the department of regulatory agencies.",
  //   "last_action": "04/26/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Ginal", "Rep. K. Ransom", "Sen. D. Coram"],
  //   "subject": ["Business & Economic Development", "Natural Resources & Environment", "Water"]
  // }, {
  //   "bill": "HB18-1148",
  //   "title": "Stage Four Advanced Metastatic Cancer Step Therapy",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1148",
  //   "description": "Concerning the prohibition against a carrier requiring step therapy for covered persons with stage four advanced metastatic cancer.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Michaelson Jenet", "Sen. L. Crowder"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1149",
  //   "title": "Sunset Continue Consumer Insurance Council",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1149",
  //   "description": "Concerning continuation of the consumer insurance council.",
  //   "last_action": "04/11/2018 | Senate Committee on Business, Labor, & Technology Postpone Indefinitely",
  //   "sponsors": ["Rep. C. Kennedy", "Sen. T. Neville"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1150",
  //   "title": "Local Government Liable Fracking Ban Oil And Gas Moratorium",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1150",
  //   "description": "Concerning a requirement that a local government that interferes with oil and gas operations compensate persons damaged by the interference.",
  //   "last_action": "03/7/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Buck"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1151",
  //   "title": "Colorado Water Conservation Board Approve Deficit Irrigation Pilot Projects",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1151",
  //   "description": "Concerning the authorization of deficit irrigation pilot projects approved by the Colorado water conservation board.",
  //   "last_action": "03/20/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Arndt", "Rep. M. Catlin", "Sen. L. Crowder"],
  //   "subject": ["Water"]
  // }, {
  //   "bill": "HB18-1152",
  //   "title": "Judicial Administrative And Budget Records Subject to Colorado Open Records Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1152",
  //   "description": "Concerning making certain records of the state judicial department relating to sexual harassment investigations subject to the Colorado open records act.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lawrence", "Sen. J. Cooke"],
  //   "subject": ["Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1153",
  //   "title": "Property Casualty Insurance Claim Appraisal Procedures",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1153",
  //   "description": "Concerning the conduct of appraisals of the value of property covered by property and casualty insurance, and, in connection therewith, specifying the qualifications and rules of conduct for appraisers and umpires engaged in the appraisal process.",
  //   "last_action": "03/19/2018 | House Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Becker", "Sen. D. Coram"],
  //   "subject": ["Business & Economic Development", "Civil Law", "Insurance"]
  // }, {
  //   "bill": "HB18-1154",
  //   "title": "Protect Consumer Solicit Public Record Copy For Fee",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1154",
  //   "description": "Concerning consumer protections relating to a solicitation to provide a copy of a public record for a fee.",
  //   "last_action": "04/12/2018 | Governor Signed",
  //   "sponsors": ["Rep. E. Hooton", "Rep. K. Van Winkle", "Sen. C. Jahn"],
  //   "subject": ["Financial Services & Commerce"]
  // }, {
  //   "bill": "HB18-1155",
  //   "title": "Sunset Continue Physical Therapy Board Functions",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1155",
  //   "description": "Concerning the continuation of the physical therapy board, and, in connection therewith, implementing the recommendations contained in the 2017 sunset review and report by the department of regulatory agencies.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Singer", "Rep. L. Liston", "Sen. B. Martinez Humenik"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1156",
  //   "title": "Limit Penalties For Juvenile Truancy",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1156",
  //   "description": "Concerning limitations on penalties for truancy.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lee", "Sen. C. Holbert"],
  //   "subject": ["Children & Domestic Matters", "Courts & Judicial", "Crimes, Corrections, & Enforcement", "Education & School Finance (Pre & K-12)", "Human Services"]
  // }, {
  //   "bill": "HB18-1157",
  //   "title": "Increased Reporting Oil And Gas Incidents",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1157",
  //   "description": "Concerning increased reporting of oil and gas incidents.",
  //   "last_action": "04/19/2018 | Senate Committee on Agriculture, Natural Resources, & Energy Postpone Indefinitely",
  //   "sponsors": ["Rep. K. Becker", "Rep. J. Singer", "Sen. S. Fenberg"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1158",
  //   "title": "Supplemental Appropriation - Dept Of Corrections",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1158",
  //   "description": "Concerning a supplemental appropriation to the department of corrections.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1159",
  //   "title": "Supplemental Appropriation - Dept Of Education",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1159",
  //   "description": "Concerning a supplemental appropriation to the department of education.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1160",
  //   "title": "Supplemental Appropriation - Department Of Governor Lt. Governor, & Office State Planning & Budgetting",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1160",
  //   "description": "Concerning a supplemental appropriation to the offices of the governor, lieutenant governor, and state planning and budgeting.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1161",
  //   "title": "Supplemental Appropriation - Dept Of Health Care Policy & Financing",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1161",
  //   "description": "Concerning a supplemental appropriation to the department of health care policy and financing.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1162",
  //   "title": "Supplemental Appropriation - Department Of Human Services",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1162",
  //   "description": "Concerning a supplemental appropriation to the department of human services.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1163",
  //   "title": "Supplemental Appropriation - Judicial Department",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1163",
  //   "description": "Concerning a supplemental appropriation to the judicial department.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1164",
  //   "title": "Supplemental Appropriation - Department Of Personnel",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1164",
  //   "description": "Concerning a supplemental appropriation to the department of personnel.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1165",
  //   "title": "Supplemental Appropriation - Department Of Public Safety",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1165",
  //   "description": "Concerning a supplemental appropriation to the department of public safety.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1166",
  //   "title": "Supplemental Appropriation - Department Of Regulatory Agencies",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1166",
  //   "description": "Concerning a supplemental appropriation to the department of regulatory agencies.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1167",
  //   "title": "Supplemental Appropriation - Dept Of Revenue",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1167",
  //   "description": "Concerning a supplemental appropriation to the department of revenue.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1168",
  //   "title": "Supplemental Appropriation - Department Of State",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1168",
  //   "description": "Concerning a supplemental appropriation to the department of state.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1169",
  //   "title": "Supplemental Appropriation - Department Of Treasury",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1169",
  //   "description": "Concerning a supplemental appropriation to the department of the treasury.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1170",
  //   "title": "Supplemental Appropriation - Capital Construction",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1170",
  //   "description": "Concerning funding for capital construction, and making supplemental appropriations in connection therewith.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1171",
  //   "title": "School Finance Mid-year Adjustment To Funding",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1171",
  //   "description": "Concerning adjustments in the amount of total program funding for public schools for the 2017-18 budget year, and, in connection therewith, making and reducing an appropriation.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lundberg"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1172",
  //   "title": "Money Allocated To Designated Managed Service Organization",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1172",
  //   "description": "Concerning money allocated from an appropriation from the marijuana tax cash fund to a designated managed service organization to implement its community action plan.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Young", "Sen. K. Lambert"],
  //   "subject": ["State Government", "State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1173",
  //   "title": "Supplemental General Fund Transfer Information Technology Capital Construction Account",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1173",
  //   "description": "Concerning a supplemental transfer of money from the general fund to the information technology capital account of the capital construction fund for the 2017-18 state fiscal year.",
  //   "last_action": "03/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Rankin", "Sen. K. Lambert"],
  //   "subject": ["Capital Construction", "Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1174",
  //   "title": "Sunset Continue Board Of Mortgage Loan Originators",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1174",
  //   "description": "Concerning the continuation under the sunset law of the board of mortgage loan originators, and, in connection therewith, adopting the legislative recommendations of the department of regulatory agencies as contained in the department's sunset report.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Arndt", "Rep. M. Gray", "Sen. K. Priola"],
  //   "subject": ["Business & Economic Development", "Financial Services & Commerce", "Housing"]
  // }, {
  //   "bill": "HB18-1175",
  //   "title": "Sunset Community Association Managers",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1175",
  //   "description": "Concerning the continuation under the sunset law of the regulation of community association managers by the director of the division of real estate, and, in connection therewith, implementing the recommendations contained in the 2017 sunset report of the department of regulatory agencies.",
  //   "last_action": "04/10/2018 | Senate Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. D. Thurlow", "Sen. B. Gardner"],
  //   "subject": ["Business & Economic Development", "Housing"]
  // }, {
  //   "bill": "HB18-1176",
  //   "title": "Sunset Offender Reentry Grant Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1176",
  //   "description": "Concerning continuation of the grant program in the department of corrections to provide funding to eligible community-based organizations that provide reentry services to offenders, and, in connection therewith, implementing the recommendations in the 2017 report of the department of regulatory agencies.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lee", "Rep. C. Wist", "Sen. J. Cooke"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1177",
  //   "title": "Youth Suicide Prevention",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1177",
  //   "description": "Concerning multiple approaches to help prevent youth suicide, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/1/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Michaelson Jenet", "Sen. S. Fenberg", "Sen. D. Coram"],
  //   "subject": ["Children & Domestic Matters", "Health Care & Health Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1178",
  //   "title": "Hold Colorado Governments Accountable Sanctuary Jurisdictions",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1178",
  //   "description": "Concerning holding Colorado governments accountable for creating sanctuary jurisdiction policies.",
  //   "last_action": "03/14/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Williams", "Sen. K. Lundberg", "Sen. V. Marble"],
  //   "subject": ["Civil Law"]
  // }, {
  //   "bill": "HB18-1179",
  //   "title": "Prohibit Price Gouging On Prescription Drugs",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1179",
  //   "description": "Concerning a prohibition against price gouging on certain prescription drugs.",
  //   "last_action": "05/2/2018 | House Second Reading Laid Over to 08/31/2018 - No Amendments",
  //   "sponsors": ["Rep. J. Salazar"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1180",
  //   "title": "Mental Health Professional Dismissed Complaint Colorado Open Records Act Access",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1180",
  //   "description": "Concerning access by a mental health professional to the files of a regulatory board regarding a dismissed complaint filed against the mental health professional.",
  //   "last_action": "03/21/2018 | Senate Committee on Health & Human Services Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Melton", "Sen. J. Smallwood"],
  //   "subject": ["Courts & Judicial", "State Government"]
  // }, {
  //   "bill": "HB18-1181",
  //   "title": "Nonresident Electors And Special Districts",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1181",
  //   "description": "Concerning measures to expand the ability of nonresident electors to participate in the governance of special districts, and, in connection therewith, allowing nonresident electors who own taxable property within the special district to vote in special district elections and allowing such electors to serve on special district boards in a nonvoting capacity.",
  //   "last_action": "06/1/2018 | Governor Vetoed",
  //   "sponsors": ["Rep. L. Liston", "Sen. J. Tate"],
  //   "subject": ["Elections & Redistricting", "Local Government"]
  // }, {
  //   "bill": "HB18-1182",
  //   "title": "Statewide System For Advance Directives",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1182",
  //   "description": "Concerning a statewide system of advance directives.",
  //   "last_action": "03/29/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Ginal", "Rep. L. Landgraf", "Sen. L. Court", "Sen. D. Coram"],
  //   "subject": ["Health Care & Health Insurance", "State Government"]
  // }, {
  //   "bill": "HB18-1183",
  //   "title": "Sunset Repeal Dept Agriculture Regulation Home Sale Of Meat",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1183",
  //   "description": "Concerning the continuation of the regulation of home food service plans pursuant to the \"Sale of Meat Act\", and, in connection therewith, implementing the department of regulatory agencies' sunset review recommendation to repeal the act.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. E. Hooton", "Rep. K. Ransom", "Sen. R. Baumgardner"],
  //   "subject": ["Public Health"]
  // }, {
  //   "bill": "HB18-1184",
  //   "title": "Create Next Generation 911 Board",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1184",
  //   "description": "Concerning the creation of a report on 911 service in Colorado, and, in connection therewith, requiring consideration of issues related to the implementation of next generation 911.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Exum", "Rep. P. Lawrence", "Sen. I. Aguilar", "Sen. B. Gardner"],
  //   "subject": ["Local Government", "State Government"]
  // }, {
  //   "bill": "HB18-1185",
  //   "title": "Market Sourcing For Business Income Tax Apportionment",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1185",
  //   "description": "Concerning changes to the state income tax apportionment statute based on the most recent multistate tax commission's uniform model of the uniform division of income for tax purposes act.",
  //   "last_action": "06/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. C. Wist", "Sen. T. Neville", "Sen. D. Moreno"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1186",
  //   "title": "Sunset Review Colorado Youth Advisory Council",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1186",
  //   "description": "Concerning the continuation of the Colorado youth advisory council, and, in connection therewith, implementing the sunset review recommendations of the department of regulatory agencies and making an appropriation.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Wilson", "Rep. J. Reyher", "Sen. V. Marble"],
  //   "subject": ["Local Government", "State Government"]
  // }, {
  //   "bill": "HB18-1187",
  //   "title": "Food And Drug Administration Cannabidiol Drug Use",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1187",
  //   "description": "Concerning the lawful use of a prescription drug that contains cannabidiol that is approved by the United States food and drug administration.",
  //   "last_action": "06/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Buckner", "Rep. L. Landgraf", "Sen. J. Cooke", "Sen. D. Moreno"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1188",
  //   "title": "Electronic Data Transportation Infrastructure",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1188",
  //   "description": "Concerning authorization for the Colorado department of transportation to use location information from an electronic device.",
  //   "last_action": "04/10/2018 | Senate Committee on Transportation Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Jackson", "Sen. O. Hill"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1189",
  //   "title": "Expanding Effective Teacher Residency Programs",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1189",
  //   "description": "Concerning pilot programs to expand effective teacher residency programs across the state, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Pettersen", "Rep. L. Sias", "Sen. O. Hill", "Sen. N. Todd"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1190",
  //   "title": "Modify Job Creation Main Street Revitalization Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1190",
  //   "description": "Concerning modifications to the \"Colorado Job Creation and Main Street Revitalization Act\".",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Esgar", "Rep. H. McKean", "Sen. J. Tate", "Sen. L. Garcia"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1191",
  //   "title": "Local Government Alter Speed Limits",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1191",
  //   "description": "Concerning a local authority's ability to alter speed limits within the local authority's jurisdiction.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. F. Winter", "Sen. B. Martinez Humenik", "Sen. J. Kefalas"],
  //   "subject": ["Local Government", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1192",
  //   "title": "Application Assistance Federal Disability Benefits",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1192",
  //   "description": "Concerning application assistance for persons seeking federal disability benefits.",
  //   "last_action": "03/9/2018 | House Committee on Public Health Care & Human Services Postpone Indefinitely",
  //   "sponsors": ["Rep. L. Landgraf", "Rep. D. Michaelson Jenet", "Sen. D. Coram"],
  //   "subject": ["Human Services"]
  // }, {
  //   "bill": "HB18-1193",
  //   "title": "Extend Advanced Placement Incentives Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1193",
  //   "description": "Concerning the advanced placement incentives pilot program, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/3/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Wilson", "Rep. B. McLachlan", "Sen. R. Scott", "Sen. R. Zenzinger"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1194",
  //   "title": "Conservation Easement Transparency",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1194",
  //   "description": "Concerning measures to protect the interests of landowners who create conservation easements on their property.",
  //   "last_action": "03/15/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. K. Lewis", "Sen. J. Sonnenberg", "Sen. V. Marble"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1195",
  //   "title": "Tax Credit Contributions Organizations Affordable Housing",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1195",
  //   "description": "Concerning the creation of a credit against the state income tax to promote contributions to nonprofit organizations engaged in the development of affordable housing for home ownership.",
  //   "last_action": "05/7/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Pabon", "Rep. J. Bridges", "Sen. J. Tate"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1196",
  //   "title": "Applications For Aid To The Needy Disabled Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1196",
  //   "description": "Concerning authorization to verify the disability of an applicant to the aid to the needy disabled program.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Exum", "Sen. N. Todd", "Sen. B. Martinez Humenik"],
  //   "subject": ["Human Services"]
  // }, {
  //   "bill": "HB18-1197",
  //   "title": "Student-centered Pilot Accountability Systems",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1197",
  //   "description": "Concerning authorizing local education providers to operate student-centered accountability system pilot programs, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Young", "Rep. J. Wilson", "Sen. D. Moreno"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1198",
  //   "title": "Best Practices For State Boards And Commissions",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1198",
  //   "description": "Concerning the establishment of best practices for state boards and commissions.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Saine", "Rep. T. Kraft-Tharp", "Sen. K. Donovan", "Sen. J. Smallwood"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1199",
  //   "title": "Aquifer Storage-and-recovery Plans",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1199",
  //   "description": "Concerning a process for the ground water commission to use for approving aquifer storage-and-recovery plans, and, in connection therewith, requiring that the ground water commission promulgate rules governing its implementation of the process.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Catlin", "Rep. B. McLachlan", "Sen. D. Coram"],
  //   "subject": ["Water"]
  // }, {
  //   "bill": "HB18-1200",
  //   "title": "Cybercrime Changes",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1200",
  //   "description": "Concerning cybercrime, and, in connection therewith, criminalizing using a computer to engage in prostitution of a minor, criminalizing skimming payment cards, making changes to the penalty structure for cybercrime, and making an appropriation.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lundeen", "Rep. A. Garnett", "Sen. D. Coram", "Sen. R. Fields"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Telecommunications & Information Technology"]
  // }, {
  //   "bill": "HB18-1201",
  //   "title": "Severance Tax Voter-approved Revenue Change",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1201",
  //   "description": "Concerning a voter-approved revenue change to allow the state to retain and spend an amount equal to state severance tax revenues.",
  //   "last_action": "04/9/2018 | House Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Thurlow", "Sen. D. Coram"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1202",
  //   "title": "Income Tax Credit Leave Of Absence Organ Donation",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1202",
  //   "description": "Concerning an income tax credit for an employer related to an employee's paid leave of absence for the purpose of making an organ donation, and, in connection therewith, enacting the \"Living Organ Donor Support Act\".",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. A. Garnett", "Sen. B. Gardner"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1203",
  //   "title": "Reduce State Income Tax",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1203",
  //   "description": "Concerning a reduction of the state income tax rate.",
  //   "last_action": "03/8/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Neville", "Sen. T. Neville"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1204",
  //   "title": "Financial Responsibility Drivers Motor Vehicles",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1204",
  //   "description": "Concerning measures to reduce the number of people who drive a vehicle without providing for financial responsibility.",
  //   "last_action": "03/8/2018 | House Committee on Judiciary Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Beckman"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1205",
  //   "title": "Financial Relief Defray Individual Health Plan Costs",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1205",
  //   "description": "Concerning a financial relief program to provide financial assistance to an individual earning a household income of not more than five hundred percent of the federal poverty line of which the individual spends more than twenty percent on health insurance premiums for individual health insurance purchased through the Colorado health benefit exchange, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Roberts", "Sen. K. Donovan"],
  //   "subject": ["Health Care & Health Insurance", "Insurance"]
  // }, {
  //   "bill": "HB18-1206",
  //   "title": "Live & Let Live Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1206",
  //   "description": "Concerning the establishment of the \"Live and Let Live Act\" in Colorado.",
  //   "last_action": "03/27/2018 | House Committee on Judiciary Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Humphrey", "Sen. K. Lundberg"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1207",
  //   "title": "Hospital Financial Transparency Measures",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1207",
  //   "description": "Concerning hospital transparency measures required to analyze the efficacy of hospital delivery system reform incentive payments.",
  //   "last_action": "04/30/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. C. Kennedy", "Rep. B. Rankin", "Sen. D. Moreno", "Sen. J. Smallwood"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1208",
  //   "title": "Expand Child Care Expenses Income Tax Credit",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1208",
  //   "description": "Concerning the expansion of the income tax credit for child care expenses that is a percentage of a similar federal income tax credit.",
  //   "last_action": "05/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Duran", "Rep. F. Winter", "Sen. B. Martinez Humenik"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1209",
  //   "title": "No 529 Account Income Tax Deduction For K-12 Kindergarten Through Twelfth Expenses",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1209",
  //   "description": "Concerning amendments to the state income tax deduction for contributions to a qualified 529 account to ensure that the state income tax deduction is not aligned with the changes in the federal \"Tax Cuts and Jobs Act\" of 2017 that allow tax-free distributions for elementary and secondary school expenses.",
  //   "last_action": "04/19/2018 | Senate Committee on Finance Postpone Indefinitely",
  //   "sponsors": ["Rep. B. Pettersen", "Rep. A. Garnett", "Sen. K. Donovan"],
  //   "subject": ["Education & School Finance (Pre & K-12)", "Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1210",
  //   "title": "Administrator Of Judicial Security Peace Officer Status",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1210",
  //   "description": "Concerning peace officer status for the administrator of judicial security in the Colorado judicial department.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Foote", "Sen. J. Cooke"],
  //   "subject": ["Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1211",
  //   "title": "Medicaid Fraud Control Unit",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1211",
  //   "description": "Concerning controlling medicaid fraud.",
  //   "last_action": "04/25/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Wist", "Rep. M. Foote", "Sen. J. Smallwood", "Sen. I. Aguilar"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1212",
  //   "title": "Freestanding Emergency Departments Licensure",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1212",
  //   "description": "Concerning the licensing of freestanding emergency departments, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/1/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. C. Kennedy", "Rep. L. Landgraf", "Sen. J. Kefalas"],
  //   "subject": ["Health Care & Health Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1213",
  //   "title": "Declare Party Affiliation School District Director",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1213",
  //   "description": "Concerning a clarification that a candidate for school district director may declare a political party affiliation.",
  //   "last_action": "03/21/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Leonard"],
  //   "subject": ["Elections & Redistricting"]
  // }, {
  //   "bill": "HB18-1214",
  //   "title": "State Board Land Commissioners Telecommunications Tower Leases",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1214",
  //   "description": "Concerning lease rates for telecommunications tower ground leases on state land managed by the state board of land commissioners in rural areas.",
  //   "last_action": "04/10/2018 | House Committee on Business Affairs and Labor Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Valdez", "Rep. M. Catlin", "Sen. J. Sonnenberg"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1215",
  //   "title": "Safe Disposal Naturally Occur Radioactive Material",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1215",
  //   "description": "Concerning enhanced protections regarding the disposal of naturally occurring radioactive materials, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Arndt", "Sen. M. Jones"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1216",
  //   "title": "Youth Shooting Light Geese Hunting Permit ",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1216",
  //   "description": "Concerning a special permit for youth to hunt light geese as members of a youth shooting sports organization.",
  //   "last_action": "04/12/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Reyher"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1217",
  //   "title": "Income Tax Credit For Employer 529 Contributions",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1217",
  //   "description": "Concerning a temporary income tax credit for employers that make contributions to 529 qualified state tuition program accounts owned by their employees, and, in connection therewith, enacting the \"Working Families College Savings Act\".",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. K. Van Winkle", "Rep. A. Garnett", "Sen. B. Gardner"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1218",
  //   "title": "Definition Of Veterans' Organizations For Sales And Use Tax",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1218",
  //   "description": "Concerning the definition of a charitable organization for purposes of state sales and use tax, and, in connection therewith, removing the limitation that a veterans' organization only gets the charitable organization exemption for purposes of sponsoring a special event, meeting, or other function in the state, so long as such event, meeting, or function is not part of the organization's regular activities in the state.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Carver", "Rep. J. Melton", "Sen. L. Crowder", "Sen. N. Todd"],
  //   "subject": ["Military & Veterans", "State Government"]
  // }, {
  //   "bill": "HB18-1219",
  //   "title": "Provider Access To Colorado Benefits Management System",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1219",
  //   "description": "Concerning providing access to the Colorado benefits management system for providers of services pursuant to the program of all-inclusive care for the elderly.",
  //   "last_action": "04/24/2018 | House Committee on Public Health Care & Human Services Postpone Indefinitely",
  //   "sponsors": ["Rep. H. McKean", "Sen. C. Jahn"],
  //   "subject": ["Health Care & Health Insurance", "Human Services"]
  // }, {
  //   "bill": "HB18-1220",
  //   "title": "Bitcoin Dealers Licensed As Money Transmitters",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1220",
  //   "description": "Concerning a requirement that persons who deal in cryptocurrency be regulated under the laws regulating money transmitters.",
  //   "last_action": "04/30/2018 | Senate Committee on Business, Labor, & Technology Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Melton", "Sen. J. Tate"],
  //   "subject": ["Business & Economic Development", "Financial Services & Commerce"]
  // }, {
  //   "bill": "HB18-1221",
  //   "title": "Income Tax Deduction For 529 Account Kindergarten Through Twelfth Grade Expenses",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1221",
  //   "description": "Concerning the alignment of the state income tax deduction for contributions to a qualified 529 account with the changes in the federal \"Tax Cuts and Jobs Act\" of 2017 that allow tax-free distributions for kindergarten through twelfth grade school expenses.",
  //   "last_action": "03/26/2018 | House Committee on Education Postpone Indefinitely",
  //   "sponsors": ["Rep. T. Leonard", "Sen. T. Neville"],
  //   "subject": ["Education & School Finance (Pre & K-12)", "State Government"]
  // }, {
  //   "bill": "HB18-1222",
  //   "title": "Systematic Review Of Education Programs",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1222",
  //   "description": "Concerning the systematic review of education programs enacted by the general assembly for the preschool through secondary public education system.",
  //   "last_action": "03/12/2018 | House Committee on Education Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Becker"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1223",
  //   "title": "Declare Autism Epidemic In Colorado",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1223",
  //   "description": "Concerning declaring an autism epidemic in Colorado.",
  //   "last_action": "04/26/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Reyher", "Sen. L. Crowder"],
  //   "subject": ["Public Health"]
  // }, {
  //   "bill": "HB18-1224",
  //   "title": "Licensee Discipline Mediation State Agency",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1224",
  //   "description": "Concerning the process that is due for the imposition of discipline that affects a person's ability to practice an occupation, and, in connection therewith, requiring the parties to submit to mediation and making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. Y. Willett", "Sen. B. Gardner"],
  //   "subject": ["Business & Economic Development", "Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1225",
  //   "title": "Protect Human Life At Conception",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1225",
  //   "description": "Concerning the protection of human life beginning at conception.",
  //   "last_action": "02/22/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. S. Humphrey", "Sen. K. Lundberg"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1226",
  //   "title": "Higher Education Review Degree Program Costs And Outcomes",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1226",
  //   "description": "Concerning the review of degree programs offered by state institutions of higher education, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/24/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Everett", "Rep. J. Bridges", "Sen. J. Smallwood", "Sen. S. Fenberg"],
  //   "subject": ["Higher Education"]
  // }, {
  //   "bill": "HB18-1227",
  //   "title": "Real Estate Commission Flexibility In License Periods",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1227",
  //   "description": "Concerning the authority of the real estate commission to issue licenses for an initial period of less than three years.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Herod", "Rep. C. Wist", "Sen. J. Cooke"],
  //   "subject": ["Business & Economic Development", "Financial Services & Commerce", "Housing"]
  // }, {
  //   "bill": "HB18-1228",
  //   "title": "Transparency In Military Higher Education Statutes",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1228",
  //   "description": "Concerning increasing transparency in higher education statutes relating to military service.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Everett", "Rep. D. Michaelson Jenet", "Sen. L. Garcia"],
  //   "subject": ["Higher Education", "Military & Veterans"]
  // }, {
  //   "bill": "HB18-1229",
  //   "title": "Joint Committee Of Reference Review Of Department Budget Request",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1229",
  //   "description": "Concerning the joint committee of reference review of departmental budget requests as part of the \"State Measurement for Accountable, Responsive, and Transparent (SMART) Government Act\" hearings.",
  //   "last_action": "02/28/2018 | House Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Neville", "Sen. T. Neville", "Sen. J. Smallwood"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1230",
  //   "title": "Creation Of Work Status For Immigrants",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1230",
  //   "description": "Concerning the creation of a purple card program to allow persons who came to the United States without legal documentation to apply for legal work status in Colorado, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/7/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Pabon", "Sen. I. Aguilar"],
  //   "subject": ["Immigration", "Labor & Employment"]
  // }, {
  //   "bill": "HB18-1231",
  //   "title": "Repeal Columbus Day As State Legal Holiday",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1231",
  //   "description": "Concerning the repeal of Columbus day as a legal holiday, and, in connection therewith, making election day a legal holiday.",
  //   "last_action": "04/23/2018 | House Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. A. Benavidez"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1232",
  //   "title": "New School Funding Distribution Formula",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1232",
  //   "description": "Concerning the creation of a new public school funding distribution formula for the preschool through secondary public education system.",
  //   "last_action": "04/25/2018 | House Committee on Education Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Young", "Sen. D. Coram", "Sen. A. Kerr"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1233",
  //   "title": "Consumer Reporting Agency Security Freeze Minors",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1233",
  //   "description": "Concerning a consumer reporting agency's placement of a security freeze on the consumer report of a consumer who is under the charge of a representative at the request of the consumer's representative.",
  //   "last_action": "03/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Duran", "Rep. P. Lawrence", "Sen. S. Fenberg", "Sen. B. Gardner"],
  //   "subject": ["Financial Services & Commerce"]
  // }, {
  //   "bill": "HB18-1234",
  //   "title": "Internet Sweepstakes Café Revise Legal Terms",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1234",
  //   "description": "Concerning clarification of the laws governing simulated gambling activity.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. K. Becker", "Rep. P. Lundeen", "Sen. B. Gardner"],
  //   "subject": ["Business & Economic Development", "Crimes, Corrections, & Enforcement", "Gaming, Lottery, & Racing"]
  // }, {
  //   "bill": "HB18-1235",
  //   "title": "Sunset Custom Meat Processing",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1235",
  //   "description": "Concerning the continuation of the regulation of custom meat processors, and, in connection therewith, implementing the recommendations of the 2017 sunset report of the department of regulatory agencies.",
  //   "last_action": "05/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Hansen", "Rep. H. McKean", "Sen. R. Scott"],
  //   "subject": ["Agriculture"]
  // }, {
  //   "bill": "HB18-1236",
  //   "title": "Sunset Food Systems Advisory Council",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1236",
  //   "description": "Concerning the continuation of the Colorado food systems advisory council, and, in connection therewith, implementing the recommendations in the department of regulatory agencies' sunset report.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. McLachlan", "Rep. J. Becker", "Sen. R. Baumgardner"],
  //   "subject": ["Agriculture"]
  // }, {
  //   "bill": "HB18-1237",
  //   "title": "Sunset Continue Cost-benefit Analysis For Rules",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1237",
  //   "description": "Concerning the continuation of the requirements regarding the preparation of a cost-benefit analysis as administered by the department of regulatory agencies, and, in connection therewith, implementing the recommendations contained in the 2017 sunset report by the department of regulatory agencies.",
  //   "last_action": "04/25/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. K. Van Winkle", "Sen. T. Neville"],
  //   "subject": ["Business & Economic Development", "State Government"]
  // }, {
  //   "bill": "HB18-1238",
  //   "title": "Sunset Wildland-urban Interface Training Advisory Board",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1238",
  //   "description": "Concerning the continuation of the wildland-urban interface training advisory board, and, in connection therewith, implementing the recommendations of the 2017 sunset report by the department of regulatory agencies.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Jackson", "Rep. M. Catlin", "Sen. V. Marble"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1239",
  //   "title": "Sunset Environmental Management System Permit Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1239",
  //   "description": "Concerning continuation under the sunset law of the environmental management system permit program, and, in connection therewith, implementing the recommendations of the sunset report by the department of regulatory agencies by allowing the program to repeal.",
  //   "last_action": "04/12/2018 | Governor Signed",
  //   "sponsors": ["Rep. L. Landgraf", "Sen. R. Scott"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1240",
  //   "title": "Sunset Auto Theft Prevention Authority And Board",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1240",
  //   "description": "Concerning the continuation of a grant program to prevent motor vehicle theft, and, in connection therewith, implementing the sunset review recommendations of the department of regulatory agencies.",
  //   "last_action": "05/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Bridges", "Rep. J. Becker", "Sen. J. Cooke"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1241",
  //   "title": "Reimburse Expenses Restorative Justice Council",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1241",
  //   "description": "Concerning allowing reimbursement for expenses for members of the restorative justice coordinating council.",
  //   "last_action": "04/24/2018 | Senate Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Arndt", "Sen. D. Coram"],
  //   "subject": ["Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1242",
  //   "title": "Change Salary Categorizations For Certain Counties",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1242",
  //   "description": "Concerning the salary categorization of locally elected officers in specified counties.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. K. Becker", "Rep. D. Valdez", "Sen. L. Crowder", "Sen. R. Baumgardner"],
  //   "subject": ["Local Government"]
  // }, {
  //   "bill": "HB18-1243",
  //   "title": "Civil Rape Shield Law",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1243",
  //   "description": "Concerning enactment of a civil rape shield law.",
  //   "last_action": "04/25/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Foote", "Rep. C. Wist", "Sen. D. Coram", "Sen. R. Fields"],
  //   "subject": ["Civil Law"]
  // }, {
  //   "bill": "HB18-1244",
  //   "title": "Honor The Service Of Submarine Veterans",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1244",
  //   "description": "Concerning the creation of a submarine service license plate to honor the service of submarine veterans, and, in connection therewith, making an appropriation.",
  //   "last_action": "06/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Danielson", "Sen. N. Todd", "Sen. B. Gardner"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1245",
  //   "title": "Prohibit Conversion Therapy Mental Health Provider",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1245",
  //   "description": "Concerning a prohibition against a mental health care provider engaging in conversion therapy with a patient under eighteen years of age.",
  //   "last_action": "04/23/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. P. Rosenthal", "Rep. D. Michaelson Jenet", "Sen. S. Fenberg", "Sen. L. Guzman"],
  //   "subject": ["Business & Economic Development", "Children & Domestic Matters"]
  // }, {
  //   "bill": "HB18-1246",
  //   "title": "Modernization Of The Nursery Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1246",
  //   "description": "Concerning updates to the \"Colorado Nursery Act\", and, in connection therewith, modernizing the act and protecting agriculture from pests, diseases, and noxious weeds.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Danielson", "Sen. D. Coram"],
  //   "subject": ["Agriculture"]
  // }, {
  //   "bill": "HB18-1247",
  //   "title": "Frequency Of Salary Payment For Legislative Department",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1247",
  //   "description": "Concerning an exemption for the legislative department from the pending change in the payment of salaries from monthly to twice monthly.",
  //   "last_action": "04/23/2018 | House Committee on Appropriations Postpone Indefinitely",
  //   "sponsors": ["Rep. C. Duran", "Rep. P. Neville", "Sen. K. Grantham", "Sen. L. Guzman"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1248",
  //   "title": "Unauthorized Funds Transfers Consumer Protection",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1248",
  //   "description": "Concerning unauthorized electronic funds transfers.",
  //   "last_action": "04/2/2018 | House Second Reading Laid Over to 05/10/2018 - No Amendments",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. L. Sias", "Sen. K. Priola", "Sen. A. Williams"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Financial Services & Commerce"]
  // }, {
  //   "bill": "HB18-1249",
  //   "title": "Anvil Points Federal Mineral Lease Distribution",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1249",
  //   "description": "Concerning the requirement that the state treasurer distribute any federal funds related to the naval oil shale reserve land to specified counties or their federal mineral lease districts.",
  //   "last_action": "03/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Rankin", "Rep. M. Hamner", "Sen. K. Lundberg"],
  //   "subject": ["Fiscal Policy & Taxes", "State Government"]
  // }, {
  //   "bill": "HB18-1250",
  //   "title": "Analysis To Improve Compliance With Rules By Businesses.",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1250",
  //   "description": "Concerning an analysis to improve compliance with departmental rules by regulated businesses.",
  //   "last_action": "05/3/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. L. Sias", "Sen. K. Priola"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1251",
  //   "title": "Community Corrections Transition Placements",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1251",
  //   "description": "Concerning measures to improve the efficiency of the community corrections transition placements, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lee", "Rep. C. Wist", "Sen. D. Kagan", "Sen. B. Gardner"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1252",
  //   "title": "Unlawful Sale Of Academic Assignments",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1252",
  //   "description": "Concerning unlawful sale of academic materials for submission to an institution of higher education.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Roberts", "Rep. J. Wilson", "Sen. K. Priola"],
  //   "subject": ["Crimes, Corrections, & Enforcement", "Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1253",
  //   "title": "Rule Review Bill",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1253",
  //   "description": "Concerning implementation of recommendations of the committee on legal services in connection with legislative review of rules of state agencies.",
  //   "last_action": "05/11/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lee", "Rep. L. Herod", "Sen. B. Gardner"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1254",
  //   "title": "Public Trustee Deed Of Trust Foreclosure Sales",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1254",
  //   "description": "Concerning the modification of the foreclosure process on property that is encumbered by a deed of trust.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. K. Van Winkle", "Sen. J. Smallwood"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1255",
  //   "title": "Childhood Cancer Awareness Special License Plate",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1255",
  //   "description": "Concerning the creation of a childhood cancer awareness license plate, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Duran", "Rep. T. Carver", "Sen. J. Cooke", "Sen. J. Kefalas"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1256",
  //   "title": "Sunset Continue Civil Rights Division And Commission",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1256",
  //   "description": "Concerning continuation of the regulation of civil rights issues, and, in connection therewith, implementing the recommendation in the department of regulatory agencies' 2017 sunset review and report on the Colorado civil rights division and the Colorado civil rights commission to continue the division and commission and making an appropriation.",
  //   "last_action": "05/22/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Duran", "Rep. L. Herod", "Sen. B. Gardner"],
  //   "subject": ["Business & Economic Development", "Financial Services & Commerce", "Housing", "Labor & Employment", "State Government"]
  // }, {
  //   "bill": "HB18-1257",
  //   "title": "Correction To House Bill16-1316 Reinsert \"Not\"",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1257",
  //   "description": "Concerning a correction to House Bill 16-1316 by reinserting the word \"not\".",
  //   "last_action": "05/3/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Rosenthal", "Sen. J. Cooke"],
  //   "subject": ["Children & Domestic Matters", "Courts & Judicial"]
  // }, {
  //   "bill": "HB18-1258",
  //   "title": "Marijuana Accessory Consumption Establishments",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1258",
  //   "description": "Concerning authorization for an endorsement to an existing marijuana license to allow for a marijuana accessory consumption establishment for the purposes of consumer education, and, in connection therewith, making an appropriation.",
  //   "last_action": "06/4/2018 | Governor Vetoed",
  //   "sponsors": ["Rep. J. Singer", "Rep. J. Melton", "Sen. T. Neville", "Sen. S. Fenberg"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1259",
  //   "title": "Marijuana Sample For Quality Product Development",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1259",
  //   "description": "Concerning providing marijuana samples to employees for business purposes.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Gray", "Sen. V. Marble"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1260",
  //   "title": "Prescription Drug Price Transparency",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1260",
  //   "description": "Concerning prescription drug price transparency.",
  //   "last_action": "04/30/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Ginal", "Rep. D. Jackson", "Sen. D. Moreno"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1261",
  //   "title": "Colorado Arbitration Fairness Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1261",
  //   "description": "Concerning the \"Colorado Arbitration Fairness Act\".",
  //   "last_action": "04/18/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. M. Weissman", "Sen. D. Kagan"],
  //   "subject": ["Civil Law"]
  // }, {
  //   "bill": "HB18-1262",
  //   "title": "Arbitration Services Provider Transparency Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1262",
  //   "description": "Concerning the \"Arbitration Services Provider Transparency Act\".",
  //   "last_action": "04/18/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Jackson", "Rep. D. Roberts", "Sen. D. Kagan"],
  //   "subject": ["Civil Law"]
  // }, {
  //   "bill": "HB18-1263",
  //   "title": "Medical Marijuana Use For Autism And Acute Pain",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1263",
  //   "description": "Concerning adding certain conditions to the list of disabling medical conditions for medical marijuana use, and, in connection therewith, adding autism spectrum disorders.",
  //   "last_action": "06/5/2018 | Governor Vetoed",
  //   "sponsors": ["Rep. E. Hooton", "Rep. J. Melton", "Sen. D. Coram", "Sen. S. Fenberg"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1264",
  //   "title": "Changes To Revenge Pornography Crimes",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1264",
  //   "description": "Concerning measures to clarify the scope of revenge porn criminal offenses.",
  //   "last_action": "05/3/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Jackson", "Rep. T. Carver", "Sen. J. Cooke", "Sen. R. Fields"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1265",
  //   "title": "Sunset Continue Stroke Advisory Board",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1265",
  //   "description": "Concerning the continuation of the stroke advisory board in accordance with the recommendation in the department of regulatory agencies' 2017 sunset report.",
  //   "last_action": "05/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. S. Lontine", "Rep. S. Beckman", "Sen. L. Crowder"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1266",
  //   "title": "Career Development Success Program Expansion",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1266",
  //   "description": "Concerning expanding the career development success pilot program.",
  //   "last_action": "06/5/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Esgar", "Rep. J. Wilson", "Sen. O. Hill", "Sen. N. Todd"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1267",
  //   "title": "Income Tax Credit For Retrofitting Home For Health",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1267",
  //   "description": "Concerning an income tax credit for retrofitting a residence to increase the residence's visitability, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Gray", "Rep. H. McKean", "Sen. J. Tate"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1268",
  //   "title": "Recall Petition Election Special District Director",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1268",
  //   "description": "Concerning the procedures to recall a director of a special district.",
  //   "last_action": "05/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Gray", "Sen. B. Gardner"],
  //   "subject": ["Elections & Redistricting"]
  // }, {
  //   "bill": "HB18-1269",
  //   "title": "Parent Notice For Student Safety And Protection",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1269",
  //   "description": "Concerning notification to parents of charges brought against public school employees for alleged felony offenses that would result in the revocation of an educator license pursuant to title 22, Colorado Revised Statutes.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. P. Lundeen", "Rep. B. Pettersen", "Sen. O. Hill", "Sen. R. Fields"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1270",
  //   "title": "Public Utilities Commission Evaluation Of Energy Storage Systems",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1270",
  //   "description": "Concerning energy storage, and, in connection therewith, requiring the public utilities commission to establish mechanisms for investor-owned electric utilities to procure energy storage systems if certain criteria are satisfied.",
  //   "last_action": "06/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Hansen", "Rep. J. Becker", "Sen. J. Tate"],
  //   "subject": ["Business & Economic Development", "Energy"]
  // }, {
  //   "bill": "HB18-1271",
  //   "title": "Public Utilities Commission Electric Utilities Economic Development Rates",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1271",
  //   "description": "Concerning the authorization of economic development rates to be charged by electric utilities to qualifying nonresidential customers.",
  //   "last_action": "06/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Gray", "Rep. Y. Willett", "Sen. J. Tate"],
  //   "subject": ["Business & Economic Development", "Energy"]
  // }, {
  //   "bill": "HB18-1272",
  //   "title": "Network-level Distracted Driving Control Technology",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1272",
  //   "description": "Concerning the availability of network-level mobile phone distracted driving prevention technology.",
  //   "last_action": "04/25/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. M. Foote", "Rep. J. Melton", "Sen. L. Court"],
  //   "subject": ["Telecommunications & Information Technology", "Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1273",
  //   "title": "Protect Colorado Residents From Federal Government Overreach",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1273",
  //   "description": "Concerning protection for Colorado residents from federal government overreach based on a person's status.",
  //   "last_action": "04/30/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Salazar", "Rep. D. Esgar", "Sen. M. Merrifield"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1274",
  //   "title": "Reduce Greenhouse Gas Emissions by 2050",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1274",
  //   "description": "Concerning a reduction in greenhouse gas emissions in Colorado, and, in connection therewith, requiring that, by the year 2050, statewide greenhouse gas emissions be reduced by eighty percent of the levels of greenhouse gas emissions that existed in the year 2005.",
  //   "last_action": "04/11/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. K. Becker", "Rep. J. Bridges", "Sen. A. Kerr"],
  //   "subject": ["Natural Resources & Environment", "Public Health"]
  // }, {
  //   "bill": "HB18-1275",
  //   "title": "Repeal Craig Hospital License Plate Donation",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1275",
  //   "description": "Concerning the repeal of the Craig hospital license plate donation requirement.",
  //   "last_action": "04/26/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Bridges", "Sen. D. Kagan"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1276",
  //   "title": "Teaching Competent History In Public Schools",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1276",
  //   "description": "Concerning teaching civil government in public schools, and, in connection therewith, establishing the history, culture, and civil government in education commission to make recommendations to include the history, culture, and contributions of American Indians, Hispanic Americans, African Americans, and Asian Americans in the teaching and content standards for history and civics, and making an appropriation.",
  //   "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Salazar", "Sen. R. Fields"],
  //   "subject": ["Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1277",
  //   "title": "BEST Building Excellent Schools Today Financial Assistance Grant Application Requirements",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1277",
  //   "description": "Concerning a requirement that an application for a \"Building Excellent Schools Today Act\" grant of financial assistance for public school capital construction include a plan for the future use or disposition of any existing public school facility that the applicant will stop using for its current use if it receives the grant.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Becker", "Rep. D. Esgar", "Sen. R. Baumgardner", "Sen. J. Kefalas"],
  //   "subject": ["Capital Construction", "Education & School Finance (Pre & K-12)"]
  // }, {
  //   "bill": "HB18-1278",
  //   "title": "Apprentice Utilization In Public Projects",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1278",
  //   "description": "Concerning a requirement that contractors for public projects over five hundred thousand dollars that are not funded using federal money use apprentices for the parts of the project that are performed by workers in an apprenticeable occupation.",
  //   "last_action": "04/16/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. A. Benavidez", "Sen. D. Moreno"],
  //   "subject": ["Business & Economic Development"]
  // }, {
  //   "bill": "HB18-1279",
  //   "title": "Electronic Prescribing Controlled Substances",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1279",
  //   "description": "Concerning a requirement that certain practitioners prescribe controlled substances electronically.",
  //   "last_action": "04/25/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Esgar", "Sen. K. Priola", "Sen. D. Moreno"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1280",
  //   "title": "Court Appointees For Marijuana Businesses",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1280",
  //   "description": "Concerning regulatory procedures related to the appointment of a court appointee for a regulated marijuana business, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/15/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Melton", "Sen. D. Coram"],
  //   "subject": ["Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1281",
  //   "title": "Public Utilities Commission Ethics And Improved Public Information Reporting",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1281",
  //   "description": "Concerning measures to enhance the consumer protection mission of the Colorado public utilities commission, and, in connection therewith, prohibiting a person with recent connections to a regulated utility from serving on the commission and providing for periodic performance audits.",
  //   "last_action": "04/30/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Esgar", "Sen. L. Garcia"],
  //   "subject": ["Business & Economic Development", "Energy", "State Government"]
  // }, {
  //   "bill": "HB18-1282",
  //   "title": "Health Care Provider Unique Identification Per Site Or Service",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1282",
  //   "description": "Concerning a requirement that a health care provider include certain identifying information on all claims for reimbursement for health care services.",
  //   "last_action": "04/25/2018 | Governor Signed",
  //   "sponsors": ["Rep. S. Lontine", "Rep. L. Sias", "Sen. J. Smallwood", "Sen. J. Kefalas"],
  //   "subject": ["Health Care & Health Insurance", "Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1283",
  //   "title": "Classify Residential Land Change In Improvements",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1283",
  //   "description": "Concerning the classification of residential land for property tax purposes resulting from a significant change in the residential improvements located upon the land.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. A. Benavidez", "Sen. T. Neville"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1284",
  //   "title": "Disclosure Of Prescription Costs At Pharmacies",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1284",
  //   "description": "Concerning the cost of prescription drugs purchased at a pharmacy.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Buckner", "Rep. J. Wilson", "Sen. B. Martinez Humenik", "Sen. J. Kefalas"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1285",
  //   "title": "Remuneration-exempt Disability Parking Placard",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1285",
  //   "description": "Concerning parking for people with certain disabilities, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Pabon", "Sen. J. Smallwood", "Sen. N. Todd"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1286",
  //   "title": "School Nurse Give Medical Marijuana At School",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1286",
  //   "description": "Concerning allowing school personnel to give medical marijuana to a student with a medical marijuana registry card while at school.",
  //   "last_action": "06/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Roberts", "Sen. I. Aguilar", "Sen. V. Marble"],
  //   "subject": ["Education & School Finance (Pre & K-12)", "Health Care & Health Insurance", "Liquor, Tobacco, & Marijuana"]
  // }, {
  //   "bill": "HB18-1287",
  //   "title": "Reauthorize Commission Criminal And Juvenile Justice",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1287",
  //   "description": "Concerning the extension of the repeal of the Colorado commission on criminal and juvenile justice, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Weissman", "Sen. J. Cooke", "Sen. D. Kagan"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1288",
  //   "title": "Conflict-free Case Management",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1288",
  //   "description": "Concerning the implementation of conflict-free case management for individuals receiving home- and community-based services under the medical assistance program.",
  //   "last_action": "04/24/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Young", "Rep. F. Winter", "Sen. B. Martinez Humenik"],
  //   "subject": ["Health Care & Health Insurance", "Public Health"]
  // }, {
  //   "bill": "HB18-1289",
  //   "title": "Exempt Local Government School Districts Forced Pooling",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1289",
  //   "description": "Concerning an exemption from forced pooling of certain governmental entities that own mineral rights.",
  //   "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. M. Foote", "Rep. D. Young", "Sen. M. Jones"],
  //   "subject": ["Energy", "Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1290",
  //   "title": "Sunset Certification Of Conservation Easement Holders",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1290",
  //   "description": "Concerning the continuation of the certification of conservation easement holders, and, in connection therewith, implementing the recommendations of the 2017 sunset report by the department of regulatory agencies.",
  //   "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Roberts", "Rep. P. Lawrence", "Sen. J. Sonnenberg"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1291",
  //   "title": "Sunset Conservation Easement Oversight Commission",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1291",
  //   "description": "Concerning the continuation of the conservation easement oversight commission, and, in connection therewith, implementing the recommendations of the 2017 sunset report by the department of regulatory agencies.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. F. Winter", "Rep. D. Thurlow", "Sen. J. Sonnenberg"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1292",
  //   "title": "Pilot Program Assistance Person Experiencing Homelessness",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1292",
  //   "description": "Concerning the creation of the pilot state access to resources and training (START) grant program for persons experiencing homelessness, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. H. McKean", "Rep. P. Rosenthal", "Sen. L. Court", "Sen. K. Priola"],
  //   "subject": ["Civil Law", "Local Government", "Public Health"]
  // }, {
  //   "bill": "HB18-1293",
  //   "title": "Fiscal Year 18-19 Legislative Appropriation Bill",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1293",
  //   "description": "Concerning payment of expenses of the legislative department.",
  //   "last_action": "04/9/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Duran", "Rep. P. Neville", "Sen. K. Grantham", "Sen. L. Guzman"],
  //   "subject": ["State Government", "State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1294",
  //   "title": "Sunset Continue Regulation Nursing Home Administrators",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1294",
  //   "description": "Concerning the continuation of the regulation of nursing home administrators by the board of examiners of nursing home administrators in the division of professions and occupations in the department of regulatory agencies, and, in connection therewith, requiring the board to record by board member each vote regarding licensee discipline.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. S. Lontine", "Rep. J. Buckner", "Sen. L. Crowder"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1295",
  //   "title": "Hemp Products Deemed Not Adulterated Or Misbranded",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1295",
  //   "description": "Concerning modifications to the \"Colorado Food and Drug Act\" to allow products containing industrial hemp, and, in connection therewith, establishing that products containing industrial hemp are not adulterated or misbranded by virtue of containing industrial hemp.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Salazar", "Rep. D. Esgar", "Sen. D. Coram"],
  //   "subject": ["Agriculture"]
  // }, {
  //   "bill": "HB18-1296",
  //   "title": "Unattended Motor Vehicles Remote Starter Systems",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1296",
  //   "description": "Concerning an expansion of the ability to leave a motor vehicle unattended in certain circumstances.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Melton", "Rep. J. Everett", "Sen. V. Marble", "Sen. D. Moreno"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1297",
  //   "title": "Climate Change Preparedness And Resiliency",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1297",
  //   "description": "Concerning a comprehensive plan to proactively address the anticipated impacts on Colorado of global climate change, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/1/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. F. Winter", "Rep. B. Pettersen", "Sen. K. Donovan"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1298",
  //   "title": "Colorado Secure Savings Plan",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1298",
  //   "description": "Concerning the creation of the Colorado secure savings plan.",
  //   "last_action": "05/1/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. B. Pettersen", "Rep. J. Bridges", "Sen. K. Donovan", "Sen. N. Todd"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1299",
  //   "title": "Electronic Filing Title Registration Motor Vehicle",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1299",
  //   "description": "Concerning electronic documents related to the ownership of a vehicle that is regulated by the department of revenue, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Bridges", "Rep. P. Neville", "Sen. R. Scott", "Sen. R. Zenzinger"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1300",
  //   "title": "Bachelor Nursing Completion Degree Local District College",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1300",
  //   "description": "Concerning granting authority for local district colleges to provide a bachelor of science degree in nursing program as a completion degree to students who have or are pursuing an associate degree in nursing.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Young", "Rep. P. Buck", "Sen. V. Marble", "Sen. J. Cooke"],
  //   "subject": ["Health Care & Health Insurance", "Higher Education"]
  // }, {
  //   "bill": "HB18-1301",
  //   "title": "Protect Water Quality Adverse Mining Impacts",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1301",
  //   "description": "Concerning the protection of water quality from adverse impacts caused by mineral mining.",
  //   "last_action": "04/25/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. D. Roberts", "Rep. B. McLachlan", "Sen. S. Fenberg", "Sen. K. Donovan"],
  //   "subject": ["Natural Resources & Environment"]
  // }, {
  //   "bill": "HB18-1302",
  //   "title": "Toxicology Lab Certification Waiver Colorado Department Of Public Health And Environment",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1302",
  //   "description": "Concerning the allowance of the department of public health and environment to waive certification requirements for toxicology laboratories that have been accredited by an entity using recognized forensic standards.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Ginal", "Rep. L. Landgraf", "Sen. V. Marble"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1303",
  //   "title": "Youth Sports Coach Exempt Employment Security Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1303",
  //   "description": "Concerning exemption of nonprofit youth sports organization coaches from the \"Colorado Employment Security Act\".",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. C. Wist", "Rep. A. Garnett", "Sen. J. Tate"],
  //   "subject": ["Labor & Employment"]
  // }, {
  //   "bill": "HB18-1304",
  //   "title": "DOR Department Of Revenue Enforcement Measures Collection Of Tax Owed",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1304",
  //   "description": "Concerning enforcement measures available to the department of revenue for the collection of delinquent taxes.",
  //   "last_action": "04/18/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. A. Benavidez", "Sen. L. Court"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1305",
  //   "title": "Income Tax Check-off Young Americans Financial Education",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1305",
  //   "description": "Concerning a voluntary contribution designation benefiting the Young Americans Center for Financial Education fund that appears on the state individual tax return forms.",
  //   "last_action": "05/4/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Coleman", "Rep. P. Neville", "Sen. T. Neville"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1306",
  //   "title": "Improving Educational Stability For Foster Youth",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1306",
  //   "description": "Concerning ensuring educational stability for students in out-of-home placement, and, in connection therewith, making an appropriation.",
  //   "last_action": "06/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Michaelson Jenet", "Sen. D. Coram", "Sen. D. Moreno"],
  //   "subject": ["Education & School Finance (Pre & K-12)", "Human Services"]
  // }, {
  //   "bill": "HB18-1307",
  //   "title": "Limit Access To Products With Dextromethorphan",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1307",
  //   "description": "Concerning restricting the availability to children of products that contain dextromethorphan.",
  //   "last_action": "05/11/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Singer", "Rep. P. Lee", "Sen. B. Gardner", "Sen. J. Cooke"],
  //   "subject": ["Children & Domestic Matters", "Crimes, Corrections, & Enforcement", "Public Health"]
  // }, {
  //   "bill": "HB18-1308",
  //   "title": "Workers' Compensation Out-of-state Workers Temporarily In Colorado",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1308",
  //   "description": "Concerning an exemption from the \"Workers' Compensation Act of Colorado\" for nonresident employers whose employees are temporarily working in Colorado.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. T. Kraft-Tharp", "Rep. J. Becker", "Sen. O. Hill", "Sen. D. Kagan"],
  //   "subject": ["Labor & Employment"]
  // }, {
  //   "bill": "HB18-1309",
  //   "title": "Programs Addressing Educator Shortages",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1309",
  //   "description": "Concerning programs addressing educator shortages, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/29/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Coleman", "Rep. J. Wilson", "Sen. O. Hill"],
  //   "subject": ["Education & School Finance (Pre & K-12)", "Higher Education"]
  // }, {
  //   "bill": "HB18-1310",
  //   "title": "Emergency Employment Support Services Pilot Program DOLA",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1310",
  //   "description": "Concerning the creation of a pilot program for emergency employment support services.",
  //   "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Coleman", "Rep. P. Covarrubias", "Sen. R. Fields", "Sen. K. Priola"],
  //   "subject": ["Labor & Employment"]
  // }, {
  //   "bill": "HB18-1311",
  //   "title": "Single Geographic Rating Area Individual Health Plan",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1311",
  //   "description": "Concerning the method for setting rates for individual health insurance plans offered in the state.",
  //   "last_action": "04/19/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
  //   "sponsors": ["Rep. B. Rankin", "Rep. M. Hamner"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1312",
  //   "title": "Open Internet Customer Protections In Colorado",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1312",
  //   "description": "Concerning the protection of the open internet, and, in connection therewith, disqualifying an internet service provider from receiving high cost support mechanism money or other money received to finance broadband deployment if the internet service provider engages in certain practices that interfere with the open internet and requiring an internet service provider that engages in such practices to refund any such money received.",
  //   "last_action": "04/23/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. C. Hansen", "Rep. L. Herod", "Sen. K. Donovan"],
  //   "subject": ["Telecommunications & Information Technology"]
  // }, {
  //   "bill": "HB18-1313",
  //   "title": "Pharmacists To Serve As Practitioners",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1313",
  //   "description": "Concerning the allowance of a pharmacist to serve as a practitioner under certain circumstances.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Ginal", "Rep. J. Becker", "Sen. I. Aguilar", "Sen. K. Priola"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1314",
  //   "title": "Drone Interference With Public Safety Operations",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1314",
  //   "description": "Concerning prohibiting the use of unmanned aircraft systems to obstruct public safety operations.",
  //   "last_action": "06/6/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Ginal", "Rep. P. Lawrence", "Sen. J. Cooke"],
  //   "subject": ["Crimes, Corrections, & Enforcement"]
  // }, {
  //   "bill": "HB18-1315",
  //   "title": "Manufactured Home Sales Tax Exemption",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1315",
  //   "description": "Concerning the expansion of the sales and use tax exemption for manufactured homes constructed in compliance with a federal safety act.",
  //   "last_action": "05/24/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. McLachlan", "Rep. J. Becker", "Sen. J. Kefalas", "Sen. K. Lundberg"],
  //   "subject": ["Fiscal Policy & Taxes"]
  // }, {
  //   "bill": "HB18-1316",
  //   "title": "Extend Colorado Department Of Labor And Employment Skilled Worker, Outreach, Recruitment, and Key Training Grant Program",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1316",
  //   "description": "Concerning modifications to the skilled worker training program administered by the department of labor and employment, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/24/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Pabon", "Rep. T. Exum", "Sen. J. Cooke", "Sen. A. Williams"],
  //   "subject": ["Labor & Employment"]
  // }, {
  //   "bill": "HB18-1317",
  //   "title": "Exempt Nonprofits For Use Of Electronic Gaming Machines",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1317",
  //   "description": "Concerning an exemption from the prohibition on the use of an electronic gaming machine for nonprofit entities licensed under the \"Bingo and Raffles Law\".",
  //   "last_action": "04/3/2018 | House Committee on Business Affairs and Labor Postpone Indefinitely",
  //   "sponsors": ["Rep. J. Reyher"],
  //   "subject": ["Business & Economic Development", "Crimes, Corrections, & Enforcement", "Gaming, Lottery, & Racing"]
  // }, {
  //   "bill": "HB18-1318",
  //   "title": "Require Presidential Candidate Disclose Tax Return",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1318",
  //   "description": "Concerning a requirement that candidates for certain federal executive offices file income tax returns with the secretary of state.",
  //   "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
  //   "sponsors": ["Rep. E. Hooton", "Rep. C. Hansen", "Sen. A. Kerr"],
  //   "subject": ["Elections & Redistricting"]
  // }, {
  //   "bill": "HB18-1319",
  //   "title": "Services Successful Adulthood Former Foster Youth",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1319",
  //   "description": "Concerning the extension of services for a successful adulthood for former foster care youth who are between the ages of eighteen years and twenty-one years, and, in connection therewith, making an appropriation.",
  //   "last_action": "05/18/2018 | Governor Signed",
  //   "sponsors": ["Rep. J. Singer", "Rep. D. Young", "Sen. B. Gardner"],
  //   "subject": ["Children & Domestic Matters", "Human Services"]
  // }, {
  //   "bill": "HB18-1320",
  //   "title": "Deregulation Of Large-market Taxicab Service",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1320",
  //   "description": "Concerning a reduction in regulation of large-market taxicab service from regulation as a common carrier to regulation as a motor carrier of passengers.",
  //   "last_action": "06/1/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Pabon", "Sen. C. Jahn"],
  //   "subject": ["Transportation & Motor Vehicles"]
  // }, {
  //   "bill": "HB18-1321",
  //   "title": "Efficient Administration Medicaid Transportation",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1321",
  //   "description": "Concerning efficient administration of nonemergency medical transportation within the existing benefit under the medical assistance program, and, in connection therewith, making and reducing an appropriation.",
  //   "last_action": "05/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. H. McKean", "Rep. J. Arndt", "Sen. D. Moreno", "Sen. B. Martinez Humenik"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1322",
  //   "title": "2018-19 Long Appropriation Act",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1322",
  //   "description": "Concerning the provision for payment of the expenses of the executive, legislative, and judicial departments of the state of Colorado, and of its agencies and institutions, for and during the fiscal year beginning July 1, 2018, except as otherwise noted.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
  //   "subject": ["State Revenue & Budget"]
  // }, {
  //   "bill": "HB18-1323",
  //   "title": "Pay For Success Contracts Pilot Program Funding",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1323",
  //   "description": "Concerning transfers of money to a newly created office of state planning and budgeting youth pay for success initiatives account within the pay for success contracts fund, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. B. Rankin", "Sen. D. Moreno"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1324",
  //   "title": "Codify Governor's Commission On Community Service",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1324",
  //   "description": "Concerning the continuation of the governor's commission on community service, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Sen. K. Lundberg"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1325",
  //   "title": "Digital Trunked Radio System Coverage Gaps",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1325",
  //   "description": "Concerning measures to address coverage gaps in the statewide digital trunked radio system, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. M. Hamner", "Rep. B. Rankin", "Sen. K. Lambert"],
  //   "subject": ["State Government"]
  // }, {
  //   "bill": "HB18-1326",
  //   "title": "Support For Transition From Institutional Settings",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1326",
  //   "description": "Concerning support for persons interested in transitioning from an institutional setting, and, in connection therewith, making and reducing appropriations.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Young", "Sen. K. Lambert"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1327",
  //   "title": "All-payer Health Claims Database",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1327",
  //   "description": "Concerning the all-payer health claims database, and, in connection therewith, making an appropriation.",
  //   "last_action": "04/23/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Young", "Sen. D. Moreno"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
  //   "bill": "HB18-1328",
  //   "title": "Redesign Residential Child Health Care Waiver",
  //   "bill_url": "https://leg.colorado.gov/bills/hb18-1328",
  //   "description": "Concerning the children's habilitation residential waiver program, and, in connection therewith, making and reducing an appropriation.",
  //   "last_action": "04/30/2018 | Governor Signed",
  //   "sponsors": ["Rep. D. Young", "Sen. K. Lambert", "Sen. D. Moreno"],
  //   "subject": ["Health Care & Health Insurance"]
  // }, {
    "bill": "HB18-1329",
    "title": "Supplemental Payment Durable Medical Equipment",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1329",
    "description": "Concerning a supplemental state payment to qualified providers of durable medical equipment who experienced a decrease in reimbursement in the 2017-18 state fiscal year as a result of the implementation of the federal \"21st Century Cures Act\", and, in connection therewith, making an appropriation.",
    "last_action": "05/4/2018 | Governor Signed",
    "sponsors": ["Rep. B. Rankin", "Sen. D. Moreno"],
    "subject": ["Health Care & Health Insurance"]
  }, {
    "bill": "HB18-1330",
    "title": "Supplemental Payment Office-administered Drugs Medicaid",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1330",
    "description": "Concerning a supplemental state payment relating to certain office-administered oncology-related drugs for qualified providers under the medical assistance program who experienced a reduction in reimbursement payments in the 2017-18 state fiscal year as a result of the implementation of the federal final rules for covered outpatient drugs, and, in connection therewith, making an appropriation.",
    "last_action": "04/23/2018 | Governor Signed",
    "sponsors": ["Rep. D. Young", "Sen. D. Moreno"],
    "subject": ["Health Care & Health Insurance"]
  }, {
    "bill": "HB18-1331",
    "title": "Higher Education Open Educational Resources",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1331",
    "description": "Concerning expanding the use of open educational resources at public institutions of higher education, and, in connection therewith, creating the Colorado open educational resources council, creating a grant program to support the creation and use of open educational resources, and making an appropriation.",
    "last_action": "04/30/2018 | Governor Signed",
    "sponsors": ["Rep. D. Young", "Rep. B. Rankin", "Sen. K. Lundberg"],
    "subject": ["Higher Education"]
  }, {
    "bill": "HB18-1332",
    "title": "Collaborative Educator Preparation Program Grants",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1332",
    "description": "Concerning creation of a grant program to support collaborative educator preparation initiatives to address the teacher shortage in Colorado, and, in connection therewith, making an appropriation.",
    "last_action": "04/30/2018 | Governor Signed",
    "sponsors": ["Rep. M. Hamner", "Rep. B. Rankin", "Sen. D. Moreno"],
    "subject": ["Higher Education"]
  }, {
    "bill": "HB18-1333",
    "title": "Concerning part C child find responsibilities of state departments, and, in connection therewith, making an appropriation.",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1333",
    "description": "Concerning part C child find responsibilities of state departments, and, in connection therewith, making an appropriation.",
    "last_action": "04/30/2018 | Governor Signed",
    "sponsors": ["Rep. D. Young", "Sen. K. Lambert"],
    "subject": ["Education & School Finance (Pre & K-12)", "Human Services"]
  }, {
    "bill": "HB18-1334",
    "title": "Extend Transitional Jobs Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1334",
    "description": "Concerning an extension of the transitional jobs program, and, in connection therewith, making an appropriation.",
    "last_action": "04/30/2018 | Governor Signed",
    "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
    "subject": ["Human Services"]
  }, {
    "bill": "HB18-1335",
    "title": "County Child Care Assistance Program Block Grants",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1335",
    "description": "Concerning the Colorado child care assistance program, and, in connection therewith, establishing eligibility requirements for all counties and creating a new formula to determine the amount of block grants to counties.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. D. Young", "Sen. K. Lundberg"],
    "subject": ["Human Services"]
  }, {
    "bill": "HB18-1336",
    "title": "Repeal Local Government Retail Marijuana Impact Grant Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1336",
    "description": "Concerning the repeal of the local government retail marijuana impact grant program.",
    "last_action": "04/30/2018 | Governor Signed",
    "sponsors": ["Rep. D. Young", "Sen. K. Lambert"],
    "subject": ["Local Government"]
  }, {
    "bill": "HB18-1337",
    "title": "Veterans One-stop Center In Grand Junction",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1337",
    "description": "Concerning a veterans one-stop center in Grand Junction, and, in connection therewith, making an appropriation.",
    "last_action": "04/30/2018 | Governor Signed",
    "sponsors": ["Rep. M. Hamner", "Rep. B. Rankin", "Sen. K. Lambert"],
    "subject": ["Military & Veterans"]
  }, {
    "bill": "HB18-1338",
    "title": "Reduced Revenue Severance Tax Operational Fund Transfers",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1338",
    "description": "Concerning transfers to address the reduction of revenues in the severance tax operational fund.",
    "last_action": "05/4/2018 | Governor Signed",
    "sponsors": ["Rep. B. Rankin", "Sen. K. Lambert"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1339",
    "title": "Background Checks Employees Access Federal Tax Information",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1339",
    "description": "Concerning a requirement for fingerprint-based criminal history record checks for individuals with access to federal tax information, and, in connection therewith, making an appropriation.",
    "last_action": "04/30/2018 | Governor Signed",
    "sponsors": ["Rep. B. Rankin", "Sen. K. Lambert"],
    "subject": ["Fiscal Policy & Taxes", "State Government"]
  }, {
    "bill": "HB18-1340",
    "title": "Transfers Of Money For State's Infrastructure",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1340",
    "description": "Concerning transfers of money to be used for the state's infrastructure.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
    "subject": ["Capital Construction", "State Government", "Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1341",
    "title": "Apprenticeship And Vocational Technical Training",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1341",
    "description": "Concerning creation of the Colorado state apprenticeship resource directory, and, in connection therewith, making an appropriation.",
    "last_action": "04/25/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. J. Danielson", "Rep. P. Covarrubias", "Sen. S. Fenberg", "Sen. D. Coram"],
    "subject": ["Business & Economic Development"]
  }, {
    "bill": "HB18-1342",
    "title": "Allow Pre-Colorado Common Interest Ownership Act Homeowners' Association Members to Veto Homeowners' Association Budget ",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1342",
    "description": "Concerning a requirement that a common interest community created in Colorado before July 1, 1992, comply with a provision of the \"Colorado Common Interest Ownership Act\" that allows a majority of the unit owners in a common interest community to veto a budget proposed by the executive board of the common interest community.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. J. Melton", "Sen. N. Todd"],
    "subject": ["Housing"]
  }, {
    "bill": "HB18-1343",
    "title": "Veterans' Service-to-career Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1343",
    "description": "Concerning the continuation of the \"Colorado Veterans' Service-to-career Program\", and, in connection therewith, making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. P. Lee", "Rep. T. Carver", "Sen. K. Lambert", "Sen. N. Todd"],
    "subject": ["Labor & Employment"]
  }, {
    "bill": "HB18-1344",
    "title": "Relief From Criminal Collateral Consequences",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1344",
    "description": "Concerning relief from collateral consequences of criminal actions.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. M. Weissman", "Rep. L. Sias", "Sen. D. Coram", "Sen. D. Moreno"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1345",
    "title": "Electric Transmission Lines Right Of First Refusal",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1345",
    "description": "Concerning a process by which an incumbent electric utility may exercise a right of first refusal to construct an electric transmission line that has been approved for construction pursuant to a federal regional transmission planning requirement.",
    "last_action": "04/26/2018 | House Committee on Transportation & Energy Postpone Indefinitely",
    "sponsors": ["Rep. J. Arndt", "Rep. C. Hansen", "Sen. D. Coram", "Sen. D. Moreno"],
    "subject": ["Energy"]
  }, {
    "bill": "HB18-1346",
    "title": "Abuse Of Youth Under 21 In Care Of Institution",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1346",
    "description": "Concerning child abuse related to youth who are under the continuing jurisdiction of the court in an out-of-home placement when they are younger than twenty-one years of age.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. J. Singer", "Rep. L. Landgraf", "Sen. J. Smallwood", "Sen. J. Kefalas"],
    "subject": ["Children & Domestic Matters", "Human Services"]
  }, {
    "bill": "HB18-1347",
    "title": "Biennial Registration Motor Vehicles Department Revenue",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1347",
    "description": "Concerning the biennial registration of motor vehicles with the department of revenue.",
    "last_action": "04/25/2018 | House Committee on Transportation & Energy Postpone Indefinitely",
    "sponsors": ["Rep. S. Sandridge"],
    "subject": ["Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1348",
    "title": "Child Welfare Information And Services",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1348",
    "description": "Concerning families involved in the child welfare system, and, in connection therewith, prioritizing services and providing support for foster parents.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. J. Singer", "Rep. L. Landgraf", "Sen. B. Gardner", "Sen. J. Kefalas"],
    "subject": ["Human Services"]
  }, {
    "bill": "HB18-1349",
    "title": "Department Of Transportation Waiver Valuations",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1349",
    "description": "Concerning the use of waiver valuations by the department of transportation, and, in connection therewith, extending the department's existing authority under state law to use waiver valuations when valuing property that it owns and seeks to dispose of to the maximum extent permitted by federal law and regulations and clarifying that a waiver valuation is not an appraisal and that an individual, including a licensed or certified real estate appraiser, is not an appraiser for purposes of the state laws regulating appraisers when the individual performs a waiver valuation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. J. Ginal", "Sen. J. Cooke"],
    "subject": ["Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1350",
    "title": "Machine Tool Sales Tax Exemption For Scrap Metal",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1350",
    "description": "Concerning the sales and use tax treatment of equipment used to manufacture new metal stock from scrap or end-of-life-cycle metals, and, in connection therewith, making an appropriation.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. T. Kraft-Tharp", "Sen. K. Priola"],
    "subject": ["Fiscal Policy & Taxes"]
  }, {
    "bill": "HB18-1351",
    "title": "Signage For Old Spanish National Historic Trail",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1351",
    "description": "Concerning signage for the old Spanish trail.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. D. Valdez", "Rep. P. Covarrubias", "Sen. L. Crowder", "Sen. L. Garcia"],
    "subject": ["State Government", "Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1352",
    "title": "Oil And Gas Facilities Distance From School Property",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1352",
    "description": "Concerning a clarification of the minimum distance from which certain oil and gas facilities must be located from any school.",
    "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. M. Foote", "Rep. M. Gray", "Sen. M. Jones", "Sen. I. Aguilar"],
    "subject": ["Energy", "Natural Resources & Environment"]
  }, {
    "bill": "HB18-1353",
    "title": "Defense Counsel In Municipal Court Grant Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1353",
    "description": "Concerning the creation of a grant program to reimburse local governments for costs associated with the provision of defense counsel to certain defendants at their first appearances in municipal courts, and, in connection therewith, making an appropriation.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. S. Lontine", "Rep. T. Carver", "Sen. V. Marble"],
    "subject": ["Courts & Judicial", "Local Government"]
  }, {
    "bill": "HB18-1354",
    "title": "Powersports Vehicle Written Warranties",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1354",
    "description": "Concerning a requirement that written warranties for powersports vehicles be honored.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. H. McKean", "Sen. R. Zenzinger"],
    "subject": ["Business & Economic Development", "Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1355",
    "title": "Public Education Accountability System",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1355",
    "description": "Concerning changes to the accountability system for the elementary and secondary public education system to strengthen the accountability system for the benefit of students.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. B. Pettersen", "Rep. L. Sias", "Sen. B. Gardner", "Sen. D. Moreno"],
    "subject": ["Education & School Finance (Pre & K-12)"]
  }, {
    "bill": "HB18-1356",
    "title": "Add Cross Reference to Failure To Register Crime",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1356",
    "description": "Concerning adding a nonsubstantive cross reference to the crime of failure to register as a sex offender.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. D. Thurlow", "Sen. D. Moreno"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1357",
    "title": "Behavioral Health Care Ombudsperson Parity Reports",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1357",
    "description": "Concerning access to behavioral health care services, and, in connection therewith, establishing an ombudsman for behavioral health access to care to assist consumers in accessing care, requiring the commissioner of insurance to report on compliance with mental health parity laws, and making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. D. Michaelson Jenet", "Sen. B. Gardner", "Sen. A. Williams"],
    "subject": ["Health Care & Health Insurance", "Public Health"]
  }, {
    "bill": "HB18-1358",
    "title": "Health Care Charges Billing Required Disclosures",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1358",
    "description": "Concerning required disclosures pertaining to charges for health care.",
    "last_action": "04/27/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
    "sponsors": ["Rep. M. Foote", "Rep. S. Beckman", "Sen. K. Lundberg", "Sen. I. Aguilar"],
    "subject": ["Health Care & Health Insurance", "Insurance"]
  }, {
    "bill": "HB18-1359",
    "title": "Colorado Charitable Contribution Income Tax Deduction",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1359",
    "description": "Concerning the removal of the current calculation threshold that limits the Colorado charitable contribution income tax deduction.",
    "last_action": "05/7/2018 | House Committee on Appropriations Postpone Indefinitely",
    "sponsors": ["Rep. A. Benavidez", "Rep. D. Pabon"],
    "subject": ["Fiscal Policy & Taxes"]
  }, {
    "bill": "HB18-1360",
    "title": "Increase Number Historical Society Board Members",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1360",
    "description": "Concerning the expansion of the number of directors on the board of directors of the state historical society.",
    "last_action": "05/21/2018 | Governor Signed",
    "sponsors": ["Rep. F. Winter", "Rep. P. Lawrence", "Sen. B. Martinez Humenik", "Sen. N. Todd"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1361",
    "title": "Eligibility For Veteran Vietnam War License Plate",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1361",
    "description": "Concerning expanded eligibility for a veteran of the Vietnam war specialty license plate.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. T. Exum", "Rep. D. Valdez", "Sen. A. Williams"],
    "subject": ["Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1362",
    "title": "Drunk And Impaired Driving Task Force Membership",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1362",
    "description": "Concerning the membership expansion of the Colorado task force on drunk and impaired driving.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. J. Arndt", "Sen. J. Tate"],
    "subject": ["Crimes, Corrections, & Enforcement", "Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1363",
    "title": "Recommendations Of Child Support Commission",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1363",
    "description": "Concerning legislative recommendations of the child support commission, and, in connection therewith, making an appropriation.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. J. Singer", "Rep. L. Landgraf", "Sen. L. Crowder"],
    "subject": ["Children & Domestic Matters"]
  }, {
    "bill": "HB18-1364",
    "title": "Sunset Colorado Council Persons With Disabilities",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1364",
    "description": "Concerning the continuation of the Colorado advisory council for persons with disabilities, and, in connection therewith, implementing the sunset review recommendations of the department of regulatory agencies, and making an appropriation.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. D. Michaelson Jenet", "Rep. L. Landgraf", "Sen. B. Martinez Humenik", "Sen. R. Zenzinger"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1365",
    "title": "Primary Care Infrastructure Creation",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1365",
    "description": "Concerning a primary care payment reform collaborative to evaluate investment in primary care.",
    "last_action": "05/10/2018 | House Committee on Legislative Council Postpone Indefinitely",
    "sponsors": ["Rep. J. Ginal", "Rep. L. Sias", "Sen. K. Priola", "Sen. D. Moreno"],
    "subject": ["Health Care & Health Insurance"]
  }, {
    "bill": "HB18-1366",
    "title": "Allow Local College District To Sell Or Lease Property",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1366",
    "description": "Concerning a local college district's authority to manage district property.",
    "last_action": "05/25/2018 | Governor Signed",
    "sponsors": ["Rep. D. Roberts", "Sen. K. Donovan"],
    "subject": ["Higher Education"]
  }, {
    "bill": "HB18-1367",
    "title": "Leadership Professional Development For School Principals",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1367",
    "description": "Concerning professional development in leadership for public school principals, and, in connection therewith, creating the school leadership pilot program and making an appropriation.",
    "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. B. McLachlan", "Rep. J. Wilson", "Sen. K. Priola"],
    "subject": ["Education & School Finance (Pre & K-12)"]
  }, {
    "bill": "HB18-1368",
    "title": "Local Control Of Minimum Wage",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1368",
    "description": "Concerning the repeal of the prohibitions on local governments enacting minimum wage laws.",
    "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. J. Danielson", "Rep. J. Melton", "Sen. M. Merrifield", "Sen. D. Moreno"],
    "subject": ["Children & Domestic Matters", "Labor & Employment"]
  }, {
    "bill": "HB18-1369",
    "title": "Obsolete References Proposition AA Refund Account",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1369",
    "description": "Concerning repealing obsolete statutory references to the repealed proposition AA refund account.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. E. Hooton", "Sen. D. Moreno"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1370",
    "title": "Drug Coverage Health Plan",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1370",
    "description": "Concerning a prohibition against excluding a drug from a health coverage plan if the drug was approved by the plan for coverage of the covered person at the time the covered person enrolled in the plan.",
    "last_action": "05/3/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
    "sponsors": ["Rep. D. Esgar", "Rep. J. Singer", "Sen. C. Jahn"],
    "subject": ["Health Care & Health Insurance", "Insurance"]
  }, {
    "bill": "HB18-1371",
    "title": "Capital Construction Budget Items",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1371",
    "description": "Concerning capital construction budget items, and, in connection therewith, codifying the three-year period that capital construction budget items remain available and clarifying the deadlines for the submission of capital construction budget requests, budget request amendments, and budget request amendments that are related to a request for a supplemental appropriation.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. D. Esgar", "Rep. J. Becker", "Sen. J. Kefalas", "Sen. R. Baumgardner"],
    "subject": ["Capital Construction"]
  }, {
    "bill": "HB18-1372",
    "title": "Exempt Fund From Capital Construction Funding Mechanism",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1372",
    "description": "Concerning an exemption of the regional center depreciation account in the capital construction fund from the definition of cash fund for purposes of the requirements under the automatic cash fund funding mechanism for payment of future costs attributable to certain of the state's capital assets.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. D. Esgar", "Rep. J. Becker", "Sen. J. Kefalas"],
    "subject": ["Capital Construction", "State Government"]
  }, {
    "bill": "HB18-1373",
    "title": "Private Entities Use State Telecommunications Network",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1373",
    "description": "Concerning the use of the state telecommunications network by private entities through public-private partnerships, and, in connection therewith, relocating laws related to the state telecommunications network from the department of public safety's statutes to the statutes regarding telecommunications coordination within state government.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. J. Becker", "Rep. C. Hansen", "Sen. R. Baumgardner", "Sen. J. Kefalas"],
    "subject": ["Capital Construction", "State Government", "Telecommunications & Information Technology"]
  }, {
    "bill": "HB18-1374",
    "title": "Controlled Maintenance Financed Acquired Prop",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1374",
    "description": "Concerning controlled maintenance needs of real property acquired through a lease-purchase agreement.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. C. Hansen", "Rep. D. Esgar", "Sen. J. Kefalas", "Sen. R. Baumgardner"],
    "subject": ["Capital Construction", "State Government"]
  }, {
    "bill": "HB18-1375",
    "title": "Revisor's Bill",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1375",
    "description": "Concerning the nonsubstantive revision of statutes in the Colorado Revised Statutes, as amended, and, in connection therewith, amending or repealing obsolete, imperfect, and inoperative law to preserve the legislative intent, effect, and meaning of the law.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. Y. Willett", "Rep. P. Lee", "Sen. B. Gardner"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1376",
    "title": "Regulate Residential Services And Supports Providers",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1376",
    "description": "Concerning the regulation of individual residential services and supports providers for persons with intellectual and developmental disabilities, and, in connection therewith, making an appropriation.",
    "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. D. Pabon", "Sen. I. Aguilar"],
    "subject": ["Housing", "Human Services"]
  }, {
    "bill": "HB18-1377",
    "title": "Prohibit Seeking Salary Information Job Applicant",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1377",
    "description": "Concerning making it an unfair employment practice for an employer to seek earnings history about an applicant for employment.",
    "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. J. Coleman", "Rep. B. Pettersen", "Sen. K. Donovan", "Sen. D. Moreno"],
    "subject": ["Labor & Employment"]
  }, {
    "bill": "HB18-1378",
    "title": "Equal Pay For Equal Work Act",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1378",
    "description": "Concerning the creation of the \"Equal Pay for Equal Work Act\" in order to implement measures to prevent pay disparities, and, in connection therewith, promoting pay transparency and making an appropriation.",
    "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. J. Danielson", "Rep. J. Buckner", "Sen. K. Donovan", "Sen. R. Fields"],
    "subject": ["Labor & Employment"]
  }, {
    "bill": "HB18-1379",
    "title": "Public School Finance",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1379",
    "description": "Concerning the financing of public schools, and, in connection therewith, making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. B. Pettersen", "Rep. J. Wilson", "Sen. O. Hill"],
    "subject": ["Education & School Finance (Pre & K-12)"]
  }, {
    "bill": "HB18-1380",
    "title": "Grants For Property Tax Rent And Heat",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1380",
    "description": "Concerning the property-related expense assistance grants for low-income seniors and individuals with disabilities, and, in connection therewith, making an appropriation.",
    "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. M. Weissman", "Rep. T. Exum", "Sen. J. Kefalas", "Sen. B. Martinez Humenik"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1381",
    "title": "Permissive Medical Marijuana Vertical Integration",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1381",
    "description": "Concerning operations related to the sale of medical marijuana in the regulated medical marijuana market, and, in connection therewith, moving from the seventy percent own source requirement to a one-year transition period of fifty percent own source requirement to an elimination of the own source requirement.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. M. Gray", "Rep. K. Van Winkle", "Sen. T. Neville", "Sen. C. Jahn"],
    "subject": ["Liquor, Tobacco, & Marijuana"]
  }, {
    "bill": "HB18-1382",
    "title": "Create Energy Legislation Review Committee",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1382",
    "description": "Concerning the creation of an energy legislation review committee to study issues that affect energy policy in Colorado.",
    "last_action": "04/26/2018 | House Committee on Legislative Council Postpone Indefinitely",
    "sponsors": ["Rep. C. Hansen"],
    "subject": ["Energy", "Natural Resources & Environment", "State Government"]
  }, {
    "bill": "HB18-1383",
    "title": "Bonding Requirements For Public Projects Using Private Financing",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1383",
    "description": "Concerning bonding requirements for a contractor that is party to a contract that uses private financing for construction contracts on public property.",
    "last_action": "05/2/2018 | Senate Committee on Finance Postpone Indefinitely",
    "sponsors": ["Rep. F. Winter", "Sen. K. Priola"],
    "subject": ["Local Government", "State Government"]
  }, {
    "bill": "HB18-1384",
    "title": "Study Health Care Coverage Options",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1384",
    "description": "Concerning a study to identify affordable, competitive health care coverage options for Colorado, and, in connection therewith, making an appropriation.",
    "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. D. Roberts", "Rep. M. Catlin", "Sen. D. Coram", "Sen. K. Donovan"],
    "subject": ["Health Care & Health Insurance"]
  }, {
    "bill": "HB18-1385",
    "title": "Domestic Relations Changes Due To Federal Tax Law",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1385",
    "description": "Concerning changes to family support obligations in domestic relation actions due to changes in the federal tax laws.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. D. Roberts", "Sen. D. Coram"],
    "subject": ["Children & Domestic Matters", "Fiscal Policy & Taxes"]
  }, {
    "bill": "HB18-1386",
    "title": "Allow Treasurer Collect Property Tax Prepayments",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1386",
    "description": "Concerning the authority of a county treasurer to collect prepayments of property taxes.",
    "last_action": "04/23/2018 | House Committee on Finance Postpone Indefinitely",
    "sponsors": ["Rep. M. Gray"],
    "subject": ["Fiscal Policy & Taxes"]
  }, {
    "bill": "HB18-1387",
    "title": "Eliminate Oil & Gas Abatement Refund Interest",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1387",
    "description": "Concerning the elimination of refund interest for a property tax abatement that is the result of an error in an oil and gas owner or operator statement.",
    "last_action": "05/2/2018 | Senate Committee on Finance Postpone Indefinitely",
    "sponsors": ["Rep. B. Rankin", "Sen. D. Moreno"],
    "subject": ["Local Government"]
  }, {
    "bill": "HB18-1388",
    "title": "Exempt Reqmnt Register Security If Notice Filing",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1388",
    "description": "Concerning an exemption from the requirement to register a security if the security is subject to a notice filing as permitted under federal law.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. A. Garnett", "Sen. J. Tate"],
    "subject": ["Financial Services & Commerce"]
  }, {
    "bill": "HB18-1389",
    "title": "Centralized Marijuana Distribution Permit",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1389",
    "description": "Concerning authorization for issuance of a centralized marijuana distribution permit.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. M. Gray", "Rep. K. Van Winkle", "Sen. T. Neville"],
    "subject": ["Liquor, Tobacco, & Marijuana"]
  }, {
    "bill": "HB18-1390",
    "title": "Safe Family Option For Families In Crisis",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1390",
    "description": "Concerning creating an option for parents who seek to voluntarily delegate certain parental responsibilities to a safe family for a limited period of time without relinquishing legal custody of their child, and, in connection therewith, making an appropriation.",
    "last_action": "05/7/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. J. Singer", "Rep. K. Ransom", "Sen. D. Moreno", "Sen. J. Smallwood"],
    "subject": ["Children & Domestic Matters", "Human Services"]
  }, {
    "bill": "HB18-1391",
    "title": "Sexual Misconduct In Higher Education",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1391",
    "description": "Concerning the prevention of sexual misconduct on higher education campuses.",
    "last_action": "05/1/2018 | Senate Committee on Appropriations Postpone Indefinitely",
    "sponsors": ["Rep. C. Duran", "Rep. F. Winter", "Sen. B. Martinez Humenik", "Sen. A. Kerr"],
    "subject": ["Higher Education"]
  }, {
    "bill": "HB18-1392",
    "title": "State Innovation Waiver Reinsurance Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1392",
    "description": "Concerning the creation of the Colorado reinsurance program to provide reinsurance payments to health insurers to aid in paying high-cost insurance claims, and, in connection therewith, authorizing the commissioner of insurance to seek approval from the federal government to waive applicable federal requirements, provide federal funds, or both to enable the state to implement the reinsurance program making the program contingent upon waiver or funding approval, and making an appropriation.",
    "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. C. Kennedy", "Rep. B. Rankin", "Sen. D. Coram", "Sen. K. Donovan"],
    "subject": ["Courts & Judicial", "Health Care & Health Insurance"]
  }, {
    "bill": "HB18-1393",
    "title": "Effective Implementation Of Colorado Reading To Ensure Academic Development Act",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1393",
    "description": "Concerning measures to support effective implementation of the \"Colorado Reading to Ensure Academic Development Act\" for all students who receive services pursuant to READ plans, and, in connection therewith, making an appropriation.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. M. Hamner", "Rep. T. Exum", "Sen. B. Gardner"],
    "subject": ["Education & School Finance (Pre & K-12)"]
  }, {
    "bill": "HB18-1394",
    "title": "Update Colorado Disaster Emergency Act",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1394",
    "description": "Concerning amendments to the Colorado disaster emergency act to address all phases of emergency management.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. J. Singer", "Rep. H. McKean", "Sen. J. Kefalas", "Sen. J. Cooke"],
    "subject": ["Local Government", "State Government"]
  }, {
    "bill": "HB18-1395",
    "title": "Colorado Youth Advisory Council Review Committee",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1395",
    "description": "Concerning creation of the Colorado youth advisory council review committee, and, in connection therewith, making an appropriation.",
    "last_action": "05/10/2018 | House Committee on Legislative Council Postpone Indefinitely",
    "sponsors": ["Rep. F. Winter", "Rep. H. McKean"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1396",
    "title": "Advanced Placement Exam Fee Grant Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1396",
    "description": "Concerning creation of an advanced placement exam fee grant program in the department of education, and, in connection therewith, making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. J. Buckner", "Sen. D. Moreno", "Sen. K. Priola"],
    "subject": ["Education & School Finance (Pre & K-12)"]
  }, {
    "bill": "HB18-1397",
    "title": "Landlord Tenant Warranty Of Habitability",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1397",
    "description": "Concerning modifications to the residential warranty of habitability for the purpose of protecting renters.",
    "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. D. Jackson", "Sen. D. Moreno"],
    "subject": ["Housing"]
  }, {
    "bill": "HB18-1398",
    "title": "Statute Of Limitations Domestic Violence Torts",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1398",
    "description": "Concerning the statute of limitations for commencing a civil action in tort to recover damages for an act of domestic violence.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. M. Gray", "Rep. C. Wist", "Sen. B. Gardner"],
    "subject": ["Children & Domestic Matters", "Civil Law"]
  }, {
    "bill": "HB18-1399",
    "title": "Regulation Of Surgical Smoke",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1399",
    "description": "Concerning the prevention of human exposure to surgical smoke during surgery at certain licensed health care facilities.",
    "last_action": "05/3/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
    "sponsors": ["Rep. J. Buckner", "Sen. I. Aguilar"],
    "subject": ["Public Health"]
  }, {
    "bill": "HB18-1400",
    "title": "Increase Fees Stationary Sources Air Pollutants",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1400",
    "description": "Concerning an increase in fees paid by stationary sources of air pollutants, and, in connection therewith, prioritizing the use of the revenues generated by the fee increases to reduce permit processing times and making an appropriation.",
    "last_action": "05/18/2018 | Governor Signed",
    "sponsors": ["Rep. K. Becker", "Rep. H. McKean", "Sen. R. Scott", "Sen. C. Jahn"],
    "subject": ["Natural Resources & Environment"]
  }, {
    "bill": "HB18-1401",
    "title": "RTD Regional Transportation District Low-income Fare Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1401",
    "description": "Concerning the establishment of a low-income fare program by the regional transportation district, and, in connection therewith, making an appropriation.",
    "last_action": "04/30/2018 | House Committee on Appropriations Postpone Indefinitely",
    "sponsors": ["Rep. F. Winter", "Rep. D. Jackson"],
    "subject": ["State Government", "Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1402",
    "title": "State Treasurer Investment Authority",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1402",
    "description": "Concerning authorization for the state treasurer to invest state money in investment grade securities issued by sovereign, national, and supranational entities.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. P. Lawrence", "Rep. D. Young", "Sen. B. Gardner", "Sen. A. Williams"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1403",
    "title": "Stand By Your Ad Act",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1403",
    "description": "Concerning the expanded disclosure of information in disclaimer statements about persons paying for certain forms of political communication.",
    "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. M. Weissman", "Sen. S. Fenberg"],
    "subject": ["Elections & Redistricting"]
  }, {
    "bill": "HB18-1404",
    "title": "Peace Officer Internal Investigation Open Records",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1404",
    "description": "Concerning public disclosure of a completed peace officer internal investigation file.",
    "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. J. Coleman", "Rep. D. Williams", "Sen. V. Marble", "Sen. K. Lundberg"],
    "subject": ["Local Government", "State Government"]
  }, {
    "bill": "HB18-1405",
    "title": "Providers Of Legal Services Reporting Exception",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1405",
    "description": "Concerning an exception from the mandatory reporting requirements for persons providing legal assistance to area agencies on aging.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. P. Lee", "Sen. B. Gardner"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1406",
    "title": "Driver’s Licenses And Judgments For Traffic Regulations",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1406",
    "description": "Concerning action that can be taken against an individual's driver's license based on the person's failure to pay for traffic violations.",
    "last_action": "05/10/2018 | House Committee on Appropriations Postpone Indefinitely",
    "sponsors": ["Rep. M. Foote", "Rep. M. Weissman"],
    "subject": ["Courts & Judicial", "Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1407",
    "title": "Access To Disability Services And Stable Workforce",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1407",
    "description": "Concerning increasing access to services for persons with intellectual and developmental disabilities that are provided by a stable workforce, and, in connection therewith, making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. D. Young", "Rep. B. Rankin", "Sen. K. Lambert", "Sen. D. Moreno"],
    "subject": ["Health Care & Health Insurance", "Human Services"]
  }, {
    "bill": "HB18-1408",
    "title": "Clarifying Rape From Sexual Assault At Sentencing",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1408",
    "description": "Concerning a requirement that the court make a finding of rape if it finds that an act of sexual intrusion or sexual penetration occurred.",
    "last_action": "04/24/2018 | House Committee on Judiciary Postpone Indefinitely",
    "sponsors": ["Rep. D. Michaelson Jenet", "Rep. A. Benavidez", "Sen. R. Fields"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1409",
    "title": "Crime Survivors Grant Program And Presumptive Parole",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1409",
    "description": "Concerning the creation of the community crime victims grant program, and, in connection therewith, making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. P. Lee", "Rep. L. Herod", "Sen. K. Lundberg", "Sen. R. Fields"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1410",
    "title": "Prison Population Management Measures",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1410",
    "description": "Concerning measures to address prison population increases.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. P. Lee", "Rep. L. Herod", "Sen. K. Lundberg", "Sen. D. Kagan"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1411",
    "title": "Employees Working With Vulnerable Persons",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1411",
    "description": "Concerning eliminating redundancy related to fingerprint-based criminal history record checks for persons who have or will have direct contact with vulnerable persons.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. D. Pabon", "Sen. J. Smallwood"],
    "subject": ["Children & Domestic Matters", "Human Services"]
  }, {
    "bill": "HB18-1412",
    "title": "Retaining Teachers Grant Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1412",
    "description": "Concerning providing funding for local education providers to implement initiatives to reduce the teacher shortage in Colorado, and, in connection therewith, creating the retaining teachers grant program and making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. J. Buckner", "Rep. P. Lundeen", "Sen. O. Hill"],
    "subject": ["Education & School Finance (Pre & K-12)"]
  }, {
    "bill": "HB18-1413",
    "title": "Create School Safety Grant Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1413",
    "description": "Concerning the creation of a school safety grant program, and, in connection therewith, making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. P. Lee", "Rep. P. Neville", "Sen. R. Zenzinger"],
    "subject": ["Education & School Finance (Pre & K-12)", "State Government"]
  }, {
    "bill": "HB18-1414",
    "title": "Higher Education Student Emergency Assistance Grants",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1414",
    "description": "Concerning providing emergency assistance grants to students enrolled in state institutions of higher education to assist students in staying in school, and, in connection therewith, creating the emergency completion and retention grant program and making an appropriation.",
    "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. J. Buckner", "Rep. T. Exum", "Sen. K. Priola"],
    "subject": ["Higher Education"]
  }, {
    "bill": "HB18-1415",
    "title": "Regulate Student Education Loan Servicers",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1415",
    "description": "Concerning the regulation of student loan servicers.",
    "last_action": "05/3/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. F. Winter", "Sen. S. Fenberg"],
    "subject": ["Financial Services & Commerce"]
  }, {
    "bill": "HB18-1416",
    "title": "Student Suicide Prevention Grant Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1416",
    "description": "Concerning student suicide prevention, and, in connection therewith, making an appropriation.",
    "last_action": "05/8/2018 | Senate Committee on Appropriations Postpone Indefinitely",
    "sponsors": ["Rep. B. McLachlan", "Rep. T. Carver", "Sen. N. Todd", "Sen. D. Coram"],
    "subject": ["Education & School Finance (Pre & K-12)"]
  }, {
    "bill": "HB18-1417",
    "title": "Protect Constitutional Rights Colorado Residents",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1417",
    "description": "Concerning protecting the constitutional rights of all Colorado residents.",
    "last_action": "05/10/2018 | House Committee on Appropriations Postpone Indefinitely",
    "sponsors": ["Rep. D. Pabon", "Rep. S. Lontine"],
    "subject": ["Immigration"]
  }, {
    "bill": "HB18-1418",
    "title": "Use Of Criminal Convictions In Employment",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1418",
    "description": "Concerning the use of criminal convictions in employment.",
    "last_action": "05/30/2018 | Governor Signed",
    "sponsors": ["Rep. M. Weissman", "Sen. D. Coram", "Sen. D. Kagan"],
    "subject": ["Crimes, Corrections, & Enforcement", "State Government"]
  }, {
    "bill": "HB18-1419",
    "title": "Oil Gas Operators Disclosures Wellhead Integrity",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1419",
    "description": "Concerning additional safety requirements for oil and gas operators, and, in connection therewith, requiring the disclosure of the location of subsurface facilities and the sharing of oil and gas operators' development plans with affected local governments and requiring rules regarding wellhead integrity.",
    "last_action": "05/2/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. M. Foote", "Rep. D. Jackson", "Sen. M. Jones", "Sen. J. Kefalas"],
    "subject": ["Natural Resources & Environment"]
  }, {
    "bill": "HB18-1420",
    "title": "Early Childhood Development Special District",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1420",
    "description": "Concerning the creation of special districts to provide early childhood development services.",
    "last_action": "05/1/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. M. Hamner", "Rep. B. Rankin", "Sen. R. Scott"],
    "subject": ["Children & Domestic Matters", "State Government"]
  }, {
    "bill": "HB18-1421",
    "title": "Procurement Process For Major IT Information Technology Projects",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1421",
    "description": "Concerning the procurement process for major information technology projects undertaken by state agencies, and, in connection therewith, making an appropriation.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. B. Rankin", "Sen. K. Lambert", "Sen. J. Tate"],
    "subject": ["State Government"]
  }, {
    "bill": "HB18-1422",
    "title": "Marijuana Testing Facilities Standards",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1422",
    "description": "Concerning requirements for marijuana testing facilities.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. M. Gray", "Sen. C. Jahn"],
    "subject": ["Liquor, Tobacco, & Marijuana"]
  }, {
    "bill": "HB18-1423",
    "title": "Rural Fire Protection District Equipment Grants",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1423",
    "description": "Concerning grants to provide equipment to rural fire protection districts.",
    "last_action": "05/23/2018 | Governor Signed",
    "sponsors": ["Rep. D. Valdez", "Rep. L. Liston", "Sen. L. Crowder", "Sen. L. Garcia"],
    "subject": ["Local Government", "State Government"]
  }, {
    "bill": "HB18-1424",
    "title": "Chicana/o Special License Plate",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1424",
    "description": "Concerning the creation of a Chicana/o special license plate, and, in connection therewith, making an appropriation.",
    "last_action": "05/8/2018 | Senate Committee on Appropriations Postpone Indefinitely",
    "sponsors": ["Rep. J. Salazar", "Rep. C. Duran", "Sen. L. Guzman", "Sen. A. Williams"],
    "subject": ["Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1425",
    "title": "Prison Population Issues Study Committee",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1425",
    "description": "Concerning creation of a legislative committee to study the state prison population, and, in connection therewith, making an appropriation.",
    "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. P. Lee", "Rep. C. Wist", "Sen. D. Coram"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1426",
    "title": "Virtual Currency Exemption Money Transmitters Act",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1426",
    "description": "Concerning the exemption of virtual currency from regulation under the \"Money Transmitters Act\".",
    "last_action": "05/9/2018 | Senate Third Reading Lost - No Amendments",
    "sponsors": ["Rep. D. Pabon", "Rep. J. Melton", "Sen. T. Neville", "Sen. J. Tate"],
    "subject": ["Financial Services & Commerce"]
  }, {
    "bill": "HB18-1427",
    "title": "Sex Offender Management Board Interest Conflicts",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1427",
    "description": "Concerning a prohibition on conflicts of interest of members of the sex offender management board.",
    "last_action": "06/4/2018 | Governor Vetoed",
    "sponsors": ["Rep. L. Herod", "Rep. C. Wist", "Sen. J. Sonnenberg"],
    "subject": ["Crimes, Corrections, & Enforcement"]
  }, {
    "bill": "HB18-1428",
    "title": "Authorize Utility Community Collaboration Contract",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1428",
    "description": "Concerning authorization for an investor-owned utility to enter into a collaboration agreement with a community, and, in connection therewith, making an appropriation.",
    "last_action": "05/7/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. K. Becker", "Sen. J. Cooke"],
    "subject": ["Business & Economic Development", "Energy", "Local Government"]
  }, {
    "bill": "HB18-1429",
    "title": "Workers' Compensation Cash Fund Maximum Reserve Exemption",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1429",
    "description": "Concerning the exemption of the workers' compensation cash fund from the maximum reserve.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. M. Hamner", "Sen. K. Lambert"],
    "subject": ["Fiscal Policy & Taxes"]
  }, {
    "bill": "HB18-1430",
    "title": "State Agency Long-range Financial Plan",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1430",
    "description": "Concerning the requirement that a state agency prepare a long-range financial plan.",
    "last_action": "06/1/2018 | Governor Signed",
    "sponsors": ["Rep. K. Van Winkle", "Rep. D. Young", "Sen. K. Lundberg"],
    "subject": ["State Revenue & Budget"]
  }, {
    "bill": "HB18-1431",
    "title": "Statewide Managed Care System",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1431",
    "description": "Concerning updating managed care provisions in the medical assistance program, and, in connection therewith, aligning managed care provisions with new federal managed care regulations, removing obsolete or duplicative statutory language and programs, and updating and aligning statutory provisions to reflect the current statewide managed care system.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. J. Ginal", "Sen. J. Smallwood"],
    "subject": ["Health Care & Health Insurance"]
  }, {
    "bill": "HB18-1432",
    "title": "Prohibit Housing Discrimination Source Of Income",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1432",
    "description": "Concerning prohibitions on discrimination in housing based on source of income.",
    "last_action": "05/4/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. L. Herod", "Sen. R. Fields"],
    "subject": ["Housing"]
  }, {
    "bill": "HB18-1433",
    "title": "Naturopathic Doctor Terminology And Disclosure",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1433",
    "description": "Concerning modifications to the \"Naturopathic Doctor Act\", and, in connection therewith, requiring a naturopathic doctor to disclose that the naturopathic doctor is registered and updating the terms that a naturopathic doctor may use.",
    "last_action": "05/29/2018 | Governor Signed",
    "sponsors": ["Rep. M. Gray", "Sen. J. Tate", "Sen. D. Coram"],
    "subject": ["Health Care & Health Insurance", "Labor & Employment"]
  }, {
    "bill": "HB18-1434",
    "title": "Safe2tell Program New Duties And Annual Report",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1434",
    "description": "Concerning the safe2tell program, and, in connection therewith, creating new duties for the safe2tell program, requiring the safe2tell program to prepare an annual report that analyzes data from the program and makes recommendations on improving the program, and making an appropriation.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. J. Singer", "Rep. D. Michaelson Jenet", "Sen. B. Gardner", "Sen. R. Fields"],
    "subject": ["Crimes, Corrections, & Enforcement", "Education & School Finance (Pre & K-12)", "State Government"]
  }, {
    "bill": "HB18-1435",
    "title": "Protection Of Colorado Call Center Jobs",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1435",
    "description": "Concerning the protection of Colorado call center jobs, and, in connection therewith, keeping Colorado consumer information safe.",
    "last_action": "04/30/2018 | House Committee on Finance Postpone Indefinitely",
    "sponsors": ["Rep. D. Esgar"],
    "subject": ["Labor & Employment", "State Government", "Telecommunications & Information Technology"]
  }, {
    "bill": "HB18-1436",
    "title": "Extreme Risk Protection Orders",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1436",
    "description": "Concerning creation of an extreme risk protection order.",
    "last_action": "05/7/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. A. Garnett", "Rep. C. Wist", "Sen. L. Court"],
    "subject": ["Courts & Judicial"]
  }, {
    "bill": "HB18-1437",
    "title": "Costs Of College-level Courses In Corrections Educational Program",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1437",
    "description": "Concerning eliminating the requirement that a person who participates in college-level academic programs through the correctional education program in the department of corrections must bear entirely the costs associated with such programs.",
    "last_action": "06/6/2018 | Governor Signed",
    "sponsors": ["Rep. L. Herod", "Sen. T. Neville"],
    "subject": ["Crimes, Corrections, & Enforcement", "Higher Education"]
  }, {
    "bill": "HB18-1438",
    "title": "Health Care Coverage Reproductive Health Care",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1438",
    "description": "Concerning health care coverage for reproductive health care.",
    "last_action": "05/3/2018 | House Committee on Health, Insurance, & Environment Postpone Indefinitely",
    "sponsors": ["Rep. D. Esgar"],
    "subject": ["Health Care & Health Insurance", "Insurance", "Public Health"]
  }, {
    "bill": "HB18-1439",
    "title": "Prohibit Misleading Signs Disclaiming Liability",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1439",
    "description": "Concerning a prohibition on displaying a sign on a vehicle denying liability for items escaping from the vehicle.",
    "last_action": "05/4/2018 | House Committee on Judiciary Postpone Indefinitely",
    "sponsors": ["Rep. A. Winkler"],
    "subject": ["Transportation & Motor Vehicles"]
  }, {
    "bill": "HB18-1440",
    "title": "Preneed Funeral Contract Sellers",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1440",
    "description": "Concerning preneed funeral contract sellers, and, in connection therewith, making an appropriation.",
    "last_action": "05/8/2018 | Senate Committee on State, Veterans, & Military Affairs Postpone Indefinitely",
    "sponsors": ["Rep. D. Valdez", "Sen. N. Todd", "Sen. D. Coram"],
    "subject": ["Insurance"]
  }, {
    "bill": "HB18-1441",
    "title": "500-feet-from-school Limit For Beer Code Retailers",
    "bill_url": "https://leg.colorado.gov/bills/hb18-1441",
    "description": "Concerning a limitation on the location of a building in which fermented malt beverages are sold at retail in proximity to certain educational institutions.",
    "last_action": "05/24/2018 | Governor Signed",
    "sponsors": ["Rep. T. Kraft-Tharp", "Rep. C. Wist", "Sen. C. Holbert", "Sen. L. Guzman"],
    "subject": ["Liquor, Tobacco, & Marijuana"]
  }]


const filteredBills = [];
const billsLength = bills.length;
for (let i = 0; i < billsLength; i++) {
  if (bills[i].last_action.includes("Governor")) {
    filteredBills.push(bills[i])
  }
}


const billNumArray = [];

function numbers(arr) {
  let arrayLength = arr.length;
  for (let i=0; i < arrayLength; i++) {
    let value = arr[i].bill;
    billNumArray.push(value);
  }
return billNumArray;
}

console.log(numbers(filteredBills))