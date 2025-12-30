window.EXTERNAL_SCHEMA = [
    {
        "id": "strength",
        "label": "Strength",
        "description": "Standing, Walking, Arms, Dressing",
        "isPeriodic": false,
        "questions": [
            { "id": "stand_chair", "label": "Standing from Chair", "input": { "type": "select", "options": ["Normal", "Use arms", "Rocking motion", "Assistance needed", "Unable"] } },
            { "id": "stand_toilet", "label": "Standing from Toilet", "input": { "type": "select", "options": ["Normal", "Use arms", "Substitute motion", "Assistance needed"] } },
            { "id": "arms_overhead", "label": "Arms Overhead (e.g. Wash Hair)", "input": { "type": "select", "options": ["Improved", "Same", "Slightly worse", "Much worse"] } },
            { "id": "walking", "label": "Walking Ability", "input": { "type": "select", "options": ["Normal", "Normal (flat surface)", "Slow/Unsteady", "Device needed", "Unable"] } },
            { "id": "dressing", "label": "Ability to Dress", "input": { "type": "select", "options": ["Normal", "Modified technique", "Assistance needed"] } }
        ]
    },
    {
        "id": "breathing",
        "label": "Breathing",
        "description": "Shortness of breath, Cough",
        "isPeriodic": false,
        "questions": [
            { "id": "sob", "label": "Shortness of Breath", "input": { "type": "likert", "max": 10, "low_label": "None", "high_label": "Severe" } },
            { "id": "cough", "label": "Cough Severity", "input": { "type": "likert", "max": 10, "low_label": "None", "high_label": "Severe" } }
        ]
    },
    {
        "id": "swallowing",
        "label": "Swallowing",
        "description": "Choking, Eating difficulty",
        "isPeriodic": false,
        "questions": [
            { "id": "choking_events", "label": "Choking Incidents Today", "input": { "type": "number" } },
            { "id": "solid_food", "label": "Difficulty with Solids", "input": { "type": "likert", "max": 10, "low_label": "Easy", "high_label": "Impossible" } }
        ]
    },
    {
        "id": "muscle",
        "label": "Muscle",
        "description": "Pain, Weakness",
        "isPeriodic": false,
        "questions": [
            { "id": "muscle_pain", "label": "Muscle Pain", "input": { "type": "likert", "max": 10, "low_label": "None", "high_label": "Worst", "useMankoski": true } },
            { "id": "overall_weakness", "label": "Overall Weakness", "input": { "type": "select", "options": ["Improved", "Same", "Slightly worse", "Much worse"] } }
        ]
    },
    {
        "id": "skin",
        "label": "Skin",
        "description": "Rashes, Itching, Calcinosis",
        "isPeriodic": false,
        "questions": [
            { "id": "rash_severity", "label": "Rash Severity", "input": { "type": "likert", "max": 10, "low_label": "None", "high_label": "Severe" } },
            { "id": "itch", "label": "Itching Level", "input": { "type": "likert", "max": 10, "low_label": "None", "high_label": "Intense" } },
            { "id": "calcinosis", "label": "Calcinosis (Hard Lumps)", "input": { "type": "select", "options": ["None", "New lumps", "Existing painful", "Infected/Draining"] } },
            { "id": "mechanics_hands", "label": "Mechanic's Hands", "input": { "type": "likert", "max": 10, "low_label": "None", "high_label": "Severe" } }
        ]
    },
    {
        "id": "joint",
        "label": "Joints",
        "description": "Pain, Stiffness",
        "isPeriodic": false,
        "questions": [
            { "id": "joint_pain", "label": "Joint Pain", "input": { "type": "likert", "max": 10, "low_label": "None", "high_label": "Worst", "useMankoski": true } },
            { "id": "stiffness", "label": "Morning Stiffness (min)", "input": { "type": "number" } }
        ]
    },
    {
        "id": "cognitive",
        "label": "Cognitive/Memory",
        "description": "Brain fog, Focus",
        "isPeriodic": false,
        "questions": [
            { "id": "brain_fog", "label": "Brain Fog", "input": { "type": "likert", "max": 10, "low_label": "Clear", "high_label": "Foggy" } },
            { "id": "memory", "label": "Memory Issues", "input": { "type": "select", "options": ["None", "Minor slips", "Noticeable", "Concerning"] } }
        ]
    },
    {
        "id": "maintenance",
        "label": "Health Maintenance",
        "description": "Vitals, Immunizations, Infections",
        "isPeriodic": true,
        "questions": [
            { "id": "weight", "label": "Current Weight (lbs)", "input": { "type": "number" } },
            { "id": "bp", "label": "Blood Pressure (mmHg)", "input": { "type": "bp" } },
            { "id": "immunization", "label": "New Immunization?", "input": { "type": "select", "options": ["None", "Flu", "COVID", "Shingles", "Pneumonia", "Other"] } },
            { "id": "infection", "label": "Current Infection?", "input": { "type": "select", "options": ["No", "UTI", "Respiratory", "Skin", "Other"] } },
            { "id": "antibiotic", "label": "Taking Antibiotics?", "input": { "type": "select", "options": ["No", "Yes"] } }
        ]
    },
    {
        "id": "other",
        "label": "Other",
        "description": "Fatigue, Sleep, Fever",
        "isPeriodic": false,
        "questions": [
            { "id": "fatigue", "label": "Fatigue Level", "input": { "type": "likert", "max": 10, "low_label": "Energetic", "high_label": "Exhausted" } },
            { "id": "mood", "label": "Mood", "input": { "type": "likert", "max": 10, "low_label": "Low", "high_label": "Good" } },
            { "id": "fever", "label": "Fever?", "input": { "type": "select", "options": ["No", "Suspected but not confirmed", "Yes (<100.4)", "Yes (>100.4)"] } }
        ]
    }
];
