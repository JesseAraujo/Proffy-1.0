import React from 'react'
import { View, ImageBackground, Text} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native'


function GiveClasses() {
    const { goBack } = useNavigation()

    function handleNavigationBack() {
        goBack()
    }


    return (
        <View style={styles.container}>

            <ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Pra começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigationBack}>
                <Text style={styles.okButtonText}>Tudo Bem</Text>
            </RectButton>

        </View>
    )

}


export default GiveClasses