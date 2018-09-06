package com.template.flow


import co.paralleluniverse.fibers.Suspendable
import com.template.oracle.Oracle
import net.corda.core.flows.FlowException
import net.corda.core.flows.FlowLogic
import net.corda.core.flows.FlowSession
import net.corda.core.flows.InitiatedBy
import net.corda.core.utilities.ProgressTracker
import net.corda.core.utilities.unwrap

import java.time.Instant
import javax.management.Query

/** Called by the oracle to provide a stock's spot price to a client. */
@InitiatedBy(QueryOracle::class)
class QueryOracleHandler(private val counterpartySession: FlowSession) : FlowLogic<Unit>() {
    companion object {
        object RECEIVING : ProgressTracker.Step("Received Number")
        object RETRIEVING : ProgressTracker.Step("Retrieving Number")
        object SENDING : ProgressTracker.Step("Sending Number to counterparty")
    }

    override val progressTracker = ProgressTracker(RECEIVING, RETRIEVING, SENDING)

    @Suspendable
    override fun call() {
        progressTracker.currentStep = RECEIVING
        val int = counterpartySession.receive<Int>().unwrap { it }

        progressTracker.currentStep = RETRIEVING
        val spotPriceAndVolatility = try {
            serviceHub.cordaService(Oracle::class.java).queryValue()

        } catch (e: Exception) {
            throw FlowException(e)
        }

        progressTracker.currentStep = SENDING
        counterpartySession.send(spotPriceAndVolatility)
    }
}