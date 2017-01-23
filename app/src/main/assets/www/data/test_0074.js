/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();
//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[0]= "1)  Se consideran interesados en el procedimiento administrativo:";
 choices[0]= new Array();
 choices[0][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[0][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[0][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[0][3] = "todas son correctas";
 answers[0] = 0;
 units[0] = ['7'];
 blocks[0] = ['A2'];
 comments[0] = "Id Pregunta: 222. Ley 39/2015";
 preguntaids[0] = 222


//  Id pregunta: 5144 Año de creación de pregunta: 2003
 questions[1]= "2)  El m&iacute;nimo espacio de almacenamiento posible y el m&eacute;todo de copia de seguridad m&aacute;s r&aacute;pido se alcanzan:";
 choices[1]= new Array();
 choices[1][0] = "Usando una combinaci&oacute;n de copias de seguridad normales e incrementales.";
 choices[1][1] = "Usando una combinaci&oacute;n de copias de seguridad normales y diferenciales.";
 choices[1][2] = "Al crear por primera vez un conjunto de copia.";
 choices[1][3] = "Nunca pueden alcanzarse ambos a la vez.";
 answers[1] = 0;
 units[1] = ['100'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 5144. ";
 preguntaids[1] = 5144


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[2]= new Array();
 choices[2][0] = "El aumento de la esperanza de vida.";
 choices[2][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[2][2] = "La reducci&oacute;n del desempleo.";
 choices[2][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[2] = 0;
 units[2] = ['14'];
 blocks[2] = ['A3'];
 comments[2] = "Id Pregunta: 356. Estado del Bienestar";
 preguntaids[2] = 356


//  Id pregunta: 2550 Año de creación de pregunta: 2002
 questions[3]= "4)  En telecomunicaciones, EFT son las siglas de:";
 choices[3]= new Array();
 choices[3][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[3][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[3][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[3][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[3] = 1;
 units[3] = ['75'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 2550. ";
 preguntaids[3] = 2550


//  Id pregunta: 8708 Año de creación de pregunta: 2013
 questions[4]= "5)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y, adem&aacute;s, puede acceder a las memorias de otros procesadores se conoce como:";
 choices[4]= new Array();
 choices[4][0] = "SMP";
 choices[4][1] = "Grid";
 choices[4][2] = "NUMA";
 choices[4][3] = "Cluster";
 answers[4] = 2;
 units[4] = ['49'];
 blocks[4] = ['B2'];
 comments[4] = "Id Pregunta: 8708. Examen TICA2-2011";
 preguntaids[4] = 8708


//  Id pregunta: 7353 Año de creación de pregunta: 2010
 questions[5]= "6)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[5]= new Array();
 choices[5][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[5][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[5][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[5][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[5] = 2;
 units[5] = ['53'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 7353. Examen TIC B 2009";
 preguntaids[5] = 7353


//  Id pregunta: 9191 Año de creación de pregunta: 2014
 questions[6]= "7)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[6]= new Array();
 choices[6][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[6][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[6][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[6][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[6] = 3;
 units[6] = ['119'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 9191. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";
 preguntaids[6] = 9191


//  Id pregunta: 9678 Año de creación de pregunta: 2014
 questions[7]= "8)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[7][1] = "Es una alternativa a XML en AJAX.";
 choices[7][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[7][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[7] = 2;
 units[7] = ['55'];
 blocks[7] = ['B2'];
 comments[7] = "Id Pregunta: 9678. ";
 preguntaids[7] = 9678


//  Id pregunta: 3665 Año de creación de pregunta: 2002
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes reglas no es una regla de construcci&oacute;n de flujos en un DFD?:";
 choices[8]= new Array();
 choices[8][0] = "Activa procesos";
 choices[8][1] = "Conecta a los dem&aacute;s elementos de un DFD";
 choices[8][2] = "El flujo no puede crear ni destruir datos";
 choices[8][3] = "Se puede asimilar el flujo de datos a una tuber&iacute;a por la que transita informaci&oacute;n";
 answers[8] = 0;
 units[8] = ['86'];
 blocks[8] = ['B3'];
 comments[8] = "Id Pregunta: 3665. ";
 preguntaids[8] = 3665


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[9]= new Array();
 choices[9][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[9][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[9][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[9][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[9] = 3;
 units[9] = ['1'];
 blocks[9] = ['A1'];
 comments[9] = "Id Pregunta: 27. Constituci&oacute;n de 1978";
 preguntaids[9] = 27


//  Id pregunta: 9897 Año de creación de pregunta: 2015
 questions[10]= "11)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[10]= new Array();
 choices[10][0] = "Enero de 2013.";
 choices[10][1] = "Junio de 2013.";
 choices[10][2] = "Diciembre de 2013.";
 choices[10][3] = "Enero de 2014.";
 answers[10] = 1;
 units[10] = ['7', '19'];
 blocks[10] = ['A2', 'A4'];
 comments[10] = "Id Pregunta: 9897. ";
 preguntaids[10] = 9897


//  Id pregunta: 8813 Año de creación de pregunta: 2013
 questions[11]= "12)  Resilient Packet Ring";
 choices[11]= new Array();
 choices[11][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[11][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[11][2] = "Es incompatible con Ethernet.";
 choices[11][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[11] = 3;
 units[11] = ['112'];
 blocks[11] = ['B4'];
 comments[11] = "Id Pregunta: 8813. ";
 preguntaids[11] = 8813


//  Id pregunta: 1791 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la respuesta correcta. Con respecto a la Sede Electr&oacute;nica podemos decir qu&eacute;:";
 choices[12]= new Array();
 choices[12][0] = "La Sede Electr&oacute;nica debe estar accesible desde la p&aacute;gina principal de la web institucional de la Administraci&oacute;n P&uacute;blica correspondiente.";
 choices[12][1] = "En una Administraci&oacute;n P&uacute;blica cada &oacute;rgano de direcci&oacute;n (Ministerio, Conseller&iacute;a, Consejer&iacute;a) debe tener su propia sede electr&oacute;nica.";
 choices[12][2] = "Una vez constituida la sede electr&oacute;nica, los tablones de anuncios pueden ser sustituidos o complementados por la publicaci&oacute;n electr&oacute;nica en sede.";
 choices[12][3] = "Debe facilitar informaci&oacute;n de las oficinas de registro y atenci&oacute;n al ciudadano, de los &oacute;rganos de gobierno y el directorio de personal de la Administraci&oacute;n P&uacute;blica.";
 answers[12] = 2;
 units[12] = ['7'];
 blocks[12] = ['A2'];
 comments[12] = "Id Pregunta: 1791. ";
 preguntaids[12] = 1791


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[13]= "14)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[13]= new Array();
 choices[13][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[13][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[13][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[13][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[13] = 1;
 units[13] = ['14'];
 blocks[13] = ['A3'];
 comments[13] = "Id Pregunta: 392. Pol&iacute;ticas de igualdad";
 preguntaids[13] = 392


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[14]= "15)  El m&eacute;todo utilizado en el mantenimiento de software consistente en el examen y modificaci&oacute;n de un sistema para reconstruirlo de una nueva forma es:";
 choices[14]= new Array();
 choices[14][0] = "Ingenier&iacute;a inversa.";
 choices[14][1] = "Reestructuraci&oacute;n software.";
 choices[14][2] = "Reingenier&iacute;a.";
 choices[14][3] = "Transformaci&oacute;n de programas.";
 answers[14] = 2;
 units[14] = ['97'];
 blocks[14] = ['B3'];
 comments[14] = "Id Pregunta: 855. AGE A2 2015";
 preguntaids[14] = 855


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[15]= "16)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[15]= new Array();
 choices[15][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[15][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[15][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[15][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[15] = 3;
 units[15] = ['12'];
 blocks[15] = ['A3'];
 comments[15] = "Id Pregunta: 330. Modelo econ&oacute;mico";
 preguntaids[15] = 330


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[16]= new Array();
 choices[16][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[16][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[16][2] = "la falta de interoperabilidad.";
 choices[16][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[16] = 1;
 units[16] = ['5'];
 blocks[16] = ['A1'];
 comments[16] = "Id Pregunta: 107. Uni&oacute;n Europea";
 preguntaids[16] = 107


//  Id pregunta: 2163 Año de creación de pregunta: 2002
 questions[17]= "18)  En la planificaci&oacute;n de sistemas, la demanda latente produce:";
 choices[17]= new Array();
 choices[17][0] = "Un crecimiento reprimido.";
 choices[17][1] = "Un crecimiento evolutivo.";
 choices[17][2] = "Un crecimiento gradual.";
 choices[17][3] = "Un crecimiento no gradual.";
 answers[17] = 3;
 units[17] = ['33'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2163. ";
 preguntaids[17] = 2163


//  Id pregunta: 10827 Año de creación de pregunta: 2015
 questions[18]= "19)  En M&eacute;trica v3, el proceso de Dise&ntilde;o del Sistema de Informaci&oacute;n, cuando este es estructurado se compone de:";
 choices[18]= new Array();
 choices[18][0] = "9 actividades";
 choices[18][1] = "10 actividades";
 choices[18][2] = "11 actividades";
 choices[18][3] = "12 actividades";
 answers[18] = 1;
 units[18] = ['91'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 10827. ";
 preguntaids[18] = 10827


//  Id pregunta: 1022 Año de creación de pregunta: 2016
 questions[19]= "20)  Segun la ley 40/2015 podr&aacute;n ordenarle al funcionario que se abstenga de toda intervenci&oacute;n en el expediente por causa de abstenci&oacute;n...";
 choices[19]= new Array();
 choices[19][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[19][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[19][2] = "Los interesados en el procedimiento";
 choices[19][3] = "Las alternativas b) y c) son correctas";
 answers[19] = 1;
 units[19] = ['4', '7', '8', '9'];
 blocks[19] = ['A1', 'A2'];
 comments[19] = "Id Pregunta: 1022. Ley 40/2015";
 preguntaids[19] = 1022


//  Id pregunta: 5631 Año de creación de pregunta: 2007
 questions[20]= "21)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[20]= new Array();
 choices[20][0] = "El lugar donde este establecido el prestador de servicios";
 choices[20][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[20][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[20][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[20] = 1;
 units[20] = ['19'];
 blocks[20] = ['A4'];
 comments[20] = "Id Pregunta: 5631. Ley 34/2002, art&iacute;culo 29";
 preguntaids[20] = 5631


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[21]= new Array();
 choices[21][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[21][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[21][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[21][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[21] = 0;
 units[21] = ['26'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 529. Gobernanza TIC";
 preguntaids[21] = 529


//  Id pregunta: 1232 Año de creación de pregunta: 2016
 questions[22]= "23)  Tal y como indica la Ley 9/2014, General de Telecomunicaciones, en su art&iacute;culo 84, tienen competencia sancionadora (se&ntilde;ale la respuesta FALSA):";
 choices[22]= new Array();
 choices[22][0] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[22][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[22][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[22][3] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[22] = 2;
 units[22] = ['121'];
 blocks[22] = ['B4'];
 comments[22] = "Id Pregunta: 1232. ";
 preguntaids[22] = 1232


//  Id pregunta: 4106 Año de creación de pregunta: 2003
 questions[23]= "24)  En gesti&oacute;n de contenidos se entiende por contenido:";
 choices[23]= new Array();
 choices[23][0] = "El conjunto de datos o informaci&oacute;n que se crean, archivan y publican en formato digital.";
 choices[23][1] = "El conjunto de datos o informaci&oacute;n que se archivan en formato digital como copia de respaldo.";
 choices[23][2] = "Informaci&oacute;n almacenada en dispositivos masivos de r&aacute;pido acceso.";
 choices[23][3] = "Conjunto de discos &oacute;pticos de gran capacidad y m&iacute;nimos tiempos de acceso.";
 answers[23] = 0;
 units[23] = ['99'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 4106. ";
 preguntaids[23] = 4106


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[24]= "25)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[24]= new Array();
 choices[24][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[24][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[24][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[24][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[24] = 3;
 units[24] = ['7'];
 blocks[24] = ['A2'];
 comments[24] = "Id Pregunta: 227. Ley 39/2015";
 preguntaids[24] = 227


//  Id pregunta: 6826 Año de creación de pregunta: 2010
 questions[25]= "26)  &iquest;Cu&aacute;l es una infraestructura de integraci&oacute;n para la construcci&oacute;n de arquitecturas SOA?";
 choices[25]= new Array();
 choices[25][0] = "SAML";
 choices[25][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[25][2] = "CASE (Computer-Aided Software Engineering)";
 choices[25][3] = "ESB (Enterprise Service Bus)";
 answers[25] = 3;
 units[25] = ['55'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6826. TIC A 2009";
 preguntaids[25] = 6826


//  Id pregunta: 3752 Año de creación de pregunta: 2002
 questions[26]= "27)  Del modelo clasico de ciclo de vida en cascada puede afirmarse que:";
 choices[26]= new Array();
 choices[26][0] = "El usuario valida el resultado de cada una de las fases";
 choices[26][1] = "Proporciona resultados parciales para validaci&oacute;n de requisitos";
 choices[26][2] = "Est&aacute; regido por la documentaci&oacute;n, que marca la transici&oacute;n entre fases";
 choices[26][3] = "Est&aacute; dirigido por el riesgo";
 answers[26] = 2;
 units[26] = ['82'];
 blocks[26] = ['B3'];
 comments[26] = "Id Pregunta: 3752. ";
 preguntaids[26] = 3752


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[27]= "28)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[27]= new Array();
 choices[27][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[27][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[27][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[27][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[27] = 1;
 units[27] = ['7'];
 blocks[27] = ['A2'];
 comments[27] = "Id Pregunta: 215. Ley 39/2015";
 preguntaids[27] = 215


//  Id pregunta: 4544 Año de creación de pregunta: 2002
 questions[28]= "29)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[28]= new Array();
 choices[28][0] = "intranet";
 choices[28][1] = "collaboration-net";
 choices[28][2] = "teleworking-net";
 choices[28][3] = "extranet";
 answers[28] = 3;
 units[28] = ['113'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4544. ";
 preguntaids[28] = 4544


//  Id pregunta: 4316 Año de creación de pregunta: 2004
 questions[29]= "30)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[29]= new Array();
 choices[29][0] = "uSCSI";
 choices[29][1] = "FCP";
 choices[29][2] = "iSCSI";
 choices[29][3] = "FCIP";
 answers[29] = 2;
 units[29] = ['100'];
 blocks[29] = ['B3'];
 comments[29] = "Id Pregunta: 4316. Similar a examen TIC SS A 2004";
 preguntaids[29] = 4316


//  Id pregunta: 4371 Año de creación de pregunta: 2004
 questions[30]= "31)  En qu&eacute; tipos se divide la fibra &oacute;ptica en funci&oacute;n de la forma de variaci&oacute;n del &iacute;ndice de refracci&oacute;n desde el eje de la fibra al exterior";
 choices[30]= new Array();
 choices[30][0] = "f.o. monomodo y multimodo";
 choices[30][1] = "f.o. de salto de &iacute;ndice y de &iacute;ndice gradual";
 choices[30][2] = "f.o. de emisores LED y emisores l&aacute;ser";
 choices[30][3] = "f.o. de &iacute;ndice anal&oacute;gico y digital";
 answers[30] = 1;
 units[30] = ['104'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 4371. ";
 preguntaids[30] = 4371


//  Id pregunta: 6450 Año de creación de pregunta: 2003
 questions[31]= "32)  &iquest;Qu&eacute; directiva transpone la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones?";
 choices[31]= new Array();
 choices[31][0] = "Directiva 2006/24/CE";
 choices[31][1] = "Directiva 1999/93/CE";
 choices[31][2] = "Directiva 95/46/CE";
 choices[31][3] = "Directiva 2000/31/CE";
 answers[31] = 0;
 units[31] = ['100'];
 blocks[31] = ['B3'];
 comments[31] = "Id Pregunta: 6450. ";
 preguntaids[31] = 6450


//  Id pregunta: 7412 Año de creación de pregunta: 2010
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[32]= new Array();
 choices[32][0] = "Aislamiento";
 choices[32][1] = "Independencia  del software";
 choices[32][2] = "Encapsulamiento";
 choices[32][3] = "Compatibilidad";
 answers[32] = 1;
 units[32] = ['124'];
 blocks[32] = ['B4'];
 comments[32] = "Id Pregunta: 7412. ";
 preguntaids[32] = 7412


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[33]= new Array();
 choices[33][0] = "Art&iacute;culo 9.1 CE.";
 choices[33][1] = "Art&iacute;culo 53 CE.";
 choices[33][2] = "Art&iacute;culo 14 CE.";
 choices[33][3] = "Art&iacute;culo 16 CE.";
 answers[33] = 2;
 units[33] = ['14'];
 blocks[33] = ['A3'];
 comments[33] = "Id Pregunta: 386. Pol&iacute;ticas de igualdad";
 preguntaids[33] = 386


//  Id pregunta: 9128 Año de creación de pregunta: 2014
 questions[34]= "35)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[34]= new Array();
 choices[34][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[34][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[34][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[34][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[34] = 0;
 units[34] = ['72'];
 blocks[34] = ['B2'];
 comments[34] = "Id Pregunta: 9128. Examen TIC A2 2013";
 preguntaids[34] = 9128


//  Id pregunta: 1019 Año de creación de pregunta: 2016
 questions[35]= "36)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado, la suplencia del Delegado del Gobierno corresponder&aacute; a:";
 choices[35]= new Array();
 choices[35][0] = "el Secretario General";
 choices[35][1] = "el Subdirector General";
 choices[35][2] = "el Secretario de Estado";
 choices[35][3] = "ninguna es correcta";
 answers[35] = 0;
 units[35] = ['4', '7', '8', '9'];
 blocks[35] = ['A1', 'A2'];
 comments[35] = "Id Pregunta: 1019. Ley 40/2015";
 preguntaids[35] = 1019


//  Id pregunta: 2395 Año de creación de pregunta: 2006
 questions[36]= "37)  Entre las excepciones a la cesi&oacute;n de datos sin necesidad de recabar el consentimiento del interesado no se encuentra de acuerdo al articulo 11 de la LOPD:";
 choices[36]= new Array();
 choices[36][0] = "Las comunicaciones al Defensor del Pueblo";
 choices[36][1] = "Las comunicaciones al Ministerio Fiscal.";
 choices[36][2] = "Las comunicaciones al Consejo de Estado";
 choices[36][3] = "Las comunicaciones al Tribunal de Cuentas, en las materias que tenga atribuidas";
 answers[36] = 2;
 units[36] = ['35'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2395. ";
 preguntaids[36] = 2395


//  Id pregunta: 8612 Año de creación de pregunta: 2013
 questions[37]= "38)  En el &aacute;mbito de los Sistemas de Informaci&oacute;n Geogr&aacute;fica, &iquest;qu&eacute; es un gazeteer?";
 choices[37]= new Array();
 choices[37][0] = "Directorio de referencias geogr&aacute;ficas";
 choices[37][1] = "Capa raster de informaci&oacute;n topol&oacute;gica";
 choices[37][2] = "Capa vectorial de informaci&oacute;n topol&oacute;gica";
 choices[37][3] = "Ninguna de las anteriores es correcta";
 answers[37] = 0;
 units[37] = ['71'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 8612. ";
 preguntaids[37] = 8612


//  Id pregunta: 5928 Año de creación de pregunta: 2007
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[38]= new Array();
 choices[38][0] = "No precisa se&ntilde;al de reloj externa";
 choices[38][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros";
 choices[38][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas";
 choices[38][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus";
 answers[38] = 1;
 units[38] = ['51'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 5928. ";
 preguntaids[38] = 5928


//  Id pregunta: 10779 Año de creación de pregunta: 2015
 questions[39]= "40)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[39]= new Array();
 choices[39][0] = "10 d&iacute;as h&aacute;biles";
 choices[39][1] = "15 d&iacute;as h&aacute;biles";
 choices[39][2] = "15 d&iacute;as naturales";
 choices[39][3] = "1 mes";
 answers[39] = 3;
 units[39] = ['10'];
 blocks[39] = ['A2'];
 comments[39] = "Id Pregunta: 10779. ";
 preguntaids[39] = 10779


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[40][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[40][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[40][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[40] = 0;
 units[40] = ['19'];
 blocks[40] = ['A4'];
 comments[40] = "Id Pregunta: 444. Agenda Digital";
 preguntaids[40] = 444


//  Id pregunta: 10786 Año de creación de pregunta: 2015
 questions[41]= "42)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[41]= new Array();
 choices[41][0] = "Ley 39/2015";
 choices[41][1] = "Ley 40/2015";
 choices[41][2] = "Ley 29/2015";
 choices[41][3] = "Ley 30/2015";
 answers[41] = 0;
 units[41] = ['7'];
 blocks[41] = ['A2'];
 comments[41] = "Id Pregunta: 10786. ";
 preguntaids[41] = 10786


//  Id pregunta: 4376 Año de creación de pregunta: 2004
 questions[42]= "43)  &iquest;A qu&eacute; se corresponden las siglas 802.11f sobre redes inal&aacute;mbricas?";
 choices[42]= new Array();
 choices[42][0] = "A especificaciones de nivel f&iacute;sico";
 choices[42][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[42][2] = "A especificaciones de Seguridad";
 choices[42][3] = "A especificiaciones de comunicaci&oacute;n entre puntos de acceso";
 answers[42] = 3;
 units[42] = ['108'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4376. Es una recomendaci&oacute;n que permite mayor compatibilidad. Usa el protocolo IAPP que permite a un usuario itinerante cambiarse de un punto de acceso a otro mientras est&aacute; en movimiento sin importar qu&eacute; marcas de puntos de acceso se usan en la red.";
 preguntaids[42] = 4376


//  Id pregunta: 2555 Año de creación de pregunta: 2002
 questions[43]= "44)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[43]= new Array();
 choices[43][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[43][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[43][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[43][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[43] = 0;
 units[43] = ['19'];
 blocks[43] = ['A4'];
 comments[43] = "Id Pregunta: 2555. ";
 preguntaids[43] = 2555


//  Id pregunta: 6064 Año de creación de pregunta: 2003
 questions[44]= "45)  Una caracter&iacute;stica de la tecnolog&iacute;a HSDPA (High Speed Downlink Packet Access) es:";
 choices[44]= new Array();
 choices[44][0] = "Adaptaci&oacute;n r&aacute;pida del enlace. La velocidad de transmisi&oacute;n de datos var&iacute;a de forma r&aacute;pida seg&uacute;n las condicionesdel canal de radio.";
 choices[44][1] = "Transmisi&oacute;n en canal no compartido. Se introduce un nuevo canal de transporte en el enlace descendentedenominado HS-DSCH (High-Speed Downlink Shared Channel).";
 choices[44][2] = "Los datos que se reciben de forma err&oacute;nea, debido a las condiciones de propagaci&oacute;n, no hay que solicitarlos denuevo al transmisor para su correcci&oacute;n.";
 choices[44][3] = "La modulaci&oacute;n normalmente empleada es 4-QAM.";
 answers[44] = 0;
 units[44] = ['117'];
 blocks[44] = ['B4'];
 comments[44] = "Id Pregunta: 6064. TIC B 2007";
 preguntaids[44] = 6064


//  Id pregunta: 9526 Año de creación de pregunta: 2014
 questions[45]= "46)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[45]= new Array();
 choices[45][0] = "RMI";
 choices[45][1] = "JTS";
 choices[45][2] = "JMAPI";
 choices[45][3] = "JTA";
 answers[45] = 3;
 units[45] = ['64'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 9526. JTA: Java Transaction Api; Remote Method Invocation; Java Topology Suite; Java Messaging Application Programming Interface.";
 preguntaids[45] = 9526


//  Id pregunta: 7432 Año de creación de pregunta: 2010
 questions[46]= "47)  La plataforma de servicios de validaci&oacute;n y firma electr&oacute;nica con la que las Administraciones P&uacute;blicas disponen de los instrumentos necesarios para implementar la autenticaci&oacute;n y firma electr&oacute;nica avanzada se denomina:";
 choices[46]= new Array();
 choices[46][0] = "SVF";
 choices[46][1] = "@Firma";
 choices[46][2] = "ValidaFirma";
 choices[46][3] = "VerificaFirma";
 answers[46] = 1;
 units[46] = ['47'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 7432. ";
 preguntaids[46] = 7432


//  Id pregunta: 1450 Año de creación de pregunta: 2016
 questions[47]= "48)  Cu&aacute;l es el objeto de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico (en lo sucesivo LSSI) seg&uacute;n su art&iacute;culo 1:";
 choices[47]= new Array();
 choices[47][0] = "La regulaci&oacute;n del r&eacute;gimen jur&iacute;dico de los servicios ofrecidos solo por correos electr&oacute;nicos y redes sociales.";
 choices[47][1] = "Garantizar y proteger, no solo los servicios de correo electr&oacute;nico sino el soporte f&iacute;sico que almacene dicho servicio.";
 choices[47][2] = "Garantizar y proteger, en lo que concierne al tratamiento de los datos personales, las libertades p&uacute;blicas y los derechos fundamentales de las personas f&iacute;sicas, y especialmente de su honor e intimidad personal y familiar.";
 choices[47][3] = "La regulaci&oacute;n del r&eacute;gimen jur&iacute;dico de los servicios de la sociedad de la informaci&oacute;n y de la contrataci&oacute;n por v&iacute;a electr&oacute;nica.";
 answers[47] = 3;
 units[47] = ['19'];
 blocks[47] = ['A4'];
 comments[47] = "Id Pregunta: 1450. ";
 preguntaids[47] = 1450


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[48]= new Array();
 choices[48][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[48][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[48][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[48][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[48] = 3;
 units[48] = ['22'];
 blocks[48] = ['A4'];
 comments[48] = "Id Pregunta: 499. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[48] = 499


//  Id pregunta: 2747 Año de creación de pregunta: 2002
 questions[49]= "50)  El concepto de trabajo en grupo o groupware se construy&oacute; alrededor de:";
 choices[49]= new Array();
 choices[49][0] = "Los productos de correo electr&oacute;nico";
 choices[49][1] = "Los procesadores de texto";
 choices[49][2] = "Las redes locales de &aacute;mbito de oficina";
 choices[49][3] = "Las hojas de c&aacute;lculo";
 answers[49] = 0;
 units[49] = ['72'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 2747. ";
 preguntaids[49] = 2747


//  Id pregunta: 1079 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;C&oacute;mo se puede validar documentos en XML?";
 choices[50]= new Array();
 choices[50][0] = "Usando XSL Schema.";
 choices[50][1] = "Usando XSLT.";
 choices[50][2] = "Usando un Applet de validaci&oacute;n.";
 choices[50][3] = "Usando un DTD.";
 answers[50] = 3;
 units[50] = ['74'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 1079. ";
 preguntaids[50] = 1079


//  Id pregunta: 3130 Año de creación de pregunta: 2002
 questions[51]= "52)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[51]= new Array();
 choices[51][0] = "Sun Microsystems";
 choices[51][1] = "OSF (Open Group)";
 choices[51][2] = "Departamento de Defensa de EE.UU.";
 choices[51][3] = "MIT (Massachusets Institute of Technology)";
 answers[51] = 1;
 units[51] = ['57'];
 blocks[51] = ['B2'];
 comments[51] = "Id Pregunta: 3130. ";
 preguntaids[51] = 3130


//  Id pregunta: 5518 Año de creación de pregunta: 2007
 questions[52]= "53)  Para evitar las colisiones de paquetes, las redes inal&aacute;mbricas 802.11 WiFi pueden utilizar los siguientes mecanismos: I) CSMA/CA+ACK Carrier Sense Multiple Access with Collision Avoidance + Acknowledge). II) RTS/CTS (Request to Send/Clear to Send). III) OFDM (Orthogonal Frecuency Division Multiplexing).";
 choices[52]= new Array();
 choices[52][0] = "I y II.";
 choices[52][1] = "II y III.";
 choices[52][2] = "I y III.";
 choices[52][3] = "I, II y III.";
 answers[52] = 0;
 units[52] = ['108'];
 blocks[52] = ['B4'];
 comments[52] = "Id Pregunta: 5518. ";
 preguntaids[52] = 5518


//  Id pregunta: 5717 Año de creación de pregunta: 2007
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes no es una distribuci&oacute;n comercial de Linux?:";
 choices[53]= new Array();
 choices[53][0] = "Debian";
 choices[53][1] = "Red Hat";
 choices[53][2] = "SuSE";
 choices[53][3] = "Caldera";
 answers[53] = 0;
 units[53] = ['53'];
 blocks[53] = ['B2'];
 comments[53] = "Id Pregunta: 5717. Debian no es una distribuci&oacute;n comercial, sino comunitaria";
 preguntaids[53] = 5717


//  Id pregunta: 7161 Año de creación de pregunta: 2010
 questions[54]= "55)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[54]= new Array();
 choices[54][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[54][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[54][2] = "No permite relaciones reflexivas.";
 choices[54][3] = "No se pueden representar las propiedades de las entidades.";
 answers[54] = 0;
 units[54] = ['85'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 7161. ";
 preguntaids[54] = 7161


//  Id pregunta: 2283 Año de creación de pregunta: 2002
 questions[55]= "56)  Se define la escalabilidad como:";
 choices[55]= new Array();
 choices[55][0] = "La posibilidad de que aplicaciones de distintos desarrolladores funcionen en m&aacute;quinas de distintos fabricantes";
 choices[55][1] = "La posibilidad de ampliar la capacidad de almacenamiento de un equipo sin necesidad de recurrir a piezas del fabricante que lo construy&oacute;";
 choices[55][2] = "La posibilidad de enlazar en una red, ordenadores de la misma gama, con la seguridad de que funcionar&aacute;n como un &uacute;nico sistema";
 choices[55][3] = "La posibilidad de utilizar el mismo entorno se software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 answers[55] = 3;
 units[55] = ['43'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2283. ";
 preguntaids[55] = 2283


//  Id pregunta: 906 Año de creación de pregunta: 2016
 questions[56]= "57)  El est&aacute;ndar utilizado para la transmisi&oacute;n de la se&ntilde;al de televisi&oacute;n en la red de televisi&oacute;n digital terrestre es:";
 choices[56]= new Array();
 choices[56][0] = "PAL B/G";
 choices[56][1] = "DVB-T";
 choices[56][2] = "DVB-C";
 choices[56][3] = "DOCSIS 3.0";
 answers[56] = 1;
 units[56] = ['115'];
 blocks[56] = ['B4'];
 comments[56] = "Id Pregunta: 906. AGE A2 2015";
 preguntaids[56] = 906


//  Id pregunta: 10118 Año de creación de pregunta: 2015
 questions[57]= "58)  SAML (Security Assertion Markup Language):";
 choices[57]= new Array();
 choices[57][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[57][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[57][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[57][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[57] = 0;
 units[57] = ['123'];
 blocks[57] = ['B4'];
 comments[57] = "Id Pregunta: 10118. Examen TIC A1 2014";
 preguntaids[57] = 10118


//  Id pregunta: 2565 Año de creación de pregunta: 2002
 questions[58]= "59)  &iquest;Qu&eacute; significan las siglas ASIC en el mundo de la arquitectura de computadores?:";
 choices[58]= new Array();
 choices[58][0] = "Circuitos integrados especializados";
 choices[58][1] = "Advanced Set Instructions Complex";
 choices[58][2] = "Nada";
 choices[58][3] = "Procesadores generales";
 answers[58] = 0;
 units[58] = ['50'];
 blocks[58] = ['B2'];
 comments[58] = "Id Pregunta: 2565. Application-Specific Integrated Circuit";
 preguntaids[58] = 2565


//  Id pregunta: 1721 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l es el est&aacute;ndar internacional de evaluaci&oacute;n y determinaci&oacute;n de la capacidad y mejora continua de procesos de ingenier&iacute;a del software:";
 choices[59]= new Array();
 choices[59][0] = "ISO/IEC 12207";
 choices[59][1] = "ISO/IEC 27002";
 choices[59][2] = "ISO/IEC 15504";
 choices[59][3] = "ISO/IEC 17799";
 answers[59] = 2;
 units[59] = ['93'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 1721. ";
 preguntaids[59] = 1721


//  Id pregunta: 1006 Año de creación de pregunta: 2016
 questions[60]= "61)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[60]= new Array();
 choices[60][0] = "los Secretarios de Estado";
 choices[60][1] = "los Ministros";
 choices[60][2] = "los Subsecretarios";
 choices[60][3] = "los Secretarios generales";
 answers[60] = 2;
 units[60] = ['4', '7', '8', '9'];
 blocks[60] = ['A1', 'A2'];
 comments[60] = "Id Pregunta: 1006. Ley 40/2015";
 preguntaids[60] = 1006


//  Id pregunta: 6897 Año de creación de pregunta: 2010
 questions[61]= "62)  ADO.NET es:";
 choices[61]= new Array();
 choices[61][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[61][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[61][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[61][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[61] = 2;
 units[61] = ['63'];
 blocks[61] = ['B2'];
 comments[61] = "Id Pregunta: 6897. TIC A 2009";
 preguntaids[61] = 6897


//  Id pregunta: 9231 Año de creación de pregunta: 2014
 questions[62]= "63)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[62]= new Array();
 choices[62][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[62][1] = "l&iacute;neas de texto.";
 choices[62][2] = "palabras de una l&iacute;nea de texto.";
 choices[62][3] = "letras de una palabra.";
 answers[62] = 3;
 units[62] = ['81'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 9231. Examen TIC A1 2013";
 preguntaids[62] = 9231


//  Id pregunta: 8902 Año de creación de pregunta: 2013
 questions[63]= "64)  En la t&eacute;cnica de Diagramas de Flujo de Datos:";
 choices[63]= new Array();
 choices[63][0] = "Las entidades externas pueden tener relaciones entre s&iacute;.";
 choices[63][1] = "Las entidades externas pueden enviar datos a los almacenes.";
 choices[63][2] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es as&iacute;ncrona.";
 choices[63][3] = "En el diagrama de conexto s&oacute;lo aparece un proceso.";
 answers[63] = 3;
 units[63] = ['85'];
 blocks[63] = ['B3'];
 comments[63] = "Id Pregunta: 8902. ";
 preguntaids[63] = 8902


//  Id pregunta: 3880 Año de creación de pregunta: 2002
 questions[64]= "65)  &iquest;Qu&eacute; es EMACS?:";
 choices[64]= new Array();
 choices[64][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[64][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[64][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[64][3] = "Nada de lo anterior es correcto";
 answers[64] = 1;
 units[64] = ['66'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 3880. ";
 preguntaids[64] = 3880


//  Id pregunta: 1765 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l es la recomendaci&oacute;n de la ITU, que regula el ADSL2+:";
 choices[65]= new Array();
 choices[65][0] = "ITU-T G.821.5";
 choices[65][1] = "ITU-T G.711";
 choices[65][2] = "ITU-T G.992.5";
 choices[65][3] = "ITU-T G.707";
 answers[65] = 2;
 units[65] = ['106'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 1765. ";
 preguntaids[65] = 1765


//  Id pregunta: 2196 Año de creación de pregunta: 2002
 questions[66]= "67)  Indicar cual de los siguientes instrumentos de informaci&oacute;n es un sistema de ayuda orientado a modelos:";
 choices[66]= new Array();
 choices[66][0] = "Informes de excepci&oacute;n";
 choices[66][1] = "Informes resumen";
 choices[66][2] = "Procesos prueba-error";
 choices[66][3] = "Consultas ad-hoc";
 answers[66] = 2;
 units[66] = ['24'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2196. ";
 preguntaids[66] = 2196


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[67]= "68)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[67]= new Array();
 choices[67][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[67][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[67][2] = "Son incompatibles ambas actas de diputado.";
 choices[67][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[67] = 2;
 units[67] = ['5'];
 blocks[67] = ['A1'];
 comments[67] = "Id Pregunta: 155. Uni&oacute;n Europea";
 preguntaids[67] = 155


//  Id pregunta: 7541 Año de creación de pregunta: 2010
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux:";
 choices[68]= new Array();
 choices[68][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel).";
 choices[68][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal.";
 choices[68][2] = "Tiene acceso directo a los dispositivos de E/S.";
 choices[68][3] = "Acceden directamente al mapa de memoria de otros procesos.";
 answers[68] = 1;
 units[68] = ['57'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 7541. Map 2005";
 preguntaids[68] = 7541


//  Id pregunta: 1050 Año de creación de pregunta: 2016
 questions[69]= "70)  Los certificados de clave p&uacute;blica";
 choices[69]= new Array();
 choices[69][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones.";
 choices[69][1] = "Tienen en torno a 1 Mbytes.";
 choices[69][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA.";
 choices[69][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemas de clave p&uacute;blica.";
 answers[69] = 0;
 units[69] = ['76'];
 blocks[69] = ['B2'];
 comments[69] = "Id Pregunta: 1050. ";
 preguntaids[69] = 1050


//  Id pregunta: 1003 Año de creación de pregunta: 2016
 questions[70]= "71)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[70]= new Array();
 choices[70][0] = "los Secretarios generales t&eacute;cnicos";
 choices[70][1] = "los Directores generales";
 choices[70][2] = "los Secretarios generales";
 choices[70][3] = "los Subsecretarios";
 answers[70] = 1;
 units[70] = ['4', '7', '8', '9'];
 blocks[70] = ['A1', 'A2'];
 comments[70] = "Id Pregunta: 1003. Ley 40/2015";
 preguntaids[70] = 1003


//  Id pregunta: 10815 Año de creación de pregunta: 2015
 questions[71]= "72)  Seg&uacute;n la Ley 25/2013:";
 choices[71]= new Array();
 choices[71][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[71][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[71][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[71][3] = "Todas las anteriores son correctas";
 answers[71] = 3;
 units[71] = ['10'];
 blocks[71] = ['A2'];
 comments[71] = "Id Pregunta: 10815. ";
 preguntaids[71] = 10815


//  Id pregunta: 9391 Año de creación de pregunta: 2014
 questions[72]= "73)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[72]= new Array();
 choices[72][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[72][1] = "SGL (Splitterless G. Lite).";
 choices[72][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[72][3] = "CAP (Carrierless Amplitude Phase).";
 answers[72] = 3;
 units[72] = ['106'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 9391. Examen TIC A2  2013";
 preguntaids[72] = 9391


//  Id pregunta: 4105 Año de creación de pregunta: 2003
 questions[73]= "74)  En este nivel se extraen los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos:";
 choices[73]= new Array();
 choices[73][0] = "Nivel fon&eacute;tico distintivo.";
 choices[73][1] = "Nivel pros&oacute;dico.";
 choices[73][2] = "Nivel l&eacute;xico-sint&aacute;ctico.";
 choices[73][3] = "Nivel ac&uacute;stico.";
 answers[73] = 2;
 units[73] = ['81'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 4105. ";
 preguntaids[73] = 4105


//  Id pregunta: 1995 Año de creación de pregunta: 2016
 questions[74]= "75)  Para los actos y gestiones de mero tr&aacute;mite en un procedimiento administrativo, en el que se act&uacute;e por representaci&oacute;n frente a la administraci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Deber&aacute; acreditarse la representaci&oacute;n por cualquier medio v&aacute;lido en derecho que deje constancia fidedigna, o mediante declaraci&oacute;n en comparecencia del interesado.";
 choices[74][1] = "Se presumir&aacute; la representaci&oacute;n.";
 choices[74][2] = "Deber&aacute; asumir la representaci&oacute;n un abogado.";
 choices[74][3] = "Deber&aacute; asumir la representaci&oacute;n del interesado un abogado acompa&ntilde;ado de procurador.";
 answers[74] = 1;
 units[74] = ['7'];
 blocks[74] = ['A2'];
 comments[74] = "Id Pregunta: 1995. ";
 preguntaids[74] = 1995


