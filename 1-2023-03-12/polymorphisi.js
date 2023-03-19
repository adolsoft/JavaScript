
// buraya dokunmadan bazı parametleler verek istediğimi esnekliğe sahi polmasını istiyoruz
class Bildirim {
    yap = (gelenClass) => {
        console.log("-----------")
        gelenClass.gonder()
        console.log("bildirim yapıldı");
        console.log("-----------")
    }
}

/*  ana kod bloğu yukarısı oluyor */ 

class Mesaj {

    constructor(paramMesaj){
        this.mesaj = paramMesaj;
    }
    gonder = () => {
        console.log("Bu bir " + this.mesaj + " dir.");

    }
}

class Eposta extends Mesaj {
    constructor(paramMesaj) {
        super(paramMesaj);
    }
}

class SMS extends Mesaj {
    constructor(paramMesaj) {
        super(paramMesaj);
    }
}



const click = () => {

    const eposta = new Eposta("eposta mesajı");
    //const sms = new Eposta("sms mesajı");
        const bildirim = new Bildirim();
    bildirim.yap(eposta)
}


click()