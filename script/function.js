// frontend vlaue
let first_rpc_url;
let second_rpc_url;
let contract_address;
let abi;
let contract_action;


// ============== backend value ==========

// network value
let first_provider;
let second_provider;
let contract;

// result value 
let first_network_row;
let second_network_row;
let contract_name;

async function isValidFirstRPCURL(first_rpc_url_argu) {
  let rpc_1_status = false;
  try {
    if (first_rpc_url_argu.startsWith('https') || first_rpc_url_argu.startsWith('http')) {
        first_provider = await new ethers.JsonRpcProvider(first_rpc_url_argu);
        await first_provider.getBlockNumber();
        rpc_1_status = true;
    } else if (first_rpc_url_argu.startsWith('wss') || first_rpc_url_argu.startsWith('ws')) {
        first_provider = await new ethers.WebSocketProvider(first_rpc_url_argu);
        await first_provider.getBlockNumber();
        rpc_1_status = true;
    } else {
      rpc_1_status = false;
    }

    first_rpc_url = first_rpc_url_argu;
    const network = await first_provider.getNetwork();
    const network_chain_id = Number(network.chainId);
    first_network_row = networks.find((net) => net.chainId === network_chain_id);

    if(first_network_row != null || first_network_row != undefined){
      error_action(first_network_row.symbol, true, rpc_input_1_symbol);
      error_action(first_network_row.network, true, rpc_input_1_network);
    }

    error_action("" , false, rpc_input_1_error);
    return rpc_1_status;
  } catch (error) {
    error_action('Please enter a valid rpc url', true, rpc_input_1_error);
    return false;
  }
}

async function isValidSecondRPCURL(second_rpc_url_argu) {
  let rpc_2_status = false;
  try {
    if (
      second_rpc_url_argu.startsWith('https') ||
      second_rpc_url_argu.startsWith('http')
    ) {
      second_provider = new ethers.JsonRpcProvider(
        second_rpc_url_argu,
      );
      await second_provider.getBlockNumber();
      rpc_2_status = true;
    } else if (
      second_rpc_url_argu.startsWith('wss') ||
      second_rpc_url_argu.startsWith('ws')
    ) {
      second_provider = new ethers.WebSocketProvider(second_rpc_url_argu);
      await second_provider.getBlockNumber();
      rpc_2_status = true;
    } else {
      rpc_2_status = false;
    }

    second_rpc_url = second_rpc_url_argu;
    const network = await second_provider.getNetwork();
    const network_chain_id = Number(network.chainId);
    second_network_row = networks.find((net) => net.chainId === network_chain_id);

    if(second_network_row != null || second_network_row != undefined){
      error_action(second_network_row.symbol, true, rpc_input_2_symbol);
      error_action(second_network_row.network, true, rpc_input_2_network);
    }
    
    error_action('', false, rpc_input_2_error);
    return rpc_2_status;
  } catch (error) {
    error_action("Please enter a valid rpc url", true, rpc_input_2_error);
    return false;
  }
}

async function isValidContractAddress(contract_address_agru,abi_argu){

  let res_ca = false;
  try {

    const code = await first_provider.getCode(contract_address_agru);
    res_ca = code !== '0x';
    if(!res_ca){
      error_action("Please enter a vlaid contract address", true, contract_address_error);
      return res_ca;
    }

    error_action("", false, contract_address_error);

  } catch (error) {
    error_action("Please enter a vlaid contract address", true, contract_address_error);
    return res_ca;
  }

  res_ca = false;
  
  try{
    
    if(abi_argu == null || abi_argu == "" || abi_argu == undefined){
      error_action('Please enter a valid contract abi', true, abi_error_span);
      return res_ca;
    }

    abi = JSON.parse(abi_argu);

    const contract_inner = await new ethers.Contract(contract_address_agru, abi_argu, first_provider);
    const ca_ve = await contract_inner.name();

    contract = contract_inner;
    contract_name = ca_ve;

    res_ca = true;
    set_all_contract_action();
    return res_ca;

  } catch (error) {
    res_ca = false;
    return res_ca;
  }

}

// =======================================================================================
// =================        static function for frontend            ======================
// =======================================================================================

function set_all_contract_action(){

    const functionNames = abi.filter((item) => item.type === 'function').map((item) => item.name);

    functionNames.forEach((name) => {
      let option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      contract_action_input.appendChild(option);
    });

}

function error_action(message,type,ele){
  if(type){
    ele.innerHTML = message;
    ele.classList.add('d-block');
  }else{
    ele.innerHTML = '';
    ele.classList.remove('d-block');
  }
}

function submit_btn_wait(btn){
  btn.innerHTML = "Wait...";
}

function submit_btn_normal(btn) {
  btn.innerHTML = 'Submit';
}