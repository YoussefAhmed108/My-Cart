var Total = 0;
        var plus = document.getElementById('plus1');
        plus.addEventListener('click',function add(){
            var count = document.getElementById('count1');
            var num = parseInt(count.textContent,10);
            num++;
            count.textContent = num;
            Total+=3
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            console.log(`Total : ${Total} EGP`) 
        });

        var minus = document.getElementById('minus1');
        minus.addEventListener('click',function add(){
            var count = document.getElementById('count1');
            var num = parseInt(count.textContent,10);
            num--;
            if(num >= 0){
                count.textContent = num;
                Total-=3
                var total = document.getElementById('total')
                total.innerHTML = `Total : ${Total} EGP`
                console.log(`Total : ${Total} EGP`) 
            }
            else{
                count.textContent = 0
                count.classList.add("apply-shake");
            }
            
        });

        var del = document.getElementById('delete1');
        del.addEventListener('click',function remove(){
            var item = document.getElementById('item1');
            var num = parseInt(document.getElementById('count1').textContent,10)
            Total = Total - (num*3)
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            item.remove();
        });

        var like1 = document.getElementById('like1');
        like1.addEventListener('click',function like(){
            if(!like1.style.color){
                like1.style.color = 'green';
                alert("Chipsy has been added to your likes")
            }
            else{
                like1.style.removeProperty('color');
                alert("Chipsy has been removed from your likes")
            }
        });

        // Second Item

        var plus2 = document.getElementById('plus2');
        plus2.addEventListener('click',function add(){
            var count = document.getElementById('count2');
            var num = parseInt(count.textContent,10);
            num++;
            count.textContent = num;
            Total+=5
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            console.log(`Total : ${Total} EGP`) 
        });

        var minus2 = document.getElementById('minus2');
        minus2.addEventListener('click',function add(){
            var count = document.getElementById('count2');
            var num = parseInt(count.textContent,10);
            num--;
            if(num >= 0){
                count.textContent = num;
                Total-=5
                var total = document.getElementById('total')
                total.innerHTML = `Total : ${Total} EGP`
                console.log(`Total : ${Total} EGP`) 
            }
            else{
                count.textContent = 0
                count.classList.add("apply-shake");
            }
            
        });

        var del2 = document.getElementById('delete2');
        del2.addEventListener('click',function remove(){
            var item = document.getElementById('item2');
            var num = parseInt(document.getElementById('count2').textContent,10)
            Total = Total - (num*5)
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            item.remove();
        });

        var like2 = document.getElementById('like2');
        like2.addEventListener('click',function like(){
            if(!like2.style.color){
                like2.style.color = 'green';
                alert("Oreo has been added to your likes")
            }
            else{
                like2.style.removeProperty('color');
                alert("Oreo has been removed from your likes")
            }
        });

        // Third Item

        var plus3 = document.getElementById('plus3');
        plus3.addEventListener('click',function add(){
            var count = document.getElementById('count3');
            var num = parseInt(count.textContent,10);
            num++;
            count.textContent = num;
            Total+=4
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            console.log(`Total : ${Total} EGP`) 
        });

        var minus3 = document.getElementById('minus3');
        minus3.addEventListener('click',function add(){
            var count = document.getElementById('count3');
            var num = parseInt(count.textContent,10);
            num--;
            if(num >= 0){
                count.textContent = num;
                Total-=4
                var total = document.getElementById('total')
                total.innerHTML = `Total : ${Total} EGP`
                console.log(`Total : ${Total} EGP`) 
            }
            else{
                count.textContent = 0
                count.classList.add("apply-shake");
            }
            
        });

        var del3 = document.getElementById('delete3');
        del3.addEventListener('click',function remove(){
            var item = document.getElementById('item3');
            console.log("Here")
            var num = parseInt(document.getElementById('count3').textContent,10)
            Total = Total - (num*4)
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            item.remove();
        });

        var like3 = document.getElementById('like3');
        like3.addEventListener('click',function like(){
            if(!like3.style.color){
                like3.style.color = 'green';
                alert("Water has been added to your likes")
            }
            else{
                like3.style.removeProperty('color');
                alert("Water has been removed from your likes")
            }
        });
        // Fourth Item

        var plus4 = document.getElementById('plus4');
        plus4.addEventListener('click',function add(){
            var count = document.getElementById('count4');
            var num = parseInt(count.textContent,10);
            num++;
            count.textContent = num;
            Total+=40
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            console.log(`Total : ${Total} EGP`) 
        });

        var minus4 = document.getElementById('minus4');
        minus4.addEventListener('click',function add(){
            var count = document.getElementById('count4');
            var num = parseInt(count.textContent,10);
            num--;
            if(num >= 0){
                count.textContent = num;
                Total-=40
                var total = document.getElementById('total')
                total.innerHTML = `Total : ${Total} EGP`
                console.log(`Total : ${Total} EGP`) 
            }
            else{
                count.textContent = 0
                count.classList.add("apply-shake");
            }
            
        });

        var del4 = document.getElementById('delete4');
        del4.addEventListener('click',function remove(){
            var item = document.getElementById('item4');
            var num = parseInt(document.getElementById('count4').textContent,10)
            Total = Total - (num*40)
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            item.remove();
        });

        var like4 = document.getElementById('like4');
        like4.addEventListener('click',function like(){
            if(!like4.style.color){
                like2.style.color = 'green';
                alert("Red Bull has been added to your likes")
            }
            else{
                like4.style.removeProperty('color');
                alert("Red Bull has been removed from your likes")
            }
        });

        // Fifth Item

        var plus5 = document.getElementById('plus5');
        plus5.addEventListener('click',function add(){
            var count = document.getElementById('count5');
            var num = parseInt(count.textContent,10);
            num++;
            count.textContent = num;
            Total+=80
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            console.log(`Total : ${Total} EGP`) 
        });

        var minus5 = document.getElementById('minus5');
        minus5.addEventListener('click',function add(){
            var count = document.getElementById('count5');
            var num = parseInt(count.textContent,10);
            num--;
            if(num >= 0){
                count.textContent = num;
                Total-=80
                var total = document.getElementById('total')
                total.innerHTML = `Total : ${Total} EGP`
                console.log(`Total : ${Total} EGP`) 
            }
            else{
                count.textContent = 0
                count.classList.add("apply-shake");
            }
            
        });

        var del5 = document.getElementById('delete5');
        del5.addEventListener('click',function remove(){
            var item = document.getElementById('item5');
            var num = parseInt(document.getElementById('count5').textContent,10)
            Total = Total - (num*80)
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            item.remove();
        });

        var like5 = document.getElementById('like5');
        like5.addEventListener('click',function like(){
            if(!like2.style.color){
                like2.style.color = 'green';
                alert("Pringles has been added to your likes")
            }
            else{
                like2.style.removeProperty('color');
                alert("Pringles has been removed from your likes")
            }
        });


        // Sixth Item

        var plus6 = document.getElementById('plus6');
        plus6.addEventListener('click',function add(){
            var count = document.getElementById('count6');
            var num = parseInt(count.textContent,10);
            num++;
            count.textContent = num;
            Total+=60
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            console.log(`Total : ${Total} EGP`) 
        });

        var minus6 = document.getElementById('minus6');
        minus6.addEventListener('click',function add(){
            var count = document.getElementById('count6');
            var num = parseInt(count.textContent,10);
            num--;
            if(num >= 0){
                count.textContent = num;
                Total-=60
                var total = document.getElementById('total')
                total.innerHTML = `Total : ${Total} EGP`
                console.log(`Total : ${Total} EGP`) 
            }
            else{
                count.textContent = 0
                count.classList.add("apply-shake");
            }
            
        });

        var del6 = document.getElementById('delete6');
        del6.addEventListener('click',function remove(){
            var item = document.getElementById('item6');
            var num = parseInt(document.getElementById('count6').textContent,10)
            Total = Total - (num*60)
            var total = document.getElementById('total')
            total.innerHTML = `Total : ${Total} EGP`
            item.remove();
        });

        var like6 = document.getElementById('like6');
        like6.addEventListener('click',function like(){
            if(!like6.style.color){
                like6.style.color = 'green';
                alert("Lotus has been added to your likes")
            }
            else{
                like6.style.removeProperty('color');
                alert("Lotus has been removed from your likes")
            }
        });


        