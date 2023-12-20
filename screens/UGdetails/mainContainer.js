import College from "./College";

import BasicandAppliedSchools from "./schools/basicandapplied";
import HumanitiesSchools from "./schools/humanities";
import HealthSchools from "./schools/healthscience";
import EducationSchools from "./schools/education";

import { BiologicalScience, EngineeringScience, PhysicalnMathematicalScience, VeterinarySciences,AgricultureScience } from "./departments/basicandapplied";
import { SchoolofArts, SchoolofLanguages, SchoolofPerformingArts, SchoolofSocialScience, UniversityofGhanaBusinessSchool, UniversityofGhanaLawSchool } from "./departments/humanities";
import { BiomedicalandAlliedHealthScience, SchoolofNursingandMidwifery, SchoolofPharmacy, SchoolofPublicHealth, UGDentalSchool, UGMedicalSchool } from "./departments/healthscience";
import { EducationandLeadership, ContinuingandDistance, InformationStudies } from "./departments/education";

import { ComputerScience, EarthScience, StatisticsandActuarialScience, Chemistry, Mathematics, Physics } from "./programmes/basicnapplied/basicandapplied";
import { VeterinaryScience, AgriculturalEngineering, BiomedicalEngineering, ComputerEngineering, MaterialScienceEngineering } from "./programmes/basicnapplied/vertandengineering";

import { AnimalBiologyandConversationScience, BioChemistryCellandMolecularBio, MarineandFisheriesScience, NutritionandFoodScience, Other, PlantandEnvironmentalBiology } from "./programmes/basicnapplied/biological";
import { AgriculturalEconomicsandAgribusiness, AgriculturalExtension, AnimalScience, CropScience, FamilyandConsumerSciences, SoilScience } from "./programmes/basicnapplied/schoolofAgriculture";

import Main from "../../components/Main";

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();


const MainUGContainer = () => {
    return(
    <NavigationContainer independent={true}>   
        <Stack.Navigator>
            <Stack.Screen name="College" component={College} options={{headerShown:false}}/>



            <Stack.Screen name="Basic and Applied Sciences" component={BasicandAppliedSchools} options={{headerShown:false}}/>
            <Stack.Screen name="Humanities" component={HumanitiesSchools} options={{headerShown:false}}/>
            <Stack.Screen name="Health Science" component={HealthSchools} options={{headerShown:false}}/>
            <Stack.Screen name="Education" component={EducationSchools} options={{headerShown:false}}/>



            <Stack.Screen name="Biological Science" component={BiologicalScience} options={{headerShown:false}}/>
            <Stack.Screen name="Engineering Science" component={EngineeringScience} options={{headerShown:false}}/>
            <Stack.Screen name="Physical and Mathematical Science" component={PhysicalnMathematicalScience} options={{headerShown:false}}/>
            <Stack.Screen name="Veterinary Sciences" component={VeterinarySciences} options={{headerShown:false}}/>
            <Stack.Screen name="School of Agriculture" component={AgricultureScience} options={{headerShown:false}}/>
            
            <Stack.Screen name="School of Arts" component={SchoolofArts} options={{headerShown:false}}/>
            <Stack.Screen name="School of Languages" component={SchoolofLanguages} options={{headerShown:false}}/>
            <Stack.Screen name="School of Performing Arts" component={SchoolofPerformingArts} options={{headerShown:false}}/>
            <Stack.Screen name="School of Social Science" component={SchoolofSocialScience} options={{headerShown:false}}/>
            <Stack.Screen name="University of Ghana Business School" component={UniversityofGhanaBusinessSchool} options={{headerShown:false}}/>
            <Stack.Screen name="University of Ghana Law School" component={UniversityofGhanaLawSchool} options={{headerShown:false}}/>

            <Stack.Screen name="Biomedical and Allied Health Science" component={BiomedicalandAlliedHealthScience} options={{headerShown:false}}/>
            <Stack.Screen name="School of Nursing and Midwifery" component={SchoolofNursingandMidwifery} options={{headerShown:false}}/>
            <Stack.Screen name="School of Pharmacy" component={SchoolofPharmacy} options={{headerShown:false}}/>
            <Stack.Screen name="School of Public Health" component={SchoolofPublicHealth} options={{headerShown:false}}/>
            <Stack.Screen name="UG Dental School" component={UGDentalSchool} options={{headerShown:false}}/>
            <Stack.Screen name="UG Medical School" component={UGMedicalSchool} options={{headerShown:false}}/>
            
            <Stack.Screen name="Continuing and Distance Education" component={ContinuingandDistance} options={{headerShown:false}}/>
            <Stack.Screen name="Information and Communication Studies" component={InformationStudies} options={{headerShown:false}}/>
            <Stack.Screen name="School of Education and Leadership" component={EducationandLeadership} options={{headerShown:false}}/>



            <Stack.Screen name="Computer Science" component={ComputerScience} options={{headerShown:false}}/>
            <Stack.Screen name="Earth Science" component={EarthScience} options={{headerShown:false}}/>
            <Stack.Screen name="Statistics and Actuarial Science" component={StatisticsandActuarialScience} options={{headerShown:false}}/>
            <Stack.Screen name="Chemistry" component={Chemistry} options={{headerShown:false}}/>
            <Stack.Screen name="Mathematics" component={Mathematics} options={{headerShown:false}}/>
            <Stack.Screen name="Physics" component={Physics} options={{headerShown:false}}/>

            <Stack.Screen name="Veterinary Science" component={VeterinaryScience} options={{headerShown:false}}/>
            
            <Stack.Screen name="Agricultural Engineering" component={AgriculturalEngineering} options={{headerShown:false}}/>
            <Stack.Screen name="Biomedical Engineering" component={BiomedicalEngineering} options={{headerShown:false}}/>
            <Stack.Screen name="Computer Engineering" component={ComputerEngineering} options={{headerShown:false}}/>
            <Stack.Screen name="Material Science & Engineering" component={MaterialScienceEngineering} options={{headerShown:false}}/>
            
            <Stack.Screen name="Animal Biology and Conversation Science" component={AnimalBiologyandConversationScience} options={{headerShown:false}}/>
            <Stack.Screen name="Nutrition and Food Science" component={NutritionandFoodScience} options={{headerShown:false}}/>
            <Stack.Screen name="Marine and Fisheries Science" component={MarineandFisheriesScience} options={{headerShown:false}}/>
            <Stack.Screen name="Plant and Environmental Biology" component={PlantandEnvironmentalBiology} options={{headerShown:false}}/>
            <Stack.Screen name="BioChemistry, Cell and Molecular Bio." component={BioChemistryCellandMolecularBio} options={{headerShown:false}}/>
            <Stack.Screen name="Other" component={Other} options={{headerShown:false}}/>
            
            <Stack.Screen name="Agricultural Economics and Agribusiness" component={AgriculturalEconomicsandAgribusiness} options={{headerShown:false}}/>
            <Stack.Screen name="Agricultural Extension" component={AgriculturalExtension} options={{headerShown:false}}/>
            <Stack.Screen name="Animal Science" component={AnimalScience} options={{headerShown:false}}/>
            <Stack.Screen name="Soil Science" component={SoilScience} options={{headerShown:false}}/>
            <Stack.Screen name="Crop Science" component={CropScience} options={{headerShown:false}}/>
            <Stack.Screen name="Family and Consumer Sciences" component={FamilyandConsumerSciences} options={{headerShown:false}}/>

            <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>


        </Stack.Navigator>
        <StatusBar style="auto" translucent={false} />
    </NavigationContainer>    
    )
    
}


export default MainUGContainer;