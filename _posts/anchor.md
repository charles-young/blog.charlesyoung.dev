---
title: 'The Anchor Protocol'
excerpt: 'An in depth examination of the DeFi Savings Protocol which offers up to 20% APY on UST.'
coverImage: '/assets/blog/anchor/cover.jpg'
date: '2022-04-04'
ogImage:
  url: '/assets/blog/anchor/cover.jpg'
---

The Anchor protocol is a decentralized savings protocol which aims to offer low-volatile yields on UST (TerraUSD) deposits.  The savings yield offered on the Anchor protocol is called the Anchor rate and is powered by staking rewards and borrowers in the Anchor contract.  So how does Anchor provide such high yields and what's the catch?

## The Economics of the Anchor Protocol
The current interest of the Anchor Earn contract is 19.47% and has held steady around that mark since its conception.  Recently in [Proposal 20](https://app.anchorprotocol.com/poll/20), a semi-dynamic earn rate was implemented. This change will allow the Anchor protocol to increase/decrease the Anchor Rate each month in correspondence with the present Yield Reserve in the contract to ensure greater sustainability and potential for increased borrowing demand. To prevent large swings in the Anchor Rate, adjustments to the Anchor Rate are capped at +/-1.5%.

### Liquidations
Anchor incentivises liquidators to observe and liquidate loans with a borrow amount that exceeds the allowed borrowing limit. Since Anchor has a max loan-to-value amount (LTV) of 60% and recommended 45% LTV, if a borrower defaults on their loan, Anchor is able to place collaterals in a liquidation queue and can repay the outstanding debt on the loan.

### Interest on Debts
The interest rate to borrow is dynamic but the current rate is ~13%.  Anchor is currently incentivising borrowing by distributing their native token ANC to borrowers at a rate of ~7.5% which lowers the effective rate to borrow to just ~5.5%. This incentivised borrowing is slowly being phased out as more users join the contract and lock up their funds.

### Staked Asset Interest
All collateral on the Anchor protocol is in the form of staked LUNA and ETH which is currently able to yield 6.7% and 3.9% respectively. Since each loan provided is a collateralized loan of interest bearing assets, the Anchor protocol can keep these assets staked to generate additional yields. 

## Risks of the Anchor Protocol
"There are no risks! It's free internet money!" - Some guy on Reddit, probably.  All jokes aside, as with any new technology, there are always risks, and I will outline some concerns below.

### Smart Contract Vulnerability
As with all new technology, there is still risk in the protocol.  While the Anchor protocol has been audited by [CertiK](https://www.certik.com/), there may be an unknown bug in the [Smart Contract](https://www.ibm.com/topics/smart-contracts) which a bad actor could exploit.

### Depegging of UST
Since all deposits are done in UST, if UST were to fall of its peg, it would wreak havoc on the Terra ecosystem, including Anchor.  UST has fallen off its peg in the past, namely the crash in March 2021 when Terra lost 81% of its value and UST dropped to $0.897 before quickly recovering to $1.02. Since then, UST has stayed on its peg with +/-2% variance in price.  This is because arbitragers are able to keep UST pegged at $1 by burning their Terra (LUNA) to mint UST if UST drops below its peg, and burn UST and mint Terra (LUNA) if UST goes above its peg.  UST is currently backed by partial reserves, and it could fall off its peg in a bank run scenario.

### Sustainability of 20% APY in a bear market or flash crash
In the past, when the price of LUNA fell by 81%, a large portion of borrowers had their collateral liquidated.  This can add extreme stress to Anchor by reducing the amount of interest earned from borrowers, reducing the number of borrowers, and increasing the supply of ANC which could cause ANC to crash as well. This results in the network having to pay the Anchor Rate to depositors while not having enough revenue which means Anchor must dip into its reserve pool.

## Stability and Safety
Unless UST falls off its peg, depositor funds are safe and even if the economic model falls short, the initial capital would still be locked in the contract and free to withdraw. The last year has shown Anchor's resilience to a bear market, ANC inflation, and brief UST depegging.

## How does Anchor derive its rates?
The "Anchor Rate" is the target APY that the Anchor protocol seeks to pay out to its depositors and a quorum of ANC governance token holders vote to set the Anchor Rate for the contract.

## Conclusion
Anchor is an easy way to earn a stable yield on a dollar pegged asset.  While the protocol is still dependent on its reserves to achieve the 20% yield phasing out reliance on the reserve will push Anchor to new heights.