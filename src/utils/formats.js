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


export function formatPreferredLanguage(language) {
    switch (language) {
        case "english":
            return "İngilizce";
        case "german":
            return "Almanca";
        case "french":
            return "Fransızca";
        case "spanish":
            return "İspanyolca";
        case "italian":
            return "İtalyanca";
        case "russian":
            return "Rusça";
        case "arabic":
            return "Arapça";
        default:
            break;
    }
}


export function formatPreferredCourseType(courseType) {
    switch (courseType) {
        case "1_1":
            return "1+1";
        case "2_1":
            return "2+1";
        case "3_1":
            return "3+1";
        case "4_2":
            return "4+2";
        case "private":
            return "Özel Ders";
        case "examPrivate":
            return "Sınav (Özel)";
        case "examGroup":
            return "Sınav (Grup)";
        case "kidsFall":
            return "Kids Güz Dönemi";
        case "kidsSummer":
            return "Kids Yaz Dönemi";
        default:
            break;
    }
}


export function formatPreferredDays(days) {
    switch (days) {
        case "mondayAndWednesday":
            return "Pazartesi - Çarşamba";
        case "tuesdayAndThursday":
            return "Salı - Perşembe";
        case "saturdayAndSunday":
            return "Cumartesi - Pazar";
        case "other":
            return "Diğer";
        default:
            break;
    }
}


export function formatPreferredHours(hours) {
    switch (hours) {
        case "9_12":
            return "09:00 - 12:10";
        case "12_15":
            return "12:30 - 15:40";
        case "16_19":
            return "16:00 - 19:10";
        case "19_22":
            return "19:30 - 22:40";
        case "other":
            return "Diğer";
        default:
            break;
    }
}


export function formatLanguageLevel(level) {
    if (level === "other") {
        return "Diğer";
    }
    return level;
}