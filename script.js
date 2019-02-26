var step;

// first level
for (step = 0; step <= 1; step++) {
    north();
}

// second level
for (step = 0; step <= 15; step++) {
    east();
}

// third level
for (step = 0; step <= 6; step++) {
    south();
    east();
}

// fourth level
for(step = 0; step < 1; step++) {
    south();

    for(step = 0; step <= 2; step++) {
        east();
    }

    for(step = 0; step <= 1; step++) {
        south();
    }

    east();

    for(step = 0; step <= 2; step++) {
        south();
    }

    for(step = 0; step <= 1; step++) {
        east();
    }

    south();
}


// fifth level
for(step = 0; step < 1; step++) {
    for(step = 0; step <= 5; step++) {
        east();
    }

    for(step = 0; step <= 1; step++) {
        south();
    }

    for(step = 0; step <= 1; step++) {
        west();
    }

    for(step = 0; step <= 2; step++) {
        south();
    }

    for(step = 0; step <= 1; step++) {
        west();
    }

    for(step = 0; step <= 2; step++) {
        north();
    }

    for(step = 0; step <= 1; step++) {
        west();
    }

    for(step = 0; step <= 4; step++) {
        south();
    }

    for(step = 0; step <= 5; step++) {
        east();
    }

}


// sixth level
for(step = 0; step < 1; step++) {
    for(step = 0; step <= 4; step++) {
        south();
    }

    for(step = 0; step <= 1; step++) {
        east();
    }

    for(step = 0; step <= 2; step++) {
        north();
    }

    east();

    for(step = 0; step <= 1; step++) {
        north();
    }

    for(step = 0; step <= 2; step++) {
        east();
    }

    for(step = 0; step <= 3; step++) {
        south();
    } 

    for(step = 0; step <= 1; step++) {
        west();
    }

    for(step = 0; step <= 2; step++) {
        south();
    }

    for(step = 0; step <= 1; step++) {
        east();
    }
}


// seventh level
for(step = 0; step < 1; step++) {
    for(step = 0; step <= 10; step++) {
        south();
    }

    for(step = 0; step <= 3; step++) {
        east();
    }

    for(step = 0; step <= 10; step++) {
        north();
    }

    for(step = 0; step <= 1; step++) {
        east();
    }

    south();

    east();

    for(step = 0; step <= 4; step++) {
        south();
    }

    west();

    for(step = 0; step <= 6; step++) {
        south();
    }

    for(step = 0; step <= 7; step++) {
        east();
    }

    for(step = 0; step <= 8; step++) {
        south();
    }

    east();
}