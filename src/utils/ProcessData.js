export default function ProcessAll(data, c) {  
    // Country View
    if(!c[6]) {
        if(c[0] && c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '1').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '2').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '3').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '4').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '5').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '6').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '7').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '8').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '9').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '10').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '11').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '12').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && !c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '13').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '14').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '15').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '16').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '17').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '18').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '19').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '20').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '21').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '22').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '23').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '24').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '25').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '26').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '27').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '28').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '29').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '30').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '31').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '32').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '33').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '34').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '35').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '36').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '37').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '38').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '39').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '40').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '41').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '42').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '43').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '44').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '45').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else 
            return [];
    }
    // Continent view
    else {
        if(c[0] && c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '46').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '47').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '48').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '49').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '50').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '51').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '52').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '53').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '54').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '55').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '56').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '57').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && !c[2] && c[3] && c[4] && c[5]) 
            return data.filter(row => row.get('Case') === '58').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '59').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '60').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '61').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '62').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '63').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '64').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '65').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '66').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '67').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '68').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '69').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '70').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '71').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '72').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '73').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '74').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '75').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '76').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '77').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && !c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '78').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && !c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '79').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && !c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '80').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && c[2] && !c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '81').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '82').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '83').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && c[1] && !c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '84').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '85').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '86').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(c[0] && !c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '87').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && c[3] && c[4] && c[5])
            return data.filter(row => row.get('Case') === '88').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && c[3] && c[4] && !c[5])
            return data.filter(row => row.get('Case') === '89').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else if(!c[0] && c[1] && c[2] && c[3] && !c[4] && c[5])
            return data.filter(row => row.get('Case') === '90').filter( row => row.get('Happiness') !== '0.0').toCollection();
        else
            return [];
    }

}

