function walkthrough() {
    var step;
    function level1() {
        for (step = 0; step <= 2; step++) {
            north();
        }
    }
    level1();
    
    function level2() {
        for (step = 0; step <= 17; step++) {
            east();
        }
    }
    level2();
    
    function level3() {
        for (step = 0; step <= 6; step++) {
            south();
            east();
        }
    }
    level3();
    
    function level4() {
        south();
        
        for(step = 0; step <= 3; step++) {
            east();
        }
        
        for(step = 0; step <= 2; step++) {
            south();
        }
        
        east();
        
        for(step = 0; step <= 3; step++) {
            south();
        }
        
        for(step = 0; step <= 2; step++) {
            east();
        }
        
        south();
    }
    level4();
    
    function level5() {
        for(step = 0; step <= 6; step++) {
            east();
        }
        
        for(step = 0; step <= 3; step++) {
            south();
        }
        
        for(step = 0; step <= 2; step++) {
            west();
        }
        
        for(step = 0; step <= 4; step++) {
            south();
        }
        
        for(step = 0; step <= 2; step++) {
            west();
        }
        
        for(step = 0; step <= 3; step++) {
            north();
        }
        
        for(step = 0; step <= 2; step++) {
            west();
        }
        
        for(step = 0; step <= 5; step++) {
            south();
        }
        
        for(step = 0; step <= 6; step++) {
            east();
        }
        
    }
    level5();
    
    function level6() {
        for(step = 0; step <= 5; step++) {
            south();
        }
        
        for(step = 0; step <= 2; step++) {
            east();
        }
        
        for(step = 0; step <= 3; step++) {
            north();
        }
        
        east();
        
        for(step = 0; step <= 2; step++) {
            north();
        }
        
        for(step = 0; step <= 3; step++) {
            east();
        }
        
        for(step = 0; step <= 3; step++) {
            south();
        } 
        
        for(step = 0; step <= 2; step++) {
            west();
        }
        
        for(step = 0; step <= 3; step++) {
            south();
        }
        
        for(step = 0; step <= 2; step++) {
            east();
        }
    }
    level6()
    
    function level7() {
        for(step = 0; step <= 11; step++) {
            south();
        }
        
        for(step = 0; step <= 4; step++) {
            east();
        }
        
        for(step = 0; step <= 11; step++) {
            north();
        }
        
        for(step = 0; step <= 2; step++) {
            east();
        }
        
        south();
        
        east();
        
        for(step = 0; step <= 5; step++) {
            south();
        }
        
        west();
        
        for(step = 0; step <= 7; step++) {
            south();
        }
        
        for(step = 0; step <= 8; step++) {
            east();
        }
        
        for(step = 0; step <= 9; step++) {
            south();
        }
        
        east();
    }
    level7()
}

walkthrough();


