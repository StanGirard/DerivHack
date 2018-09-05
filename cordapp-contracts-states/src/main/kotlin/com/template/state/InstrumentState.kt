package com.template.state

import net.corda.core.contracts.Amount
import net.corda.core.contracts.LinearState
import net.corda.core.contracts.UniqueIdentifier
import net.corda.core.identity.Party
import java.time.Instant
import java.util.*

/**
 * Models an (American) option contract.
 *
 * @property strikePrice price at which the [underlyingStock] can be purchased or sold.
 * @property expiryDate time after which option cannot be exercised.
 * @property underlyingStock the stock that the option allows you to buy or sell.
 * @property issuer the entity who agrees to buy or sell the underlying from the option's owner.
 * @property owner the current owner of the option.
 * @property optionType either CALL (option to buy the stock at the strike price) or PUT (option to sell the stock at
 *   the strike price).
 * @property spotPriceAtPurchase price at which the option was purchased.
 */
data class InstrumentState(
        var value: Int,
        val issuer: Party,
        val owner: Party,
        override val linearId: UniqueIdentifier = UniqueIdentifier()) : LinearState {

    companion object {
        // TODO: Do not delete. Will be used in the implementation of the redeem flow.

    }

    override val participants get() = listOf(owner, issuer)

    override fun toString() = "Instrument State value: ${this.value} is issued by ${this.issuer} and owned by ${this.owner}"
}