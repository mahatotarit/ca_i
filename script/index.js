let compromised_provider;
let your_wallet_provider;

let compromised_provider_wallet;
let your_wallet_provider_wallet;

let contract_contract;

let send_fee_per_block;

let send_gas_fee_amount;

async function ready_for_send(){
   compromised_provider = first_provider;
   your_wallet_provider = second_provider;
   compromised_provider_wallet = target_wallet;
   your_wallet_provider_wallet = your_wallet;
   contract_contract = contract;
   send_fee_per_block = choose_payment_block;
   send_gas_fee_amount = gas_fee_per_tx_eth;
}