	// 預設最終球體座標
        var ball_x = 0;
        var ball_y = 0;
        // 預設滑鼠座標
        var mouse_x = 0;
        var mouse_y = 0;
        
        // 用戶移動滑鼠速度
        var vel_x = 0;
        var vel_y = 0;
        
        // 定義一個常量，以此例是document.docuumentElement.style縮短射程docStyle
        const docStyle = document.documentElement.sytle;
        // 定義一個強度的常量
        const strength = 0.15;
        // 定義一個給予速度強度的常量
        const drag = 0.15;
        
        // 透過JS抓取滑鼠座標回傳給CSS
        // 以document指向，來增設監聽器
        // addEventListener(監聽滑鼠移動之座標,間聽後須做的反應)
        // 間聽後須做的反應為一function()但可以省略function只寫括號，括號內放返回的數
        document.addEventListener("mousemove", (event) => {
            
            // 顯示xy座標
            // console.log(event.clientX);
            // console.log(event.clientY);
            
            // 透過event.clientX跟event.clientY去獲得
            mouse_x = event.clientX;
            mouse_y = event.clientY;
            
        });
        
        // 讓圓圈跟隨滑鼠位置
        // 注意:滑鼠座標目前不等於球體座標，所以需要此function來換算
        function delayMotion()
        {
            // 賦予球體座標為滑鼠座標
            // 利用鼠標與球體之間的距離呈現延遲效果
            var distance_x = mouse_x -  ball_x ;
            distance_x *= strength;
            vel_x *= drag;
            vel_x += distance_x;
            
            ball_x += vel_x;
            
            // console.log("distance_x: ", distance_x);
            // console.log("mouse_x: ", mouse_x);
            // console.log("ball_x: ",ball_x);
            
            var distance_y = mouse_y - ball_y ;
            distance_x *= strength;
            vel_y *= drag;
            vel_y += distance_y
            
            ball_y += vel_y;
            
            // 把最終結果設定到css裡面去
            // 以指向文檔去執行
            // (指向的文檔.文檔內元素呈現)
            docStyle.setProperty("--mouse-x", ball_x);
            docStyle.setProperty("--mouse-y", ball_y);
            
            // 設置css中scale的變量，與x,y軸的速度有關
            docStyle.setProperty("--scale", (vel_x + vel_y) * strength );
            
            // 為了將每一偵不斷地變換座標，所以不斷重複執行delayMotion
            requestAnimationFrame(delayMotion);
            
        }
        
        
        delayMotion();