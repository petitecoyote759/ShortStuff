import { Section } from "./main";


export function DefaultSections(): Section[] {
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;

    const sections: Section[] = [
        new Section("1", "First Section", (<p>No Contents</p>)),
        new Section("2", "First Subsection", (<p>Yurppp</p>)),
        new Section("2", "Second Subsection", (<p>Yaergaerpp</p>)),
        new Section("4", "Subsubsubsection", (<p>sigh</p>)),
        new Section("1", "Second Section", (<p>okay</p>)),
        new Section("2", "Third Subsection", (<p>yayyyy</p>)),
    ]


    sections.forEach(section => {
        if (section.level == "1") {
            counter1++;
            counter2 = 0; counter3 = 0; counter4 = 0;
            section.id = `${counter1}`
        }
        else if (section.level == "2") {
            counter2++;
            counter3 = 0; counter4 = 0;
            section.id = `${counter1}.${counter2}`
        }
        else if (section.level == "3") {
            counter3++;
            counter4 = 0;
            section.id = `${counter1}.${counter2}.${counter3}`
        }
        else {
            counter4++;
            section.id = `${counter1}.${counter2}.${counter3}.${counter4}`
        }
    })

    return sections
}