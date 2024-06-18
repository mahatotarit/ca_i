let steps = 0;
let slide_front = 1;

async function wait(sec){
  await new Promise(res => setTimeout(res, sec * 1000));
}

document.addEventListener('DOMContentLoaded',function(){

    // ============ sldie action =============
    pre_btn.addEventListener('click',function(){
      if(steps != 0 && slide_front != 1){
        moveSlides(-1);
        slide_front = slide_front-1;
      }
    });

    next_btn.addEventListener('click', function () {
      if (all_slider.length != slide_front && slide_front < steps+1) {
        moveSlides(+1);
        slide_front = slide_front + 1;
      }
    });

    // =========== details validate =======
    rpc_setup_submit_btn.addEventListener('click', async function () {
      submit_btn_wait(rpc_setup_submit_btn);
      let rpc_1_check_res = await isValidFirstRPCURL((rpc_input_1.value).trim());
      let rpc_2_check_res = await isValidSecondRPCURL((rpc_input_2.value).trim());
      submit_btn_normal(rpc_setup_submit_btn);

      if (rpc_1_check_res && rpc_2_check_res) {

        wait(1);
        if(steps == 0){
          steps = 1;
          moveSlides(+1);
          slide_front = 2;
        }

      }

    });

    contract_setup_submit.addEventListener('click',async function(){
      submit_btn_wait(contract_setup_submit);
      let ca_add_res = await isValidContractAddress(contract_address_input.value.trim(), contract_abi_textarea.value.trim());
      submit_btn_normal(contract_setup_submit);

      if(ca_add_res){
        wait(1);
        if (steps == 1) {
          steps = 2;
          moveSlides(+1);
          slide_front = 3;
        }
      }

    });

    contract_action_submit.addEventListener('click', async function(){
      submit_btn_wait(contract_action_submit);
      let contract_ac_res = await selectContractAction(contract_action_input.value.trim());
      submit_btn_normal(contract_action_submit);

      if(contract_ac_res){
        wait(1);
        if (steps == 2) {
          steps = 3;
          moveSlides(+1);
          slide_front = 4;
        }
      }

    });

    wallet_setup_submit.addEventListener('click',async function(){
      submit_btn_wait(wallet_setup_submit);
      let target_wallet_setup_res = await setupTargetWallet(target_wallet_private_key_input.value.trim());
      let your_wallet_setup_res = await setupYourWallet(your_wallet_private_key_input.value.trim());
      submit_btn_normal(wallet_setup_submit);

      if(target_wallet_setup_res && your_wallet_setup_res){
          wait(1);
          if (steps == 3) {
            steps = 4;
            moveSlides(+1);
            slide_front = 5;
          }
      }
    })

});