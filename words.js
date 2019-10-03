const words = {
  french_animals: [
    { en: "Ant", fr: "La fourmi" },
    { en: "Bear", fr: "L'ours" },
    { en: "Bee", fr: "La abeille" },
    { en: "Bull", fr: "Le taureau" },
    { en: "Butterfly", fr: "Le papillon" },
    { en: "Camel", fr: "Le chameau" },
    { en: "Cat", fr: "Le chat" },
    { en: "Cow", fr: "La vache" },
    { en: "Crab", fr: "Le crabe" },
    { en: "Deer", fr: "Le cerf" },
    { en: "Dog", fr: "Le chien" },
    { en: "Donkey", fr: "L'âne" },
    { en: "Dove", fr: "La colombe" },
    { en: "Duck", fr: "Le canard" },
    { en: "Elephant", fr: "Le éléphant" },
    { en: "Ferret", fr: "Le furet" },
    { en: "Fox", fr: "Le renard" },
    { en: "Frog", fr: "La grenouille" },
    { en: "Goat", fr: "La chèvre" },
    { en: "Goldfish", fr: "Le poisson rouge" },
    { en: "Gorilla", fr: "Le gorille" },
    { en: "Guinea pig", fr: "Le cochon d'Inde" },
    { en: "Hamster", fr: "Le hamster" },
    { en: "Hedgehog", fr: "Le hérisson" },
    { en: "Hen", fr: "La poule" },
    { en: "Hippopotamus", fr: "L'hippopotame" },
    { en: "Horse", fr: "Le cheval" },
    { en: "Jellyfish", fr: "La méduse" },
    { en: "Kangaroo", fr: "Le kangourou" },
    { en: "Lion", fr: "Le lion" },
    { en: "Monkey", fr: "Le singe" },
    { en: "Mosquito", fr: "Le moustique" },
    { en: "Mouse", fr: "La souris" },
    { en: "Owl", fr: "Le hibou" },
    { en: "Parrot", fr: "Le perroquet" },
    { en: "Penguin", fr: "Le manchot" },
    { en: "Platypus", fr: "L'ornithorynque" },
    { en: "Rabbit", fr: "Le lapin" },
    { en: "Seahorse", fr: "L'hippocampe" },
    { en: "Seal", fr: "Le phoque" },
    { en: "Shark", fr: "Le requin" },
    { en: "Sheep", fr: "Le mouton" },
    { en: "Snake", fr: "Le serpent" },
    { en: "Spider", fr: "L'araignée" },
    { en: "Squirrel", fr: "L'écureuil" },
    { en: "Swan", fr: "Le cygne" },
    { en: "Tiger", fr: "Le tigre" },
    { en: "Toad", fr: "Le crapaud" },
    { en: "Turtle", fr: "La tortue" },
    { en: "Walrus", fr: "Le morse" },
    { en: "Wasp", fr: "La guêpe" },
    { en: "Whale", fr: "La baleine" },
    { en: "Zebra", fr: "Le zèbre" }
  ],

  german_animals: [
    { en: "Ant", de: "Die Ameise" },
    { en: "Bear", de: "Der Bär" },
    { en: "Bee", de: "Die Biene" },
    { en: "Bull", de: "Der Stier" },
    { en: "Butterfly", de: "Der Schmetterling" },
    { en: "Camel", de: "Das Kamel" },
    { en: "Cat", de: "Die Katze" },
    { en: "Cow", de: "Die Kuh" },
    { en: "Crab", de: "Die Krabbe" },
    { en: "Deer", de: "Der Hirsch" },
    { en: "Dog", de: "Der Hund" },
    { en: "Donkey", de: "Der Esel" },
    { en: "Dove", de: "Die Weiße Taube" },
    { en: "Duck", de: "Die Ente" },
    { en: "Elephant", de: "Der Elefant" },
    { en: "Ferret", de: "Das Frettchen" },
    { en: "Fox", de: "Der Fuchs" },
    { en: "Frog", de: "Der Frosch" },
    { en: "Goat", de: "Die Ziege" },
    { en: "Goldfish", de: "Der Goldfisch" },
    { en: "Gorilla", de: "Der Gorilla" },
    { en: "Guinea pig", de: "Das Meerschwein" },
    { en: "Hamster", de: "Der Hamster" },
    { en: "Hedgehog", de: "Der Igel" },
    { en: "Hen", de: "Das Huhn" },
    { en: "Hippopotamus", de: "Das Flusspferd" },
    { en: "Horse", de: "Das Pferd" },
    { en: "Jellyfish", de: "Die Qualle" },
    { en: "Kangaroo", de: "Das Känguru" },
    { en: "Lion", de: "Der Löwe" },
    { en: "Monkey", de: "Der Affe" },
    { en: "Mosquito", de: "Der Moskito" },
    { en: "Mouse", de: "Die Maus" },
    { en: "Owl", de: "Die Eule" },
    { en: "Parrot", de: "Der Papagei" },
    { en: "Penguin", de: "Der Pinguin" },
    { en: "Platypus", de: "Das Schnabeltier" },
    { en: "Rabbit", de: "Das Kaninchen" },
    { en: "Seahorse", de: "Das Seepferdchen" },
    { en: "Seal", de: "Die Robbe" },
    { en: "Shark", de: "Der Hai" },
    { en: "Sheep", de: "Das Schaf" },
    { en: "Snake", de: "Die Schlange" },
    { en: "Spider", de: "Die Spinne" },
    { en: "Squirrel", de: "Das Eichhörnchen" },
    { en: "Swan", de: "Der Schwan" },
    { en: "Tiger", de: "Der Tiger" },
    { en: "Toad", de: "Die Kröte" },
    { en: "Turtle", de: "Die Schildkröte" },
    { en: "Walrus", de: "Das Walross" },
    { en: "Wasp", de: "Die Wespe" },
    { en: "Whale", de: "Der Wal" },
    { en: "Zebra", de: "Das Zebra" }
  ],

  italian_animals: [
    { en: "Ant", it: "La formica" },
    { en: "Bear", it: "L'orso" },
    { en: "Bee", it: "L'ape" },
    { en: "Bull", it: "Il toro" },
    { en: "Butterfly", it: "La farfalla" },
    { en: "Camel", it: "Il cammello" },
    { en: "Cat", it: "Il gatto" },
    { en: "Cow", it: "La mucca" },
    { en: "Crab", it: "Il granchio" },
    { en: "Deer", it: "Il cervo" },
    { en: "Dog", it: "Il cane" },
    { en: "Donkey", it: "L'asino" },
    { en: "Dove", it: "La colomba" },
    { en: "Duck", it: "L'anatra" },
    { en: "Elephant", it: "L'elefante" },
    { en: "Ferret", it: "Il furetto" },
    { en: "Fox", it: "La volpe" },
    { en: "Frog", it: "La rana" },
    { en: "Goat", it: "La capra" },
    { en: "Goldfish", it: "Il pesce rosso" },
    { en: "Gorilla", it: "Il gorilla" },
    { en: "Guinea pig", it: "Il porcellino d'India" },
    { en: "Hamster", it: "Il criceto" },
    { en: "Hedgehog", it: "Il riccio" },
    { en: "Hen", it: "La gallina" },
    { en: "Hippopotamus", it: "L'ippopotamo" },
    { en: "Horse", it: "Il cavallo" },
    { en: "Jellyfish", it: "La medusa" },
    { en: "Kangaroo", it: "Il canguro" },
    { en: "Lion", it: "Il leone" },
    { en: "Monkey", it: "La scimmia" },
    { en: "Mosquito", it: "La zanzara" },
    { en: "Mouse", it: "Il topo" },
    { en: "Owl", it: "Il gufo" },
    { en: "Parrot", it: "Il pappagallo" },
    { en: "Penguin", it: "Il pinguino" },
    { en: "Platypus", it: "L'ornitorinco" },
    { en: "Rabbit", it: "Il coniglio" },
    { en: "Seahorse", it: "Il cavalluccio marino" },
    { en: "Seal", it: "La foca" },
    { en: "Shark", it: "Lo squalo" },
    { en: "Sheep", it: "La pecora" },
    { en: "Snake", it: "Il serpente" },
    { en: "Spider", it: "Il ragno" },
    { en: "Squirrel", it: "Lo scoiattolo" },
    { en: "Swan", it: "Il cigno" },
    { en: "Tiger", it: "La tigre" },
    { en: "Toad", it: "Il rospo" },
    { en: "Turtle", it: "La tartaruga" },
    { en: "Walrus", it: "Il tricheco" },
    { en: "Wasp", it: "La vespa" },
    { en: "Whale", it: "La balena" },
    { en: "Zebra", it: "La zebra" }
  ],

  french_body: [
    { en: "Ankle", fr: "La cheville" },
    { en: "Arm", fr: "Le bras" },
    { en: "Back", fr: "Le dos" },
    { en: "Beard", fr: "La barbe" },
    { en: "Blood", fr: "Le sang" },
    { en: "Body", fr: "Le corps" },
    { en: "Bone", fr: "L'os" },
    { en: "Brain", fr: "Le cerveau" },
    { en: "Cheek", fr: "La joue" },
    { en: "Chest", fr: "La poitrine" },
    { en: "Chin", fr: "Le menton" },
    { en: "Ear", fr: "L'oreille" },
    { en: "Elbow", fr: "Le coude" },
    { en: "Eyebrow", fr: "Le sourcil" },
    { en: "Eyelashes", fr: "Les cils" },
    { en: "Eyes", fr: "Les yeux" },
    { en: "Face", fr: "Le visage" },
    { en: "Finger", fr: "Le doigt" },
    { en: "Forehead", fr: "Le front" },
    { en: "Foot", fr: "Le pied" },
    { en: "Hair", fr: "Les cheveux" },
    { en: "Hand", fr: "La main" },
    { en: "Head", fr: "La tête" },
    { en: "Heart", fr: "Le cœur" },
    { en: "Hip", fr: "La hanche" },
    { en: "Knee", fr: "Le genou" },
    { en: "Leg", fr: "La jambe" },
    { en: "Lip", fr: "La lèvre" },
    { en: "Lung", fr: "Le poumon" },
    { en: "Moustache", fr: "La moustache" },
    { en: "Mouth", fr: "La bouche" },
    { en: "Muscle", fr: "Le muscle" },
    { en: "Nail", fr: "L'ongle" },
    { en: "Neck", fr: "Le cou" },
    { en: "Nose", fr: "Le nez" },
    { en: "Nostril", fr: "La narine" },
    { en: "Palm", fr: "La paume" },
    { en: "Shoulders", fr: "Les épaules" },
    { en: "Skin", fr: "La peau" },
    { en: "Stomach", fr: "L'estomac" },
    { en: "Teeth", fr: "Les dents" },
    { en: "Throat", fr: "La gorge" },
    { en: "Thumb", fr: "Le pouce" },
    { en: "Toe", fr: "Le doigt de pied" },
    { en: "Tongue", fr: "La langue" },
    { en: "Waist", fr: "La taille" },
    { en: "Wrist", fr: "Le poignet" }
  ],

  italian_body: [
    { en: "Ankle", it: "La caviglia" },
    { en: "Arm", it: "Il braccio" },
    { en: "Back", it: "La schiena" },
    { en: "Beard", it: "La barba" },
    { en: "Blood", it: "Il sangue" },
    { en: "Body", it: "Il corpo" },
    { en: "Bone", it: "L'osso" },
    { en: "Brain", it: "Il cervello" },
    { en: "Cheek", it: "La guancia" },
    { en: "Chest", it: "Il petto" },
    { en: "Chin", it: "Il mento" },
    { en: "Ear", it: "L'orecchio" },
    { en: "Elbow", it: "Il gomito" },
    { en: "Eyebrow ", it: "Il sopracciglio" },
    { en: "Eyelashes", it: "Le ciglia" },
    { en: "Eyes", it: "Gli occhi" },
    { en: "Face", it: "La faccia" },
    { en: "Finger", it: "Il dito" },
    { en: "Forehead", it: "La fronte" },
    { en: "Foot", it: "Il piede" },
    { en: "Hair", it: "I capelli" },
    { en: "Hand", it: "La mano" },
    { en: "Head", it: "La testa" },
    { en: "Heart", it: "Il cuore" },
    { en: "Hip", it: "Il fianco" },
    { en: "Knee", it: "Il ginocchio" },
    { en: "Leg", it: "La gamba" },
    { en: "Lip", it: "Il labbro" },
    { en: "Lung", it: "Il polmone" },
    { en: "Moustache", it: "I baffi" },
    { en: "Mouth", it: "La bocca" },
    { en: "Muscle", it: "Il muscolo" },
    { en: "Nail", it: "La unghia" },
    { en: "Neck", it: "Il collo" },
    { en: "Nose", it: "Il naso" },
    { en: "Nostril", it: "La narice" },
    { en: "Palm", it: "Il palmo" },
    { en: "Shoulders", it: "Le spalle" },
    { en: "Skin", it: "La pelle" },
    { en: "Stomach", it: "La pancia" },
    { en: "Teeth", it: "I denti" },
    { en: "Throat", it: "La gola" },
    { en: "Thumb", it: "Il pollice" },
    { en: "Toe", it: "Il dito del piede" },
    { en: "Tongue", it: "La lingua" },
    { en: "Waist", it: "La vita" },
    { en: "Wrist", it: "Il polso" }
  ],

  german_body: [
    { en: "Ankle", de: "Der Knöchel" },
    { en: "Arm", de: "Der Arm" },
    { en: "Back", de: "Der Rücken" },
    { en: "Beard", de: "Der Bart" },
    { en: "Blood", de: "Das Blut" },
    { en: "Body", de: "Der Körper" },
    { en: "Bone", de: "Der Knochen" },
    { en: "Brain", de: "Das Gehirn" },
    { en: "Cheek", de: "Die Wange" },
    { en: "Chest", de: "Die Brust" },
    { en: "Chin", de: "Das Kinn" },
    { en: "Ear", de: "Das Ohr" },
    { en: "Elbow", de: "Der Ellbogen" },
    { en: "Eyebrow ", de: "Die Augenbraue" },
    { en: "Eyelashes", de: "Die Wimpern" },
    { en: "Eyes", de: "Die Augen" },
    { en: "Face", de: "Das Gesicht" },
    { en: "Finger", de: "Der Finger" },
    { en: "Forehead", de: "Die Stirn" },
    { en: "Foot", de: "Der Fuß" },
    { en: "Hair", de: "Die Haare" },
    { en: "Hand", de: "Die Hand" },
    { en: "Head", de: "Der Kopf" },
    { en: "Heart", de: "Das Herz" },
    { en: "Hip", de: "Die Hüfte" },
    { en: "Knee", de: "Das Knie" },
    { en: "Leg", de: "Das Bein" },
    { en: "Lip", de: "Die Lippe" },
    { en: "Lung", de: "Die Lunge" },
    { en: "Moustache", de: "Der Schnurrbart" },
    { en: "Mouth", de: "Der Mund" },
    { en: "Muscle", de: "Der Muskel" },
    { en: "Nail", de: "Der Fingernagel" },
    { en: "Neck", de: "Der Hals" },
    { en: "Nose", de: "Die Nase" },
    { en: "Nostril", de: "Das Nasenloch" },
    { en: "Palm", de: "Die Handfläche" },
    { en: "Shoulders", de: "Die Schultern" },
    { en: "Skin", de: "Die Haut" },
    { en: "Stomach", de: "Der Magen" },
    { en: "Teeth", de: "Der Zahn" },
    { en: "Thigh", de: "Der Schenkel" },
    { en: "Thumb", de: "Der Daumen" },
    { en: "Toe", de: "Der Zeh" },
    { en: "Tongue", de: "Die Zunge" },
    { en: "Waist", de: "Die Taille" },
    { en: "Wrist", de: "Das Handgelenk" }
  ]
};
