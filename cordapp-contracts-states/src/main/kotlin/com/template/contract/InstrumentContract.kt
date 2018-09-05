package com.template.contract



import com.template.state.InstrumentState
import net.corda.core.contracts.*
import net.corda.core.transactions.LedgerTransaction

open class InstrumentContract : Contract {
    companion object {
        @JvmStatic
        val INSTRUMENT_CONTRACT_ID = "com.template.contract.InstrumentContract"
    }

    override fun verify(tx: LedgerTransaction) {
        // We should only ever receive one command at a time, else throw an exception
        val command = tx.commands.requireSingleCommand<Commands>()

        when (command.value) {
            is Commands.Issue -> {
                requireThat {
                    val option = tx.outputsOfType<InstrumentState>().single()
                    val oracleCmd = tx.commands.requireSingleCommand<InstrumentContract.OracleCommand>()

                    " The Instrument value is the same than the Oracle's value" using
                            (option.value == oracleCmd.value.value)

                }
            }
            else -> throw IllegalArgumentException("Unknown command.")
        }
    }

    interface Commands : CommandData {
        class Issue : TypeOnlyCommandData(), Commands
        class Trade : TypeOnlyCommandData(), Commands
        class Exercise : TypeOnlyCommandData(), Commands
        // TODO: Do not delete. Will be used in the implementation of the redeem flow.
        class Redeem : TypeOnlyCommandData(), Commands
    }

    class OracleCommand(val value: Int) : CommandData
}