/**
 * PecarCargo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      pecar_codigo: {
        type: 'string',
        required: true,
        unique: true
      },
      pedep_codigo: {
        type: 'string',
        required: true
      },
      pecar_descripcion:{
        type: 'string', 
        required: true
      } 
  
    },
  
  };
  
  