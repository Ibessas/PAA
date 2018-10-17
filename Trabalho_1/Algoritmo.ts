class Ponto{
    private x: number = 0;
    private y: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public getX(){
        return this.x;
    }

    public getY() {
        return this.y;
    }
}

class pontosProximos{

    //terminar
    public ordenarX(pontos: Ponto[], indice: number) {

        if (indice == pontos.length) {
            return pontos;
        } else {
            
        }

    }

    public getMeio(pontos: Ponto[]) {
        var meio = (pontos.length / 2) + 1;
        return pontos[meio];
    }

    public solucao(pontos: Ponto[]){
        var meio = this.getMeio(pontos); 

        var aux: Ponto[];
        var distMin: number = 9999999;

        

    } 
   
}