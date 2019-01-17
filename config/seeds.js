/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {
    policy: [
        {
          policyNumber: 'p001',
          amount: '1000',
          creationDate: '',
          expireDate: '',
        },
        {
          policyNumber: 'p002',
          amount: '2000',
          creationDate: '',
          expireDate: '',
        },
        ]
}
