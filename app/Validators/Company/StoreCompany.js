class StoreCompany {
  get rules() {
    return {
      social_name: 'required|string',
      social_number: 'required|string|max:14|min:11|unique:companies',
    };
  }

  get messages() {
    return {
      'social_name.required': 'You must provide a social_name address.',
      'social_number.required': 'You must provide a social_number address.',
      'social_number.max': 'Tha max number is 14',
      'social_number.min': 'Tha max number is 11',
      'social_number.unique': 'This social_number is already registered.',
    };
  }

  async fails(error) {
    return this.ctx.response.status(400).send({ validation: error });
  }
}

module.exports = StoreCompany;
