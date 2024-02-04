const logotext = "HOME";
const meta = {
    title: "Kevin Chénier Portfolio",
    description: "I’m Kevin Chénier, Software Developer, currently completing a master's degree in Healthcare technologies at CRCHUM",
};

const introdata = {
    title: "Hi, I’m Kevin Chénier | Software Developer",
    animated: {
        first: "\"Does the code we write reflect our own biases and limitations, or can we transcend them to create unbiased and objective systems?\"",
        second: "\"If the universe is a simulation with its laws and constants, then the mathematics is its code and a physicist is a programmer.\"",
        third: "\"Should we be more afraid of a computer passing the Turing Test, or one that already intentionnally fails it?\"",
    },
    description: "I am an enthusiastic and committed individual with a scientific background, and I have developed a deep fascination for state-of-the-art technologies like virtual/augmented reality, machine learning, and gamification. I have gained extensive experience developing various projects from inception for healthcare/academia purposes through various game engines.",
    your_img_url: require('./assets/images/gamingroom.png'),
};

const aboutDocuments = [
    {
        link: require("./assets/images/NotesBac.png"),
        title: "Bachelor's Degree Transcript"
    },
    {
        link: require("./assets/images/NotesBac2.png"),
        title: "Bachelor's Degree Transcript"
    },
    {
        link: require("./assets/images/Resume_KevinChenier_v9.png"),
        title: "Resume"
    },
    {
        link: require("./assets/images/NotesMaitrise.png"),
        title: "Master's Degree Transcript"
    },
    {
        link: require("./assets/images/diplomeBac.png"),
        title: "Engineering Degree"
    }
]

const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const logos = [
    {
        title: "SolidWorks",
        link: require('./assets/images/solidworks.png'),
        project: "/portfolio/hovercraft"
    },
    {
        title: "Unity",
        link: require('./assets/images/unity.png'),
        project: "/portfolio/ataxiatools"
    },
    {
        title: "Unreal Engine",
        link: require('./assets/images/unrealengine.png'),
        project: "/portfolio/chemistrylab"
    },
    {
        title: "C#",
        link: require('./assets/images/c#.png'),
        project: "/portfolio/vrclassification"
    },
    {
        title: "C++",
        link: require('./assets/images/c++.png'),
        project: "/portfolio/unknown9awakening"
    },
    {
        title: "MATLAB",
        link: require('./assets/images/matlab.png'),
        project: "/portfolio/ataxiatools"
    },
    {
        title: "Python",
        link: require('./assets/images/python.png'),
        project: "/portfolio/ataxiatools"
    },
    {
        title: "PyTorch",
        link: require('./assets/images/pytorch.png'),
        project: "/portfolio/ataxiatools"
    },
    {
        title: "React.js",
        link: require('./assets/images/react.png'),
        project: "#"
    },
    {
        title: "TypeScript",
        link: require('./assets/images/typescript.png'),
        project: "#"
    },
    {
        title: "JavaScript",
        link: require('./assets/images/javascript.png'),
        project: "#"
    },
    {
        title: "Meta Quest Pro",
        link: require('./assets/images/metaquestpro.png'),
        project: "/portfolio/icanbox"
    },
    {
        title: "Oculus",
        link: require('./assets/images/oculus.png'),
        project: "/portfolio/ataxiatools"
    },
    {
        title: "HTC Vive Pro Eye",
        link: require('./assets/images/vive.png'),
        project: "/portfolio/ataxiatools"
    },
    {
        title: "Hololens 2",
        link: require('./assets/images/hololens.png'),
        project: "/portfolio/holopuncture"
    },
    {
        title: "Git",
        link: require('./assets/images/git.png'),
        project: "/portfolio/horrorgame"
    },
    {
        title: "Perforce",
        link: require('./assets/images/helix-core.png'),
        project: "/portfolio/unknown9awakening"
    },
    {
        title: "MongoDB",
        link: require('./assets/images/mongodb.png'),
        project: "/portfolio/ataxiatools"
    },
    {
        title: "SQL",
        link: require('./assets/images/sql.png'),
        project: "/portfolio/vrclassification"
    },
    {
        title: "Blender",
        link: require('./assets/images/blender.png'),
        project: "/portfolio/holopuncture"
    },
    
];

const additionalLogos = [
    {
        title: "Mixed Reality Toolkit",
        link: require('./assets/images/mrtk.png')
    },
    {
        title: "MeshLab",
        link: require('./assets/images/meshlab.png')
    },
    {
        title: "3DimViewer",
        link: require('./assets/images/3ddim.png')
    },
    {
        title: "MetaHuman Creator",
        link: require('./assets/images/mhc.png')
    },
    {
        title: "Vicon",
        link: require('./assets/images/vicon.png')
    },
    {
        title: "Vive Tracker",
        link: require('./assets/images/vivetracker.png')
    },
    {
        title: "Excel",
        link: require('./assets/images/excel.png')
    },
    {
        title: "R",
        link: require('./assets/images/R.png')
    },
    {
        title: "Logic Pro X",
        link: require('./assets/images/logicpro.png')
    },
    {
        title: "Altium Designer",
        link: require('./assets/images/altium-designer.png')
    },
    {
        title: "LabVIEW",
        link: require('./assets/images/labview.png')
    },
    {
        title: "Arduino",
        link: require('./assets/images/arduino.png')
    },
    {
        title: "Atmel Studio",
        link: require('./assets/images/atmel_studio.png')
    },
    {
        title: "Visual Studio",
        link: require('./assets/images/visualstudio.png')
    },
    {
        title: "Visual Code",
        link: require('./assets/images/visualcode.png')
    },
    {
        title: "PyCharm",
        link: require('./assets/images/pycharm.png')
    },
    {
        title: "Live Link Face",
        link: require('./assets/images/livelinkface.png')
    },
    {
        title: "MySQL",
        link: require('./assets/images/mysql.png')
    },
    {
        title: "MakeHuman",
        link: require('./assets/images/makehuman.png')
    },
    {
        title: "iFacialMocap",
        link: require('./assets/images/ifacialmocap.jpg')
    },
    {
        title: "Scikit-Learn",
        link: require('./assets/images/scikit-learn.png')
    },
    {
        title: "Godot",
        link: require('./assets/images/godot.png')
    },
    {
        title: "Aseprite",
        link: require('./assets/images/asperite.png')
    },
    {
        title: "Photoshop",
        link: require('./assets/images/photoshop.png')
    },
    {
        title: "Audacity",
        link: require('./assets/images/audacity.png')
    }
]

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    {
        title: "iCANBox (2023 - Ongoing)",
        githubLink: "",
        img: require('./assets/images/icanbox_photo1.png'),
        description: "Programming a unique virtual reality boxing simulator for elite training",
        link: "/portfolio/icanbox",
        bw_image: require('./assets/images/icanbox_photo1_bw.png'),

        //video: require("./assets/videos/pointing_avatar.mp4"),
        youtube: "https://www.youtube.com/embed/U_DH09MwoJ4",
        context: "Boxing is a combat sport where decision-making skills can be improved through opposition between two boxers. Organizing such bouts implies high costs, access to high-level international sparring partners, and high risk of injury associated with repetitive blows. In collaboration with INS Quebec, the aim is to develop a unique virtual simulator “iCANBox”, capable of automatic simulation of immersive boxing opponents trained on machine learning.",
        challenges: "The main challenge here is to adapt the boxing opponents with the machine learning trained animations. The method that will be used is not entirely clear right now, as the file formats might not be supported in Unreal Engine. Further investigation is needed to properly setup the AI agents.",
        results: "Work still in progress! Prototype coming soon.",
        technologies: [
            logos.find(logo => logo.title === "Unreal Engine"),
            logos.find(logo => logo.title === "C++"),
            logos.find(logo => logo.title === "Meta Quest Pro"),
            logos.find(logo => logo.title === "Blender"),
            logos.find(logo => logo.title === "Git"),
            additionalLogos.find(logo => logo.title === "MetaHuman Creator"),
            additionalLogos.find(logo => logo.title === "Photoshop")
        ],
        features: ["AI agents using machine learning produced animations to properly simulate boxing movements.", "Develop a full performance metrics system to evaluate the player performance.", "Really good lighting conditions and upper-end graphics for VR", "Full workout in the boxing environment, simulating real boxing match and conditions."],
    },
    {
        title: "Space Survivors (2023 - Ongoing)",
        githubLink: "",
        img: require('./assets/images/space_survivors_photo1.png'),
        description: "2D game inspired by Vampire Survivors with a spaceship instead.",
        link: "/portfolio/spacesurvivors",
        bw_image: require('./assets/images/space_survivors_photo1_bw.png'),

        //video: require("./assets/videos/pointing_avatar.mp4"),
        youtube: "https://www.youtube.com/embed/dNY_pXEJanM",
        context: "With a friend of mine, we decided to explore the Godot engine, as we were interested to see how an open-source game engine would perform in terms of development. We aimed to do little testing with a Vampire Survivors kind of game, and we saw a potential in continuing the development instead. We plan to do a full space 2D game, with a release on Steam if our free time permits us.",
        challenges: "The Godot game engine is a really easy to use software once you know the philosophy behind it, but there are still some limitations. It's still a relatively new engine, so the documentation is not as developed like the Unreal Engine or the Unity documentation, and the open-source engine has some stability issues. Overall, I wouldn't say the learning curve is as steep as the other two game engines, the main challenge for us is finding free time to finish the game.",
        results: "Work still in progress! Beta coming soon (if free time permits it).",
        technologies: [
            additionalLogos.find(logo => logo.title === "Godot"),
            additionalLogos.find(logo => logo.title === "Aseprite"),
            additionalLogos.find(logo => logo.title === "Audacity")
        ],
        features: ["Diverse weapons to choose from as you level up.", "Main bosses to fight.", "Black hole teleportation mechanic.", "AI ennemies get stronger and change as you level up."],
    },
    {
        title: "Pointing Avatar (2022 - 2023)",
        githubLink: "https://github.com/KevinChenier/PointingAvatar/tree/master/Assets/Scripts",
        img: require('./assets/images/pointingavatar_photo1.png'),
        description: "Replicate a user's movements with an avatar and apply modifications to extension/abduction movements.",
        link: "/portfolio/pointingavatar",
        bw_image: require('./assets/images/pointingavatar_photo1_bw.jpg'),

        //video: require("./assets/videos/pointing_avatar.mp4"),
        youtube: "https://www.youtube.com/embed/ciMPhkSPHKI",
        context: "The project, conducted in collaboration with academics from the University of Montreal, aimed to examine the effects of modulating the movements of an avatar that a user embodies during rehabilitation. Specifically, the user was instructed to reach designated targets at specific prompts.",
        challenges: "To ensure a 1:1 ratio between the size of the avatar and the user, the application required a precise setup. Initially, I attempted to achieve this by utilizing the HTC Vive Tracker in conjunction with the HTC Vive controller. I implemented inverse kinematics scripts with a single bone chain to replicate the user's movements onto the avatar. However, this solution proved to be inadequate, prompting the adoption of the Vicon system as an alternative.",
        results: "The Vicon system has demonstrated superior effectiveness in accurately replicating user movements with enhanced precision. As of the writing of this project description, further development and advancements are ongoing. Stay tuned for updates on the project's progress!",
        technologies: [
            logos.find(logo => logo.title === "HTC Vive Pro Eye"),
            logos.find(logo => logo.title === "Unity"),
            logos.find(logo => logo.title === "C#"),
            logos.find(logo => logo.title === "Blender"),
            logos.find(logo => logo.title === "Git"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            additionalLogos.find(logo => logo.title === "Vive Tracker"),
            additionalLogos.find(logo => logo.title === "Arduino"),
            additionalLogos.find(logo => logo.title === "Excel"),
            additionalLogos.find(logo => logo.title === "Vicon"),
            additionalLogos.find(logo => logo.title === "LabVIEW"),
            additionalLogos.find(logo => logo.title === "MakeHuman")
        ],
        features: ["Integrate the target positions provided in an Excel worksheet file.", "Establish a communication link between Unity and Arduino to transmit signals, which are then relayed to vibrators connected to LabVIEW software.", "Read from an .fbx file to generate the MetaHuman avatar directly with the participant body measures", "Implemented a sophisticated protocol with various selectable options, expressed in CSV format, and transmitted directly to the application to create custom protocol steps for each user."],
    },
    {
        title: "Concert VR (2022)",
        githubLink: "",
        img: require('./assets/images/concertvr_photo1.png'),
        description: "Immerse users in a singing competition experience.",
        link: "/portfolio/concertvr",
        bw_image: require('./assets/images/concertvr_photo1_bw.jpg'),

        //video: require("./assets/videos/concertvr.mp4"),
        youtube: "https://www.youtube.com/embed/wZiU-OoKc-A",
        context: "In collaboration with academics from the University of Quebec in Montreal, I was given the responsibility to develop an immersive application from scratch. The objective was to create an interactive singing contest experience that would fully engage the participant. The application simulated a contest environment complete with judges and a virtual crowd. The participant's task was to respond to questions posed by three judges, sharing their thoughts and feelings about the experience.",
        challenges: "One of the most challenging aspects of this project was the recording and synchronization of facial animations with the audio provided by voice actors. Achieving precise and accurate facial animations required a significant amount of time and effort to ensure a seamless and realistic experience for the participants. Another significant challenge was striking the right balance between full immersion and performance optimization, considering the limitations of virtual reality. Maintaining a minimum frame rate of 90 frames per second was essential to prevent cybersickness and ensure a smooth and comfortable experience for the participants. This required careful optimization of the crowd animations and other visual elements to achieve a balance between visual fidelity and performance.",
        results: "The application has achieved remarkable success, demonstrating excellent performance and stability without any noticeable issues or bugs. It is currently being utilized for data acquisition purposes, allowing researchers to gather valuable information on participants' stress levels while immersed in the virtual singing competition. This data will provide valuable insights and contribute to the evaluation of participants' reactions and experiences within the simulated contest environment. The application's seamless performance and accurate data collection make it an invaluable tool for studying and understanding the impact of immersive experiences on stress levels and overall participant engagement.",
        technologies: [
            logos.find(logo => logo.title === "Oculus"),
            logos.find(logo => logo.title === "Unreal Engine"),
            logos.find(logo => logo.title === "C++"),
            logos.find(logo => logo.title === "Git"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            additionalLogos.find(logo => logo.title === "MetaHuman Creator")

        ],
        features: ["Fully facial animated characters with audio lip sync.", "Control crowd mood and reactions.", "Control which questions the judges will ask."],
    },
    {
        title: "Chemistry Lab (2021)",
        githubLink: "",
        img: require('./assets/images/chimie_photo1.png'),
        description: "Simulate chemistry lab experiments typically conducted in a school setting so that students can perform them remotely.",
        link: "/portfolio/chemistrylab",
        bw_image: require('./assets/images/chimie_photo1_bw.jpg'),

        //video: require("./assets/videos/jeu_chimie.mp4"),
        youtube: "https://www.youtube.com/embed/WLijEq42tuc",
        context: "As the COVID-19 pandemic emerged and lockdowns became inevitable, many teachers encountered significant challenges in effectively transferring their knowledge to students. In response to this issue, a chemistry teacher approached me and another student with a proposal to find a solution for teaching students how to conduct laboratory experiments. In turn, we suggested the development of a 3D environment that would simulate all the lab experiments scheduled for the semester.",
        challenges: "Throughout the project, we successfully developed three distinct laboratory experiments, each presenting its own set of challenges. Among them, the creation and manipulation of a molecule with various atom configurations proved to be the most demanding. Ensuring optimal performance and physics simulation for every student's computer while maintaining a high-fidelity representation of reality was a paramount concern. To achieve this, we diligently optimized the environment and fine-tuned the physics system to ensure a seamless experience for all users.",
        results: "Slightly over half of the students were able to successfully run the game on their computers, while the remaining students encountered various issues such as problems with Mac compatibility. To address this, teams were organized to ensure that at least one person per team could share their screen with others. Approximately 6% of the students found the game somewhat challenging to use, while the majority of students reported finding it easy or very easy to use. A majority of the students believed that the game significantly improved their understanding of the subject matter.",
        technologies: [
            logos.find(logo => logo.title === "Unreal Engine"),
            logos.find(logo => logo.title === "C++"),
            logos.find(logo => logo.title === "Git"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            logos.find(logo => logo.title === "Blender")
        ],
        features: ["Manipulation of 3D objects (molecules and atoms) with the mouse cursor.", "Can move in the scene to change the experiment.", "The progress made by students was saved within the game, eliminating the need for them to restart from the beginning each time they accessed it."]
    },
    {
        title: "Avator (2021)",
        githubLink: "",
        img: require('./assets/images/avator_photo1.png'),
        description: "Create a simulated classroom environment where an avatar interacts with you in real-time.",
        link: "/portfolio/avator",
        bw_image: require('./assets/images/avator_photo1_bw.jpg'),

        //video: require("./assets/videos/avator.mp4"),
        youtube: "https://www.youtube.com/embed/EniFmSaSfNQ",
        context: "In collaboration with academics from the University of Quebec in Montreal and the Marie Enfant Rehabilitation Center of CHU Sainte-Justine, I developed a virtual reality tool that allows young individuals who stutter to interact with realistic avatars. These avatars are animated in real-time by the speech therapist. The young patient with a stuttering problem is immersed in a virtual classroom environment and engages in conversation with their teacher, represented by the virtual avatar. The clinician has the ability to exaggerate verbal and non-verbal elements that may induce stress in the patient, allowing them to adapt their intervention based on the patient's reactions.",
        challenges: "Initially, the application was developed using Unity and incorporated the iFacialMocap application available on iOS for real-time motion capture. The character models used in this initial version were downloaded from Adobe's Mixamo platform for free, and later processed for blendshapes treatment in Blender. However, this initial version did not meet the desired level of realism as envisioned for the project. Subsequently, the introduction of MetaHumans by Epic Games with the combination of Live Link Face app provided a more suitable alternative to Unity. As a result, the entire application was migrated to Unreal Engine. Transferring the existing systems from the old application to the new environment posed a significant challenge but was successfully accomplished.",
        results: "The responsibility for further development of the application was passed on to another colleague who continued working on the Unreal Engine iteration. This application is set to be integrated into a larger program called VIRTUOR, which is currently under development. The project is accompanied by an ongoing study to further explore its potential and effectiveness.",
        technologies: [
            logos.find(logo => logo.title === "HTC Vive Pro Eye"),
            logos.find(logo => logo.title === "Unreal Engine"),
            logos.find(logo => logo.title === "Unity"),
            logos.find(logo => logo.title === "C++"),
            logos.find(logo => logo.title === "C#"),
            logos.find(logo => logo.title === "Git"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            additionalLogos.find(logo => logo.title === "MetaHuman Creator"),
            additionalLogos.find(logo => logo.title === "Live Link Face"),
            additionalLogos.find(logo => logo.title === "iFacialMocap"),
            logos.find(logo => logo.title === "Blender"),

        ],
        features: ["Able to choose from a selection of characters to animate in real-time.", "Realistic and highly detailed characters are presented, which immerses the young individuals furthermore.", "Able to modify your voice tonality, so that when you choose a kid avatar, the voice that the participant will hear is accurately represented."]
    },
    {
        title: "Ataxia Tools (2021 - 2023)",
        githubLink: "https://github.com/KevinChenier/AtaxieTools/tree/master/Assets/Scripts",
        img: require('./assets/images/ataxie_photo1.png'),
        description: "Assess the progression of Friedreich's Ataxia with the help of virtual reality, eye-tracking technology and machine learning.",
        link: "/portfolio/ataxiatools",
        bw_image: require('./assets/images/ataxie_photo1_bw.jpg'),

        //video: require("./assets/videos/ataxietools.mp4"),
        youtube: "https://www.youtube.com/embed/o5NFK0-srQM",
        context: "Individuals diagnosed with Friedreich's Ataxia (FA) face a degenerative condition that progressively worsens over time. Although current rating scales are available to assess the severity of ataxia, they become limited once patients lose their ability to walk, relying primarily on clinical evaluation of upper limb function. For my master's degree in collaboration with CHUM Research Center, we addressed this limitation by using virtual reality and eye-tracking technology to evaluate the progression of the disease.",
        challenges: "The development of this application encountered numerous challenges. Firstly, it was crucial to ensure that individuals with ataxia could effectively use the virtual reality environment, while also designing the application to provide a significant level of difficulty to differentiate between patients with varying levels of severity. Additionally, the analysis of the collected data proved to be a struggle, as it required delving deeply into making informed judgments regarding correlations, differentiation between groups, statistical significance, and appropriate data treatment. This process marked the first time I had extensively explored these aspects and faced their associated complexities.",
        results: "Based on our preliminary study, we have drawn several key conclusions. Firstly, we found that virtual reality tools can effectively be employed for evaluating ataxia in patients with FA. These tools offer a promising avenue for assessing the severity of ataxia in FA patients. Furthermore, our study demonstrated that virtual reality tools have the ability to differentiate between FA patients and individuals without the condition, indicating their potential as a diagnostic tool. However, it is worth noting that the use of controllers in patients with advanced stages of the disease presents a significant challenge. Overall, our findings highlight the potential of virtual reality technology in assessing ataxia in FA patients, while also underscoring the need for further exploration and adaptation to address specific challenges faced by patients at different disease stages. My master's thesis is currently being written, and machine learning algorithms are being developped for further analysis.",
        technologies: [
            logos.find(logo => logo.title === "Oculus"),
            logos.find(logo => logo.title === "HTC Vive Pro Eye"),
            logos.find(logo => logo.title === "Unity"),
            logos.find(logo => logo.title === "Blender"),
            logos.find(logo => logo.title === "MongoDB"),
            logos.find(logo => logo.title === "C#"),
            logos.find(logo => logo.title === "MATLAB"),
            logos.find(logo => logo.title === "Python"),
            additionalLogos.find(logo => logo.title === "Scikit-Learn"),
            logos.find(logo => logo.title === "PyTorch"),
            logos.find(logo => logo.title === "Git"),
            additionalLogos.find(logo => logo.title === "Excel"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            additionalLogos.find(logo => logo.title === "PyCharm"),
            additionalLogos.find(logo => logo.title === "MakeHuman")
        ],
        features: ["Algorithm to calculate number of Square Wave Jerks, with their characteristics.", "Algorithm to calculate the number of saccades, with their characteristics.", "Machine learning developed to try to predict the FARS score based on virtual reality extracted metrics.", "For further information, read our pusblished scientific paper: Pre-validation of a Virtual Reality Tool to Quantify the Severity of Friedreich’s Ataxia "]
    },
    {
        title: "Holo Puncture (2020)",
        githubLink: "",
        img: require('./assets/images/holo_photo1.png'),
        description: "Assist cardiologists in visualizing the heart of a patient with a ventricular septal defect so that they can perform a single heart puncture to occlude the defect.",
        link: "/portfolio/holopuncture",
        bw_image: require('./assets/images/holo_photo1_bw.jpg'),

        //video: require("./assets/videos/holopuncture.mp4"),
        youtube: "https://www.youtube.com/embed/pVAWjNC6XwA",
        context: "Utilizing mixed reality technology, the objective was to provide assistance to CHU Sainte-Justine cardiologists in effectively visualizing the heart of patients afflicted with a ventricular septal defect. The purpose of this project was to enable the medical professionals to perform a single cardiac puncture procedure to effectively occlude the defect, thereby eliminating the need for multiple interventions.",
        challenges: "At first, the prototype encountered performance challenges, as it struggled to achieve a maximum frame rate of 10 frames per second. This limitation was primarily due to the high complexity of the visual representation of the heart, which was directly extracted from 3DimViewer. As a result, using the prototype became arduous for users and even caused headaches.",
        results: "By optimizing the heart model through a reduction in the number of triangles while preserving its intricate details, the target frame rate has been successfully increased to 20 frames per second and was now suitable for testing. The surgeons did not encounter any significant challenges related to cyber sickness, usability, or performance. They provided valuable input and specific guidelines to enhance the augmented reality heart with additional complex functionalities tailored to medical practice.",
        technologies: [
            logos.find(logo => logo.title === "Hololens 2"),
            logos.find(logo => logo.title === "Unity"),
            logos.find(logo => logo.title === "C#"),
            logos.find(logo => logo.title === "Blender"),
            logos.find(logo => logo.title === "Git"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            additionalLogos.find(logo => logo.title === "Excel"),
            additionalLogos.find(logo => logo.title === "MeshLab"),
            additionalLogos.find(logo => logo.title === "3DimViewer")
        ],
        features: ["The transparency shader varies based on the distance between the heart and the position of the needle.", "Utilizes Universal Render Pipeline.", "Mixed Reality Toolkit is used for manipulating the heart and needle.", "Puncture coordinates calculated when needle touches the surface of the heart, and saved in Excel file located on the headset directory."],
    },
    {
        title: "Horror Game (2020)",
        githubLink: "https://github.com/KevinChenier/HorrorGame/tree/master/Source",
        img: require('./assets/images/foxtrotte_photo1.png'),
        description: "Develop an horror survival game.",
        link: "/portfolio/horrorgame",
        bw_image: require('./assets/images/foxtrotte_photo1_bw.jpg'),

        //video: require("./assets/videos/foxtrotte.mp4"),
        youtube: "https://www.youtube.com/embed/RCldB7i0Ocs",
        context: "As a school project of 4 students, we were tasked to create a game from inception with various functionalities. Our game could be classified as a role-playing horror game. You play as a fox trying to find your babies scattered around the map, while there are dangerous hunters looking for you. As I was the most experienced with game engines in my team, I took on the majority of the functionnalities, which includes animatimg the hunters, the map design, the AI behaviour, the performance issues, the production of music and overall sound ambiance.",
        challenges: "Some areas of the map required optimization as they were performing below 30 frames per second. The process of building the lighting for the map also presented challenges, taking approximately 8 hours to complete. Many techniques were used to better the performance. The implementation of the hunter's Blackboard system posed another challenge. I had to create multiple states to control the hunter's behavior, including modes for roaming the map, responding to player sounds, searching for the player, and engaging in combat when the player is spotted. This system required coordination with the hunter character blueprint and its animation blueprint to enable the hunter to change stances, adjust speed, and modify behavior in combat situations.",
        results: "The game is currently playable, but further optimization is needed to achieve a higher frame rate on the most demanding section of the map. Currently, the game maintains a minimum frame rate of 50 fps, which is relatively low and requires additional optimization efforts. The objective of the game is to locate and rescue 10 babies, after which the player must find an extraction point to successfully complete the game.",
        technologies: [
            logos.find(logo => logo.title === "Unreal Engine"),
            logos.find(logo => logo.title === "Blender"),
            logos.find(logo => logo.title === "C++"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            additionalLogos.find(logo => logo.title === "Logic Pro X"),
            logos.find(logo => logo.title === "Git"),
        ],
        features: ["Scary and immersive environment.", "Fully functional AI with logical behaviour.", "Weather system.", "Custom music produced in Logic Pro X.", "Enemies and the extraction point are dynamically generated and spawned throughout the map at the start."]
    },
    {
        title: "Unknown 9: Awakening (2019)",
        githubLink: "",
        img: require('./assets/images/u9_photo1.jpg'),
        description: "Develop an upcoming Reflector Entertainment RPG game, to be published by Bandai Namco Entertainment.",
        link: "/portfolio/unknown9awakening",
        bw_image: require('./assets/images/u9_photo1_bw.jpg'),

        //video: require("./assets/videos/u9.mp4"),
        youtube: "https://www.youtube.com/embed/DUbFeNDI_FI",
        context: "I was fortunate to secure a gameplay programmer internship at my school, which was my second internship experience. I had been actively seeking a position in the video game industry, so I was thrilled when I was selected for this opportunity. During my internship, I worked on an action-adventure game being developed by Reflector Entertainment, a start-up that is dedicated to creating a new intellectual property called Unknown9. The company's unique approach involves utilizing various forms of media to tell a cohesive and engaging story within the Unknown9 universe.",
        challenges: "As I embarked on my journey in the gaming industry, I initially faced a learning curve in familiarizing myself with the game's codebase and understanding the organization of its various components. For my first task, I was entrusted with the responsibility of designing and implementing an animation system that took into account several crucial factors. These factors included the number of enemies present, the player's state, the status of the combat zone, and the distances between the player and the enemies. This particular assignment proved to be both challenging and immensely educational. I had to focus on writing code that was not only efficient and optimized but also clear and maintainable.",
        results: "This experience highlighted the significance of maintaining a well-organized codebase and implementing effective source control practices, which are essential in the fast-paced and collaborative nature of game development. Overall, my internship as a gameplay programmer provided me with invaluable experiences and challenges. It allowed me to grow as a programmer, expand my skill set, and gain practical knowledge in game development processes, code optimization, and version control. It was unfortunate that the available positions were full-time, as I was offered a job in the company. However, I had to decline the offer due to not having completed my bachelor's degree at the time.",
        technologies: [
            logos.find(logo => logo.title === "Unreal Engine"),
            logos.find(logo => logo.title === "C++"),
            logos.find(logo => logo.title === "Perforce"),
            additionalLogos.find(logo => logo.title === "Visual Studio")

        ],
        features: ["N/A"]
    },
    {
        title: "VR Treadmill (2019)",
        githubLink: "https://github.com/KevinChenier/DetectVR/tree/master/Assets/UserInterface/Scripts",
        img: require('./assets/images/treadmill_photo1.png'),
        description: "Hack a treadmill and use it as a gaming device for virtual reality games.",
        link: "/portfolio/vrtreadmill",
        bw_image: require('./assets/images/treadmill_photo1_bw.jpg'),

        //video: require("./assets/videos/vrtreadmill.mp4"),
        youtube: "https://www.youtube.com/embed/jrWZ1fRFuAE",
        context: "As of the present moment, room-scale technology is the sole method employed to provide a sensation of walking within a virtual reality environment. Since there was no readily available user-friendly solution to address this limitation, I took the initiative to develop a customized at-home solution and at the same time tackling the cybersickness problem when walking in virtual reality. By hacking my own home treadmill and implementing controller inputs, I aimed to create a genuine impression of walking within the virtual reality space.",
        challenges: "Undertaking the task of opening up the treadmill and hacking its motor posed a significant challenge. By establishing a connection between an Arduino and the PWM pin on the treadmill's PCB, the subsequent obstacle was to establish a direct connection to the Arduino by bypassing the firmware of the controllers.",
        results: "Consequently, I successfully achieved control over the treadmill using an Xbox controller and keyboard inputs. This enabled me to play Skyrim VR with an Xbox controller while utilizing the treadmill. However, numerous challenges persisted, particularly in terms of proprioception, as walking on a device without visual cues of one's surroundings proved to be difficult. In the realm of virtual reality, it became essential to run a Unity application that directly governed the treadmill, as bypassing the Oculus firmware was not feasible. Unfortunately, multi-application software was unavailable at the time, which meant that other games could not be played concurrently while the Unity application was running.",
        technologies: [
            logos.find(logo => logo.title === "Oculus"),
            logos.find(logo => logo.title === "Unity"),
            logos.find(logo => logo.title === "C#"),
            logos.find(logo => logo.title === "Blender"),
            logos.find(logo => logo.title === "Git"),
            logos.find(logo => logo.title === "Python"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            additionalLogos.find(logo => logo.title === "PyCharm"),
            additionalLogos.find(logo => logo.title === "Arduino")
        ],
        features: ["Play Skyrim VR while walking on the treadmill.", "Control the treadmill with Xbox controller and keyboard inputs.", "While using the Unity application, it was possible to control the treadmill with the headset position, so no controllers were needed.", "Custom Unity application that lets you visit the Statue of Liberty!"]
    },
    {
        title: "Classification VR (2018- 2019)",
        githubLink: "",
        img: require('./assets/images/classificationVR_photo1.png'),
        description: "Classify documents in virtual reality with more efficiency.",
        link: "/portfolio/vrclassification",
        bw_image: require('./assets/images/classificationVR_photo1_bw.jpg'),

        //video: require("./assets/videos/vrclassification.mp4"),
        youtube: "https://www.youtube.com/embed/jhCkhlXsYu8",
        context: "I was fortunate to be offered a position as a research and development engineer for my first internship. At the company, there was an existing desktop application used for classifying invoices. However, I was assigned the task of developing an alternative virtual reality application using Unity. The main motivation behind this project was to leverage the vast and immersive space offered by virtual reality as a means to create a faster and more efficient classifier technology. The primary objective of the virtual reality application was to classify invoices sourced from a database. Once classified, the application would then upload the categorized invoices back into the same database.",
        challenges: "My first internship was quite challenging as it involved using Unity, which I had no prior experience with. I had to rely on my autonomy, self-discipline, and motivation to complete the project successfully because there were no experienced individuals in the company who could assist me with Unity. Several obstacles came my way, such as creating a concise and precise user interface for the production application. Implementing certain components, like generative animations for page transitions in the overlay and retrieving invoices from the company database, proved to be particularly difficult. Additionally, I had to translate the workflow of a legacy application into a virtual reality environment.",
        results: "I successfully overcame these challenges and completed the internship by delivering a finished product. The application I developed was implemented for production use, enabling employees to experience increased productivity. As a result of my work, I was offered a part-time job at the company. In this role, my main responsibility was to optimize the application to provide a better user experience, leading to further improvements in productivity.",
        technologies: [
            logos.find(logo => logo.title === "Oculus"),
            logos.find(logo => logo.title === "Unity"),
            logos.find(logo => logo.title === "C#"),
            additionalLogos.find(logo => logo.title === "Visual Studio"),
            logos.find(logo => logo.title === "Git"),
            logos.find(logo => logo.title === "SQL"),
            additionalLogos.find(logo => logo.title === "MySQL")
        ],
        features: ["Animated visuals to streamline the process of reorganizing invoices.", "Rotate invoices / textures.", "Group invoices together or put them in the bin.", "Retrieve and send data to a database."]
    },
    {
        title: "Hovercraft (2018)",
        githubLink: "",
        img: require('./assets/images/aero_photo1.png'),
        description: "Build an hovercraft for competition purposes.",
        link: "/portfolio/hovercraft",
        bw_image: require('./assets/images/aero_photo1_bw.jpg'),

        //video: require("./assets/videos/aero_collapse.mp4"),
        youtube: "https://www.youtube.com/embed/mVnUDXW4LWY",
        context: "As part of a school project, a team of five students from different engineering fields was assigned the task of constructing, developing, and optimizing a hovercraft. The objective was to compete against other students who were also enrolled in the same class, participating in various tests that evaluated the hovercraft's speed and maneuverability.",
        challenges: "The most challenging aspect of this project revolved around optimizing the hovercraft to the best of our abilities. This involved several key components, including refining the code for optimal performance, designing a high-quality PCB (Printed Circuit Board), and creating a robust SolidWorks model that could undergo thorough testing before final assembly. These optimization efforts aimed to enhance the overall efficiency, stability, and functionality of the hovercraft, requiring careful attention to detail and a multidisciplinary approach from our team of engineers.",
        results: "This engineering project provided us with a valuable first-hand experience in applying our skills and knowledge. We were proud to achieve a classification higher than the average of all the participating students, which was a testament to our hard work, dedication, and effective teamwork. ",
        technologies: [
            logos.find(logo => logo.title === "C++"),
            additionalLogos.find(logo => logo.title === "Atmel Studio"),
            logos.find(logo => logo.title === "SolidWorks"),
            additionalLogos.find(logo => logo.title === "Altium Designer"),
            logos.find(logo => logo.title === "Git"),
        ],
        features: ["Custom PCB designed in Altium Designer", "Hovercraft designed in SolidWorks"]
    }
];

const projectsTimeline = dataportfolio.map(data => data.link).reverse();

const contactConfig = {
    YOUR_EMAIL: "email@kevinchenierdev.site",
    YOUR_FONE: "(514)627-1375",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "default_service",
    YOUR_TEMPLATE_ID: "template_666qg6h",
    YOUR_USER_ID: "Ym3J0TMUVFtln0W9Y",
};

const socialprofils = {
    github: "https://github.com/KevinChenier/",
    linkedin: "https://www.linkedin.com/in/kevin-ch%C3%A9nier-23242315b/",
};
export {
    meta,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    logos,
    projectsTimeline,
    aboutDocuments
};