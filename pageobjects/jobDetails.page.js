import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobDetails extends Page {
    /**
     * define selectors using getter methods
     */
    get getState () {
        return $("//tr[2]//td[text()=' New Hope']")
    }
    get getCity () {
        return $("//tr[2]//td[text()=' Minnesota']")
    }
    get getSpecialty () {
        return $("//tr[2]//td[text()='  Medical Assistant (MA)']")
    }
    get getShift () {
        return $("//tr[2]//td[text()='7:00 AM 5:30 PM']")
    }
    get getJobID () {
        return $("//tr[2]//td[2]//a[text()='1174721']")
    }


}

export default new JobDetails();
