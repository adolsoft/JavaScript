
// Polymorphism

class Bildirim {

bildirimYap = (gelenClass) => {
    console.log("islem yapıldı");
    gelenClass.gonder();
    console.log("bildiirm yapıldı");
}

}



class Mesaj {
    constructor(msg){
        this.mesaj = msg ;
    }

    gonder = () => {
        console.log(this.mesaj + " gonderildi ")
    }

}


class Email extends Mesaj {
    constructor(msg){
    super(msg);
    
    }
 

}


class Sms extends Mesaj {
    constructor(msg){
    super(msg);   
    
    }

    
}

const mail = new Email('Mail mesajı');
const sms = new Email('Sms mesajı');

//mail.gonder();
//sms.gonder();

const click = () => {
    //mail.gonder();
    const bildirim = new Bildirim();
    bildirim.bildirimYap(mail);

}

click();