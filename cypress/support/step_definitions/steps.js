import { Given } from 'cypress-cucumber-preprocessor/steps'
import Steps from './page_object'

const steps = new Steps()

Given('Home page is opened', () => {
  steps.acessDevFinance()
})

Given('I click on new transaction', () => {
  steps.acessNewTransaction()
})

Given('Displays the transaction modal', () => {
  steps.checkModal()
})
