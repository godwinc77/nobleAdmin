const dashboard_click= document.getElementsByClassName("dashboard-click")[0]
const background_image_click= document.getElementsByClassName("background-image-click")[0]
const gallery_image_click= document.getElementsByClassName("gallery-image-click")[0]
const portfolio_image_click= document.getElementsByClassName("portfolio-image-click")[0]
const booking_info_click= document.getElementsByClassName("booking-info-click")[0]
const log_out_click= document.getElementsByClassName("log-out-click")[0]
const admin_dashboard= document.getElementsByClassName("admin-dashboard")[0]
const background_image= document.getElementsByClassName("background-image")[0]
const gallery_image_info= document.getElementsByClassName("gallery-image-info")[0]
const portfolio_image_info= document.getElementsByClassName("portfolio-image-info")[0]

function opendashboard(){
    admin_dashboard.style.display="block"
    closebackgroundImage()
    closegalleryimage()
    closeportfolioimage()
}
function closedashboard(){
    admin_dashboard.style.display="none"
}

function openbackgroundImage(){
    background_image.style.display="block"
    background_image.style.display="flex"
    closedashboard()
    closegalleryimage()
    closeportfolioimage()
}
function closebackgroundImage(){
    background_image.style.display="none"
}
function opengalleryimage(){
    gallery_image_info.style.display="block"
    gallery_image_info.style.display="flex"
    closebackgroundImage()
    closedashboard()
    closeportfolioimage()
}
function closegalleryimage(){
    gallery_image_info.style.display="none"
}
function openportfolioimage(){
    portfolio_image_info.style.display="block"
    portfolio_image_info.style.display="flex"
    closebackgroundImage()
    closedashboard()
    closegalleryimage()
}
function closeportfolioimage(){
    portfolio_image_info.style.display="none"
}

dashboard_click.addEventListener("click", opendashboard)
background_image_click.addEventListener("click", openbackgroundImage)
gallery_image_click.addEventListener("click",opengalleryimage)
portfolio_image_click.addEventListener("click",openportfolioimage)

//BACKGROUND BG//
    //BACKGROUND BG BUTTON//
        const home_bg_button = document.getElementById("home-bg-button")
        const gallery_bg_button = document.getElementById("gallery-bg-button")
        const rate_bg_button = document.getElementById("rate-bg-button")
        const portfolio_bg_button = document.getElementById("portfolio-bg-button")
        const service_bg_button = document.getElementById("service-bg-button")
        const about_bg_button = document.getElementById("about-bg-button")
    //
    //UPLOAD BUTTON//
        const upload_button = document.getElementsByClassName("upload-button")[0]
        const upload_button1 = document.getElementsByClassName("upload-button")[1]
        const upload_button2 = document.getElementsByClassName("upload-button")[2]
        const upload_button3 = document.getElementsByClassName("upload-button")[3]
        const upload_button4 = document.getElementsByClassName("upload-button")[4]
        const bg_file_upload = document.getElementsByClassName("file-upload")[0]
        const cancel_upload1 = document.getElementsByClassName("cancel-upload") [1]
    //
    //BACKGROUND UPLOAD//
        const home_upload = document.getElementsByClassName("home-upload")[0]
        const gallery_bg = document.getElementsByClassName("gallery-bg")[0]
        const rates_bg = document.getElementsByClassName("rates-bg")[0]
        const portfolio_bg = document.getElementsByClassName("portfolio-bg")[0]
        const service_bg = document.getElementsByClassName("service-bg")[0]
        const about_bg = document.getElementsByClassName("about-bg")[0]
    //
        // BACKGROUND FUNCTION//
        function openhomebg(){
            home_upload.style.display = "block" 
            closegallerybg()
            closeratebg()
            closeportfoliobg()
            closeservicebg()
            closeaboutbg()
        }
        function closehomebg(){
            home_upload.style.display = "none"
        }
        function opengallerybg(){
            gallery_bg.style.display ="block"
        
            closehomebg()
            closeratebg()
            closeportfoliobg()
            closeservicebg()
            closeaboutbg()
        }
        function closegallerybg(){
            gallery_bg.style.display ="none"
        }

        function openratebg(){
            rates_bg.style.display ="block"
            closehomebg()
            closegallerybg()
            closeportfoliobg()
            closeservicebg()
            closeaboutbg()
        }
        function closeratebg(){
            rates_bg.style.display ="none"
        }
        function openportfoliobg(){
            portfolio_bg.style.display ="block"
            closehomebg()
            closegallerybg()
            closeratebg()
            closeservicebg()
            closeaboutbg()
        }
        function closeportfoliobg(){
            portfolio_bg.style.display ="none"
        }
        function openservicebg(){
            service_bg.style.display ="block"
            closehomebg()
            closegallerybg()
            closeratebg()
            closeportfoliobg()
            closeaboutbg()
        }
        function closeservicebg(){
            service_bg.style.display ="none"
        }
        function openaboutbg(){
            about_bg.style.display ="block"
            closehomebg()
            closegallerybg()
            closeratebg()
            closeportfoliobg()
            closeservicebg()
        }
        function closeaboutbg(){
            about_bg.style.display ="none"
        }
        function openfileupload(){
            bg_file_upload.style.display ="block"
        }
        function closefileupload(){
            bg_file_upload.style.display ="none"
        }
        home_bg_button.addEventListener("click", openhomebg)
        gallery_bg_button.addEventListener("click", opengallerybg)
        rate_bg_button.addEventListener("click", openratebg)
        portfolio_bg_button.addEventListener("click", openportfoliobg)
        service_bg_button.addEventListener("click", openservicebg)
        about_bg_button.addEventListener("click", openaboutbg)
        upload_button1.addEventListener("click", openfileupload)
        upload_button2.addEventListener("click", openfileupload)
        upload_button3.addEventListener("click", openfileupload)
        upload_button4.addEventListener("click", openfileupload)
        cancel_upload1.addEventListener("click", closefileupload)

    //
//HOME DETAIL//
    //HOME-UPLOAD//
        const home_upload_detail = document.getElementsByClassName("home-upload-detail")[0]
        const home_file_upload = document.getElementsByClassName("home-file-upload")[0]
        const cancel_upload = document.getElementsByClassName("cancel-upload") [0]  
        const home_upload_list= document.getElementsByClassName("home-upload-list")
        const home_upload_item= document.getElementsByClassName("home-upload-item")[0]
    //
    

    function openhomedetail(){
        home_upload_detail.style.display = "block"
        home_upload_detail.style.display = "flex"
    }
    function closehomedetail(){
        home_upload_detail.style.display = "none"
    }
    
    upload_button.addEventListener("click", openhomedetail)
    cancel_upload.addEventListener("click", closehomedetail)
    //
    //GALLERY IMAGE
    const photography= document.getElementById("photography")
    const make_up= document.getElementById("make-up")
    const noble= document.getElementsByClassName("noble")[0]
    const justklassic= document.getElementsByClassName("justklassic")[0]
    const gallery_upload= document.getElementsByClassName("gallery-upload")[0]
    const gallery_image_icon= document.getElementsByClassName("gallery-image-icon")[0]
    const gallery_image_icon1= document.getElementsByClassName("gallery-image-icon")[1]
    const gallery_cancel = document.getElementsByClassName("gallery-cancel") [0] 

    function opennoble(){
    noble.style.display = "block"
    noble.style.display = "flex"
    closeklassic()
    }
    function closenoble(){
    noble.style.display = "none"
    }
    function openklassic(){
    justklassic.style.display = "block"
    justklassic.style.display = "flex"
    closenoble()
    }
    function closeklassic(){
    justklassic.style.display = "none"
    
    }
    function opengalleryupload(){
    gallery_upload.style.display = "block"
    gallery_upload.style.display = "flex"
    }
    function closegalleryupload(){
    gallery_upload.style.display = "none"
    }
    photography.addEventListener("click", opennoble)
    make_up.addEventListener("click", openklassic)
    gallery_image_icon.addEventListener("click", opengalleryupload)
    gallery_image_icon1.addEventListener("click", opengalleryupload)
    gallery_cancel.addEventListener("click",closegalleryupload)

//PORTFOLIO
    const indoor_text= document.getElementById("indoor-text")
    const outdoor_text= document.getElementById("outdoor-text")
    const portrait_text= document.getElementById("portrait-text")
    const fashion_text= document.getElementById("fashion-text")
    const product_text= document.getElementById("product-text")
    const makeup_text= document.getElementById("makeup-text")


    const indoor= document.getElementsByClassName("indoor")[0]
    const outdoor= document.getElementsByClassName("outdoor")[0]
    const portrait= document.getElementsByClassName("portraits")[0]
    const fashion= document.getElementsByClassName("fashion")[0]
    const product= document.getElementsByClassName("product")[0]
    const make_upbg= document.getElementsByClassName("make-up")[0]

    const portfolio_icon= document.getElementsByClassName("portfolio-image-icon")[0]
    const portfolio_icon1= document.getElementsByClassName("portfolio-image-icon")[1]
    const portfolio_icon2= document.getElementsByClassName("portfolio-image-icon")[2]
    const portfolio_icon3= document.getElementsByClassName("portfolio-image-icon")[3]
    const portfolio_icon4= document.getElementsByClassName("portfolio-image-icon")[4]
    const portfolio_icon5= document.getElementsByClassName("portfolio-image-icon")[5]

    const portfolio_upload= document.getElementsByClassName("portfolio-upload")[0]
    const portfolio_cancel= document.getElementsByClassName("portfolio-cancel")[0]

    function openindoor(){
        indoor.style.display="block"
        indoor.style.display="flex"
        closeoutdoor()
        closeportrait()
        closefashion()
        closeproduct()
        closemakeup()
    }
    function closeindoor(){
        indoor.style.display="none"
    }
    function openoutdoor(){
        outdoor.style.display="block"
        outdoor.style.display="flex"
        closeindoor()
        closeportrait()
        closefashion()
        closeproduct()
        closemakeup()
    }
    function closeoutdoor(){
        outdoor.style.display="none"
    }
    function openportrait(){
       portrait.style.display="block"
       portrait.style.display="flex"
        closeindoor()
        closeoutdoor()
        closefashion()
        closeproduct()
        closemakeup()
    }
    function closeportrait(){
        portrait.style.display="none"
    }
    function openfashion(){
        fashion.style.display="block"
        fashion.style.display="flex"
        closeindoor()
        closeoutdoor()
        closeportrait()
        closeproduct()
        closemakeup()
    }
    function closefashion(){
        fashion.style.display="none"
    }
    function openproduct(){
        product.style.display="block"
        product.style.display="flex"
        closeindoor()
        closeoutdoor()
        closeportrait()
        closefashion()
        closemakeup()
    }
    function closeproduct(){
        product.style.display="none"
    }
    function openmakeup(){
        make_upbg.style.display="block"
        make_upbg.style.display="flex"
        closeindoor()
        closeoutdoor()
        closeportrait()
        closefashion()
        closeproduct()

    }
    function closemakeup(){
        make_upbg.style.display="none"

    }
    function openportfolioupload(){
        portfolio_upload.style.display = "block"
        portfolio_upload.style.display = "flex"
        }
        function closeportfolioupload(){
        portfolio_upload.style.display = "none"
        }

    indoor_text.addEventListener("click", openindoor)
    outdoor_text.addEventListener("click", openoutdoor)
    portrait_text.addEventListener("click", openportrait)
    fashion_text.addEventListener("click", openfashion)
    product_text.addEventListener("click", openproduct)
    makeup_text.addEventListener("click", openmakeup)
    portfolio_icon.addEventListener("click", openportfolioupload)
    portfolio_icon1.addEventListener("click", openportfolioupload)
    portfolio_icon2.addEventListener("click", openportfolioupload)
    portfolio_icon3.addEventListener("click", openportfolioupload)
    portfolio_icon4.addEventListener("click", openportfolioupload)
    portfolio_icon5.addEventListener("click", openportfolioupload)
    portfolio_cancel.addEventListener("click", closeportfolioupload)









