$(function(){
    
        let letterbg = document.querySelectorAll(".letter");
        let letters = document.querySelectorAll(".letter span");
        //let loginn = document.querySelector(".letter.login");
        console.log(letters);
    

    
        letterbg[0].classList.add('animate__animated', 'animate__fadeInDownBig');
        letters[0].classList.add('animate__animated', 'animate__pulse');
        letters[0].style.setProperty('--animate-duration', '1.5s');
        letterbg[0].style.setProperty('--animate-duration', '2.5s');
      
            letterbg[1].classList.add('animate__animated', 'animate__fadeInDownBig');
            letters[1].classList.add('animate__animated', 'animate__pulse');
            letters[1].style.setProperty('--animate-duration', '3.0s');
            letterbg[1].style.setProperty('--animate-duration', '3.5s');
         
                
                letterbg[2].classList.add('animate__animated', 'animate__fadeInDownBig');
                letters[2].classList.add('animate__animated', 'animate__pulse');
                letters[2].style.setProperty('--animate-duration', '4.5s');
                letterbg[2].style.setProperty('--animate-duration', '4.5s');
             
                   
                    letterbg[3].classList.add('animate__animated', 'animate__fadeInDownBig');
                    letters[3].classList.add('animate__animated', 'animate__pulse');
                    letters[3].style.setProperty('--animate-duration', '6.0s');
                    letterbg[3].style.setProperty('--animate-duration', '5.5s');
               
                        
                        letterbg[4].classList.add('animate__animated', 'animate__fadeInDownBig');
                        letters[4].classList.add('animate__animated', 'animate__pulse');
                        letters[4].style.setProperty('--animate-duration', '7.5s');
                        letterbg[4].style.setProperty('--animate-duration', '6.5s');
                        letterbg[4].addEventListener('animationend', () => {
                            $(".login-box").css("display","block");
                            document.getElementById("login-box").classList.add('animate__animated', 'animate__fadeIn');
                            //document.getElementById("login-box").style.setProperty('--animate-duration', '1.5s');
                          });
            //loginn.classList.add('animate__animated', 'animate__fadeIn');
            //loginn.style.setProperty('--animate-duration', '20s');


              

        
       
    
})