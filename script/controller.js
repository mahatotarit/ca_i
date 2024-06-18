let steps = 0;

async function wait(sec){
  await new Promise(res => setTimeout(res, sec * 1000));
}

document.addEventListener('DOMContentLoaded',function(){

    rpc_setup_submit_btn.addEventListener('click', async function () {
      submit_btn_wait(rpc_setup_submit_btn);
      let rpc_1_check_res = await isValidFirstRPCURL((rpc_input_1.value).trim());
      let rpc_2_check_res = await isValidSecondRPCURL((rpc_input_2.value).trim());
      submit_btn_normal(rpc_setup_submit_btn);

      if (rpc_1_check_res && rpc_2_check_res) {

        wait(1);
        moveSlides(+1);
        if(steps == 0){
          steps = 1;
        }

      }

    });

    contract_setup_submit.addEventListener('click',async function(){
      submit_btn_wait(contract_setup_submit);
      let ca_add_res = await isValidContractAddress(contract_address_input.value.trim(), contract_abi_textarea.value.trim());
      submit_btn_normal(contract_setup_submit);

      if(ca_add_res){
        wait(1);
        moveSlides(+1);
        if (steps == 1) {
          steps = 2;
        }
      }

    });

    contract_action_submit.addEventListener('click', async function(){
       
    });

});