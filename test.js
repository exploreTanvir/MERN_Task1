var divisionsDistrictInfo={
    "Dhaka":
        ["Narsingdi", "Gazipur", "Shariatpur", "Narayanganj", 'Tangail', 'Kishoreganj', 'Manikganj', 'Dhaka', 'Munshiganj', 'Rajbari', 'Madaripur', 'Gopalganj', 'Faridpur']
     ,
    "Barishal":
        ['Jhalkathi', 'Patuakhali', 'Pirojpur', 'Barisal', 'Bhola', 'Barguna']
    , 
    "Chattogram":
       [ 'Comilla', 'Feni', 'Brahmanbaria', 'Rangamati', 'Noakhali', 'Chandpur', 'Laxmipur', 'Chittagong', 'Coxs_Bazar', 'Khagrachari', 'Bandarban']
    , 
    "Khulna":
        ['Jessore', 'Satkhira', 'Meherpur', 'Narail', 'Chuadanga', 'Kushtia', 'Magura', 'Khulna', 'Bagerhat', 'Jhenaidah']
    , 
    "Rajshahi":
       [ 'Sirajganj', 'Pabna', 'Bogra', 'Rajshahi', 'Natore', 'Joypurhat', 'Chapainawabganj', 'Naogaon']
    ,
   "Rangpur":
        ['Panchagarh', 'Dinajpur', 'Lalmonirhat', 'Nilphamari', 'Gaibandha', 'Thakurgaon', 'Rangpur', 'Kurigram']
    , 
    "Mymensingh":
        ['Sherpur', 'Mymensingh', 'Jamalpur', 'Netrakona']
    , 
    "Sylhet":
       [ 'Sylhet', 'Moulvibazar', 'Habiganj', 'Sunamganj']
    }



window.onload=function(){
    const selectDivision=document.getElementById("divisions"),
          selectDistrict=document.getElementById("district"),
          select=document.querySelectorAll("select")

          selectDistrict.disabled=true


          select.forEach(select=>{
            if(select.disabled==true){
                select.style.cursor="auto"
            }
          })

          for(let division in divisionsDistrictInfo){
            // console.log(division)
            selectDivision.options[selectDivision.options.length]=new Option(division,division)
          }  
          
          

          selectDivision.onchange=(e)=>{
            selectDistrict.disabled=false
        
            selectDistrict.length=1
            
            let district=divisionsDistrictInfo[e.target.value]

            for(let i=0; i<district.length; i++){
            selectDistrict.options[selectDistrict.options.length]=new Option(district[i],district[i])
        }
           
          }  
}
