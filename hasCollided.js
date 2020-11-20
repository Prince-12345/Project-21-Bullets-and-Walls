function hasCollided(bullet1,wall1){
    bulletRightEdge=bullet1.x+bullet1.width;
    wallLeftEdge=wall1.x-wall1.width/2;
    if(bulletRightEdge>=wallLeftEdge){

        return true
    }
        return false
    }

