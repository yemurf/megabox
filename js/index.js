let insertEls = '';                
                let fileNum = '';                    
                $.ajax({
                    type:'GET',
                    url:'./json/boxoffice.json',
                    dataType:'json',                    
                    success:function(data){                        
                        data.sort(function(a,b){           
                            return b.hit - a.hit;
                        })
                        console.log(data);
                        let lastIdx = data.length - 1;
                        for(let idx=0;idx<=lastIdx;idx++){                            
                            if(idx<=8){
                                fileNum = `0${idx + 1}`;                            
                            }else{
                                fileNum = `${idx + 1}`;
                            }                                
                            insertEls += `<div class="swiper-slide swiper-slide${fileNum}"><div class="poster-wrap"><div class="poster-box"><div class="img-box"><img src="./images/img-${data[idx].posterName}.jpg" alt="${data[idx].title}"></div><div class="movie-num">${idx + 1}</div><div class="movie-content"><p>${data[idx].conTxt}</p><span>관람평 : <span>${data[idx].review}</span></span></div></div><div class="hit">${data[idx].hit}k</div><div class="ticketing">예매</div></div></div>`;
                        }
                        $('#boxoffice-slide-wrapper').append(insertEls);
                        fnBoxoffice();
                    },                   
                    error:function(){
                       $('body').children().remove();
                       $('body').css({
                            background:'url(./images/logo.png) no-repeat center',
                            height:'100vh',
                       })
                    },
                })