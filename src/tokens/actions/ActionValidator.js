class ActionValidator {
  constructor() {
    if (this.constructor === ActionValidator) {
      throw new TypeError('Abstract class "ActionValidator" cannot be instantiated directly.'); 
    }
  }

  validate = (actionContents, version) => {
    throw new Error('Not implemented.');
  }
}

export default ActionValidator