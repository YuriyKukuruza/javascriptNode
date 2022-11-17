
enum MemberShip {
    Simple, 
    Standard,
    Premium
}

const member = MemberShip.Standard; 
const member1 = MemberShip[2];

console.log(member) // index here
console.log(member1) // value Premium

enum SocialMedia {
    VB  = 'Viber', 
    FB  = 'FaceBook',
    TG  = 'Telegram'
}

const media = SocialMedia.TG;
console.log(media) // Telegram
