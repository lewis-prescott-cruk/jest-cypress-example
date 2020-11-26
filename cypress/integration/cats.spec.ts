describe('Cat Facts', () => {
    it('should return cat type', () => {
        cy.api(
            {
              url: '/facts/random'
            }
          ).then(response => {
            expect(response).to.include.keys([
              'status',
              'statusText',
              'body',
              'requestHeaders',
              'headers',
              'duration'
            ])
            expect(response.body.type).to.equal('cat')
          })
    })
})