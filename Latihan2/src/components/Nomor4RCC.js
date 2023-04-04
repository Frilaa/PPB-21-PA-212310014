import React, { Component } from 'react';
import { View ,Text , StyleSheet , Image} from 'react-native';


class Nomor4RCC extends Component {

    constructor(props) {
        super(props);
        this.state = { identity:{npm:212310014 ,firstname: "Frila",middlename:"Cahya",lastname:"Wardani",},
                
        educations:[{ id: 1, school: 'SDN Cipaku Perumda' },
                    { id: 2, school: 'SMPN 10 Kota Bogor' },
                    { id: 3, school: 'SMKN 4 Kota Bogor' }],
    
         mobile_phone: '087885589336',
         email: '212310014@student.ibik.ac.id',
         gender: 'F',
         tall_body: 160,
         weight_body: 56
           
        }
    }
    


    render() {
        return (  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderWidth: 2, padding: 15, width: 300 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: "center" }}> MyBio </Text>
            <Text style={{ fontWeight: 'bold' }}>Identity:</Text>
            <Text>NPM               : {this.state.identity.npm}</Text>
            <Text>First Name     : {this.state.identity.firstname}</Text>
            <Text>Middle Name : {this.state.identity.middlename}</Text>
            <Text>Last Name     : {this.state.identity.lastname}</Text>

            <Text style={{ fontWeight: 'bold' }}>Educations:</Text>
            {this.state.educations.map((education) => {
                return (
                    <Text>{education.id}. {education.school}</Text>
                )
            })}

            <Text style={{ fontWeight: 'bold' }}>Other:</Text>
            <Text>Mobile Phone : {this.state.mobile_phone}</Text>
            <Text>Email : {this.state.email}</Text>
            <Text>Gender : {this.state.gender}</Text>
            <Text>Tall Body : {this.state.tall_body}</Text>
            <Text>Weight Body : {this.state.weight_body}</Text>

            <Text style={{textAlign : 'center' }}>RCC</Text>
        </View>
    </View> );
    }
}

export default Nomor4RCC;