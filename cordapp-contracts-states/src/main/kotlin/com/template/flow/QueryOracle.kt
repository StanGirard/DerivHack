package com.template.flow

import co.paralleluniverse.fibers.Suspendable
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.InitiatingFlow
import net.corda.core.identity.Party
import net.corda.core.utilities.unwrap

/** Called by the client to request a stock's spot price and volatility at a point in time from an oracle. */
@InitiatingFlow
class QueryOracle(private val oracle: Party) : FlowLogic<Int>() {
    @Suspendable override fun call(): Int {
        val oracleSession = initiateFlow(oracle)
        return oracleSession.sendAndReceive<Int>(1).unwrap { it }
    }
}