BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {

    // give a random blood type to anyone
    // very bad idea!
    var bloodTypes;
    var bloodToReturn;

    switch(patient.blood_type) {
      case 'AB_POS':
        bloodTypes = [
        'O_NEG',
        'O_POS',
        'A_NEG',
        'B_NEG',
        'B_POS',
        'A_POS',
        'AB_NEG',
        'AB_POS'
        ]
      break;

      case 'AB_NEG':
      bloodTypes = [
        'O_NEG',
        'A_NEG',
        'B_NEG',
        'AB_NEG'
        ]
      break;

      case 'A_POS':
      bloodTypes = [
        'O_NEG',
        'O_POS',
        'A_NEG',
        'A_POS'
        ]
      break;

      case 'A_NEG':
      bloodTypes = [
        'O_NEG',
        'A_NEG'
        ]
      break;

      case 'B_POS':
      bloodTypes = [
        'O_NEG',
        'O_POS',
        'B_NEG',
        'B_POS'
        ]
      break;

      case 'B_NEG':
      bloodTypes = [
        'O_NEG',
        'B_NEG'
        ]
      break;

      case 'O_POS':
      bloodTypes = [
        'O_NEG',
        'O_POS'
        ]
      break;

      case 'O_NEG':
      bloodTypes = [
        'O_NEG'
        ]
      break;
    }

    for(var i = 0; i < bloodTypes.length; i++) {
      if(blood_inventory[bloodTypes[i]] > 0 ) {
        bloodToReturn = BloodType[bloodTypes[i]];
      }
    }

    return bloodToReturn;
  }

};