import Elements from './elements_page'
const elements = new Elements()
const devFinance = 'https://maratona-discover-devfinance.netlify.app/#'

class Steps {
  acessDevFinance () {
    cy.visit(devFinance)
  }

  acessNewTransaction () {
    cy.get(elements.buttonTransaction())
      .click()
  }

  checkModal () {
    cy.contains('Nova Transação')
  }
}

export default Steps
