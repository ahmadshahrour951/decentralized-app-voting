# Voting Dapp!

I will be creating a DApp for voting for a proposal where all of the votes on the chain
- It will allow anyone to create a proposal
- People should be able to see a list of proposals they can vote for
- People can then vote for a specific proposal
- It should be relatively easy to vote with a few options available


A frontend will also be made where voters can see the results. As for the framework I'll be using Truffle.


## The smart contract
- Create struct Proposal with info including Voters mapping
- Create struct Voters
- Create Proposals array
- Function getNumProposals() - returns proposals array length
- Function getProposal(_proposalId) - returns a specific proposal
- Function addProposal(_title) - creates a new proposal and stores
- Function vote(_proposalId, _voteValue) - vote for a proposal

## Next steps
- Testing
- Using ERC standards available in OpenZepplin
- Deploy for production
