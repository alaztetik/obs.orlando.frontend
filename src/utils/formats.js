import moment from "moment";

export function formatUsername(username) {
    switch (username) {
        case "ebruerkan":
            return "Ebru Erkan";
        case "emretas":
            return "Emre Taş";
        case "dogukani":
            return "Doğukan İzlimek";
        case "meltemmeraki":
            return "Meltem Meraki";
        case "alaztetik":
            return "admin";
        default:
            break;
    }
}


export function formatExpenseName(expenseType) {
    switch (expenseType) {
        case "startup":
            return "Kuruluş";
        case "electricity":
            return "Elektrik Faturası";
        case "water":
            return "Su Faturası";
        case "internet":
            return "Internet Faturası";
        case "phone":
            return "Telefon Faturası";
        case "naturalGas":
            return "Doğal Gaz";
        case "assets":
            return "Demirbaş";
        case "stationery":
            return "Kırtasiye";
        case "rent":
            return "Kira";
        case "restoration":
            return "Tadilat";
        case "transportation":
            return "Ulaşım";
        case "taxes":
            return "Vergi";
        case "shopping":
            return "Market";
        case "food":
            return "Yemek";
        case "finance":
            return "Finans";
        case "personelSalary":
            return "Personel - Maaş";
        case "personelInsurance":
            return "Personel - SGK";
        case "personelBonus":
            return "Personel - Prim";
        case "bookTrainingMaterial":
            return "Kitap / Eğitim Materiyali";
        case "payback":
            return "Kayıt İptali / İade";
        case "promo":
            return "Reklam / Tanıtım";
        case "event":
            return "Organizasyon / Etkinlik";
        case "other":
            return "Diğer";
        default:
            return "";
    }
}


export function formatPaymentMethod(method) {
    switch (method) {
        case "creditCardCorporate":
            return "Kredi Kartı (Kurumsal)";
        case "creditCardPersonal":
            return "Kredi Kartı (Kişisel)";
        case "cash":
            return "Nakit";
        case "debitCardCorporate":
            return "Banka Kartı (Kurumsal)";
        case "debitCardPersonal":
            return "Banka Kartı (Kişisel)";
        case "founder":
            return "Kurucu";
        default:
            return "Diğer";
    }
}


export function formatDate(stringDate) {
    moment.locale();
    const date = moment(stringDate).format('ll');
    return date;
}