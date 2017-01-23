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
//  Id pregunta: 7924 Año de creación de pregunta: 2011
 questions[0]= "1)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[0]= new Array();
 choices[0][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[0][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[0][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[0][3] = "Quejas y reclamaciones.";
 answers[0] = 3;
 units[0] = ['19'];
 blocks[0] = ['A4'];
 comments[0] = "Id Pregunta: 7924. Examen TIC A1 2010";
 preguntaids[0] = 7924


//  Id pregunta: 1692 Año de creación de pregunta: 2016
 questions[1]= "2)  En un DFD (Diagrama de Flujo de Datos), &iquest;de qu&eacute; tipos pueden ser los flujos de datos?";
 choices[1]= new Array();
 choices[1][0] = "Consulta, actualizaci&oacute;n, intercambio.";
 choices[1][1] = "Consulta, modificaci&oacute;n, borrado, di&aacute;logo.";
 choices[1][2] = "Consulta, actualizaci&oacute;n, di&aacute;logo.";
 choices[1][3] = "Consulta, modificaci&oacute;n, borrado, intercambio.";
 answers[1] = 2;
 units[1] = ['86'];
 blocks[1] = ['B3'];
 comments[1] = "Id Pregunta: 1692. ";
 preguntaids[1] = 1692


//  Id pregunta: 1176 Año de creación de pregunta: 2016
 questions[2]= "3)  En un Servicio Web, qu&eacute; lenguaje de los siguientes especifica la sintaxis y los mecanismos de intercambio de mensajes:";
 choices[2]= new Array();
 choices[2][0] = "WSDL.";
 choices[2][1] = "SOAP.";
 choices[2][2] = "UDDI.";
 choices[2][3] = "WS-Security.";
 answers[2] = 0;
 units[2] = ['55'];
 blocks[2] = ['B2'];
 comments[2] = "Id Pregunta: 1176. ";
 preguntaids[2] = 1176


//  Id pregunta: 6094 Año de creación de pregunta: 2003
 questions[3]= "4)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 4.01el umbral de saciedad m&aacute;ximo para un criterio";
 choices[3]= new Array();
 choices[3][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[3][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[3][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[3][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[3] = 2;
 units[3] = ['39'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 6094. Examen TIC A1 MAP 2007";
 preguntaids[3] = 6094


//  Id pregunta: 6901 Año de creación de pregunta: 2010
 questions[4]= "5)  WebDav es:";
 choices[4]= new Array();
 choices[4][0] = "Un est&aacute;ndar para la descripci&oacute;n de servicios web.";
 choices[4][1] = "Un protocolo para la edici&oacute;n distribuida de archivos.";
 choices[4][2] = "Un grupo de trabajo de la W3C para la definici&oacute;n de arquitecturas de servicios web.";
 choices[4][3] = "Una herramienta de CRM basada en software libre.";
 answers[4] = 1;
 units[4] = ['99'];
 blocks[4] = ['B3'];
 comments[4] = "Id Pregunta: 6901. TIC A 2009";
 preguntaids[4] = 6901


//  Id pregunta: 2634 Año de creación de pregunta: 2002
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[5]= new Array();
 choices[5][0] = "RC-4";
 choices[5][1] = "IDEA";
 choices[5][2] = "Triple DES";
 choices[5][3] = "RSA";
 answers[5] = 3;
 units[5] = ['76'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2634. ";
 preguntaids[5] = 2634


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[6]= "7)  El modelo CMMI v1.3 en su representaci&oacute;n por etapas establece:";
 choices[6]= new Array();
 choices[6][0] = "4 niveles de capacidad que son: Incompleto, Realizado, Gestionado y Definido.";
 choices[6][1] = "4 niveles de madurez que son: Inicial, Realizado, Gestionado cualitativamente y en optimizaci&oacute;n.";
 choices[6][2] = "5 niveles de madurez que son: Inicial, Gestionado, Definido, Gestionado cualitatlvamente y en opllmizad&oacute;n.";
 choices[6][3] = "5 niveles de capacidad que son: Incompleto, Realizado, Definido, Gestionado cualitativamente y en optimizaci&oacute;n.";
 answers[6] = 0;
 units[6] = ['93'];
 blocks[6] = ['B3'];
 comments[6] = "Id Pregunta: 851. AGE A2 2015";
 preguntaids[6] = 851


//  Id pregunta: 2648 Año de creación de pregunta: 2002
 questions[7]= "8)  &iquest;Cu&aacute;les son las tecnolog&iacute;as b&aacute;sicas usadas en la gesti&oacute;n de entornos distribuidos?:";
 choices[7]= new Array();
 choices[7][0] = "Agentes inteligentes";
 choices[7][1] = "Agentes propietarios, est&aacute;ndar y proxys";
 choices[7][2] = "Protocolos SNMP y CMIP";
 choices[7][3] = "Las tres respuestas anteriores son correctas";
 answers[7] = 2;
 units[7] = ['114'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 2648. ";
 preguntaids[7] = 2648


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[8]= "9)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[8]= new Array();
 choices[8][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[8][1] = "Static &amp; Active process for REsolution Bank.";
 choices[8][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[8][3] = "Super Active REsponse for Banks";
 answers[8] = 0;
 units[8] = ['12'];
 blocks[8] = ['A3'];
 comments[8] = "Id Pregunta: 337. Modelo econ&oacute;mico";
 preguntaids[8] = 337


//  Id pregunta: 2985 Año de creación de pregunta: 2002
 questions[9]= "10)  Los servlets:";
 choices[9]= new Array();
 choices[9][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[9][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[9][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[9][3] = "Todas las respuestas anteriores son correctas";
 answers[9] = 0;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 2985. ";
 preguntaids[9] = 2985


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[10]= new Array();
 choices[10][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[10][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[10][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[10][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[10] = 1;
 units[10] = ['19'];
 blocks[10] = ['A4'];
 comments[10] = "Id Pregunta: 447. Agenda Digital";
 preguntaids[10] = 447


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[11]= new Array();
 choices[11][0] = "Consumidores";
 choices[11][1] = "PYMES y Start-ups";
 choices[11][2] = "La Industria";
 choices[11][3] = "Todos los anteriores";
 answers[11] = 3;
 units[11] = ['17'];
 blocks[11] = ['A4'];
 comments[11] = "Id Pregunta: 434. Mercado &Uacute;nico Digital";
 preguntaids[11] = 434


//  Id pregunta: 5358 Año de creación de pregunta: 2006
 questions[12]= "13)  Si quiero autenticar a un usuario";
 choices[12]= new Array();
 choices[12][0] = "Le pido su nombre";
 choices[12][1] = "Le pido su DNI";
 choices[12][2] = "Le pido su nombre y lo compruebo en una lista";
 choices[12][3] = "todas las anteriores";
 answers[12] = 1;
 units[12] = ['120'];
 blocks[12] = ['B4'];
 comments[12] = "Id Pregunta: 5358. ";
 preguntaids[12] = 5358


//  Id pregunta: 2073 Año de creación de pregunta: 2002
 questions[13]= "14)  De acuerdo a la Decisi&oacute;n 87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?:";
 choices[13]= new Array();
 choices[13][0] = "Continuidad de funcionamiento";
 choices[13][1] = "Innovaci&oacute;n";
 choices[13][2] = "Coste excesivo";
 choices[13][3] = "Todas las anteriores";
 answers[13] = 3;
 units[13] = ['43'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2073. ";
 preguntaids[13] = 2073


//  Id pregunta: 9134 Año de creación de pregunta: 2014
 questions[14]= "15)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[14]= new Array();
 choices[14][0] = "Reponen";
 choices[14][1] = "Reajustan";
 choices[14][2] = "Devuelven o cancelan";
 choices[14][3] = "Todas las anteriores";
 answers[14] = 3;
 units[14] = ['10'];
 blocks[14] = ['A2'];
 comments[14] = "Id Pregunta: 9134. Art. 99, Art. 102 RD Legislativo 3/2011";
 preguntaids[14] = 9134


//  Id pregunta: 7860 Año de creación de pregunta: 2011
 questions[15]= "16)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[15]= new Array();
 choices[15][0] = "No est&aacute; en primera forma normal.";
 choices[15][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[15][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[15][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[15] = 2;
 units[15] = ['61'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7860. Examen TIC A1 2010";
 preguntaids[15] = 7860


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[16]= "17)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[16]= new Array();
 choices[16][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[16][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[16][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[16][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[16] = 1;
 units[16] = ['19'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 480. Sociedad de la informaci&oacute;n";
 preguntaids[16] = 480


//  Id pregunta: 8974 Año de creación de pregunta: 2013
 questions[17]= "18)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[17]= new Array();
 choices[17][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[17][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[17][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[17][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[17] = 3;
 units[17] = ['19'];
 blocks[17] = ['A4'];
 comments[17] = "Id Pregunta: 8974. Examen TIC A1 2011";
 preguntaids[17] = 8974


//  Id pregunta: 9884 Año de creación de pregunta: 2015
 questions[18]= "19)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[18]= new Array();
 choices[18][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[18][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[18][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[18][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[18] = 0;
 units[18] = ['7', '19'];
 blocks[18] = ['A2', 'A4'];
 comments[18] = "Id Pregunta: 9884. ";
 preguntaids[18] = 9884


//  Id pregunta: 10650 Año de creación de pregunta: 2015
 questions[19]= "20)  Seg&uacute;n la Ley 9/2014, el Gobierno, en relaci&oacute;n a la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, establecer&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos p&uacute;blicos.";
 choices[19][1] = "La correcta utilizaci&oacute;n de frecuencias por parte de los operadores.";
 choices[19][2] = "La inspecci&oacute;n por un ente privado del nivel radioel&eacute;ctrico tolerable.";
 choices[19][3] = "Ninguna de las anteriores.";
 answers[19] = 3;
 units[19] = ['121'];
 blocks[19] = ['B4'];
 comments[19] = "Id Pregunta: 10650. ";
 preguntaids[19] = 10650


//  Id pregunta: 7714 Año de creación de pregunta: 2010
 questions[20]= "21)  Seg&uacute;n el est&aacute;ndar ISO 7816 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientes contactos se utiliza para la se&ntilde;al de reloj?";
 choices[20]= new Array();
 choices[20][0] = "C2.";
 choices[20][1] = "C3.";
 choices[20][2] = "C5.";
 choices[20][3] = "C6.";
 answers[20] = 1;
 units[20] = ['78'];
 blocks[20] = ['B2'];
 comments[20] = "Id Pregunta: 7714. Map 2007";
 preguntaids[20] = 7714


//  Id pregunta: 3358 Año de creación de pregunta: 2006
 questions[21]= "22)  Se&ntilde;ale la opci&oacute;n correcta respecto a SAN, Storage Area Network:";
 choices[21]= new Array();
 choices[21][0] = "SAN se sit&uacute;a entre el servidor de aplicaciones y el sistema de ficheros";
 choices[21][1] = "SAN es una red separada de la LAN, de dispositivos de almacenamiento homog&eacute;neos";
 choices[21][2] = "La diferencia entre NAS y SAN es que &eacute;sta &uacute;ltima utiliza fibra &oacute;ptica para sus interconexiones";
 choices[21][3] = "Todos los dispositivos de almacenamiento de la SAN son accesibles a todos los servidores de la LAN";
 answers[21] = 3;
 units[21] = ['53'];
 blocks[21] = ['B2'];
 comments[21] = "Id Pregunta: 3358. ";
 preguntaids[21] = 3358


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[22]= "23)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[22]= new Array();
 choices[22][0] = "Cifrada";
 choices[22][1] = "Conjunta";
 choices[22][2] = "Sistem&aacute;tica";
 choices[22][3] = "Todas son correctas";
 answers[22] = 3;
 units[22] = ['11'];
 blocks[22] = ['A2'];
 comments[22] = "Id Pregunta: 268. Presupuestos generales";
 preguntaids[22] = 268


//  Id pregunta: 2461 Año de creación de pregunta: 2002
 questions[23]= "24)  Seg&uacute;n el R.D. 209/2003:";
 choices[23]= new Array();
 choices[23][0] = "la Administraci&oacute;n P&uacute;blica proporcionar&aacute; al ciudadano una direcci&oacute;n &uacute;nica mediante la que &eacute;ste deber&aacute; realizar la tramitaci&oacute;n electr&oacute;nica pertinente una vez se disponga de los medios adecuados";
 choices[23][1] = "Se podr&aacute;n realizar por los organismos competentes copias firmadas de los documentos electr&oacute;nicos, de la misma manera que se pueden compulsar y sellar copias de los documentos en papel";
 choices[23][2] = "Los c&oacute;mputos de los plazos de entrega a efectos legales podr&aacute;n incluir d&iacute;as inh&aacute;biles, al estar los registros electr&oacute;nicos funcionando 24 horas al d&iacute;a y 7 d&iacute;as a la semana";
 choices[23][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[23] = 3;
 units[23] = ['19'];
 blocks[23] = ['A4'];
 comments[23] = "Id Pregunta: 2461. ";
 preguntaids[23] = 2461


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[24]= new Array();
 choices[24][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[24][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[24][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[24][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[24] = 1;
 units[24] = ['12'];
 blocks[24] = ['A3'];
 comments[24] = "Id Pregunta: 331. Modelo econ&oacute;mico";
 preguntaids[24] = 331


//  Id pregunta: 6798 Año de creación de pregunta: 2010
 questions[25]= "26)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cu&aacute;les es:";
 choices[25]= new Array();
 choices[25][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;";
 choices[25][1] = "Se integran en sistemas SGDBR";
 choices[25][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio";
 choices[25][3] = "Deben estar accesibles y deben poder ser localizados para su consumo";
 answers[25] = 3;
 units[25] = ['55'];
 blocks[25] = ['B2'];
 comments[25] = "Id Pregunta: 6798. TIC A 2009";
 preguntaids[25] = 6798


//  Id pregunta: 9505 Año de creación de pregunta: 2014
 questions[26]= "27)  Una inversi&oacute;n de 300.000 euros produce el primer a&ntilde;o un beneficio de 5.000 euros. Teniendo en cuenta que la rentabilidad requerida a la inversi&oacute;n es del 2%, &iquest;cu&aacute;l es el valor actual neto de dicha inversi&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "300.000 + 5.000 * 0,02";
 choices[26][1] = "-300.000 + 5.000 / (1 + 0,02)";
 choices[26][2] = "300.000 - 5.000 / (1 - 0,02)";
 choices[26][3] = "-300.000 + 5.000 * (1 + 0,02)";
 answers[26] = 1;
 units[26] = ['40'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 9505. VAN(k) = &minus; C0 + Q1 / (1+k) + Q2 / (1+k)2 + ..... + Qn / (1+k)n";
 preguntaids[26] = 9505


//  Id pregunta: 982 Año de creación de pregunta: 2016
 questions[27]= "28)  El articulo 55 de la ley 40/2015 se&ntilde;ala que salvo las excepciones previstas por esta ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[27]= new Array();
 choices[27][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[27][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[27][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[27][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[27] = 0;
 units[27] = ['4', '7', '8', '9'];
 blocks[27] = ['A1', 'A2'];
 comments[27] = "Id Pregunta: 982. Ley 40/2015";
 preguntaids[27] = 982


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[28]= "29)  Big Data:";
 choices[28]= new Array();
 choices[28][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[28][1] = "No puede emplearse para tratar datos no estructurados";
 choices[28][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = 3;
 units[28] = ['73'];
 blocks[28] = ['B2'];
 comments[28] = "Id Pregunta: 749. Big Data y NoSQL";
 preguntaids[28] = 749


//  Id pregunta: 4543 Año de creación de pregunta: 2002
 questions[29]= "30)  El concepto y primer desarrollo del servicio WWW se debe a:";
 choices[29]= new Array();
 choices[29][0] = "Vinton Cerf";
 choices[29][1] = "Leonard Kleinrock";
 choices[29][2] = "Robert Kahn";
 choices[29][3] = "Tim Berners-Lee";
 answers[29] = 3;
 units[29] = ['103'];
 blocks[29] = ['B4'];
 comments[29] = "Id Pregunta: 4543. ";
 preguntaids[29] = 4543


//  Id pregunta: 10466 Año de creación de pregunta: 2015
 questions[30]= "31)  Indique la opci&oacute;n correcta sobre las plataformas Open Source para el Cloud:";
 choices[30]= new Array();
 choices[30][0] = "OpenNebula fue desarrollado por el DSA (Distributed Systems Architecture Research Group) en la Universidad Complutense de Madrid y financiado por varios proyectos europeos y permite programar tanto en Java como en Ruby.";
 choices[30][1] = "OpenStack fue fundada por Rackspace y la NASA.";
 choices[30][2] = "CloudStack fue desarrollado por Cloud.com y dispone de versiones propietarias adem&aacute;s de la edici&oacute;n Community.";
 choices[30][3] = "Todas son verdaderas.";
 answers[30] = 3;
 units[30] = ['52'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 10466. ";
 preguntaids[30] = 10466


//  Id pregunta: 1190 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale qu&eacute; JSR de Java define la especificaci&oacute;n de Portlets versi&oacute;n 2.0:";
 choices[31]= new Array();
 choices[31][0] = "JSR 268.";
 choices[31][1] = "JSR 186.";
 choices[31][2] = "JSR 286.";
 choices[31][3] = "JSR 127.";
 answers[31] = 2;
 units[31] = ['64'];
 blocks[31] = ['B2'];
 comments[31] = "Id Pregunta: 1190. ";
 preguntaids[31] = 1190


//  Id pregunta: 3024 Año de creación de pregunta: 2002
 questions[32]= "33)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[32]= new Array();
 choices[32][0] = "Los usuarios";
 choices[32][1] = "Los datos";
 choices[32][2] = "Los documentos";
 choices[32][3] = "Los mensajes";
 answers[32] = 0;
 units[32] = ['77', '78'];
 blocks[32] = ['B2'];
 comments[32] = "Id Pregunta: 3024. ";
 preguntaids[32] = 3024


//  Id pregunta: 4052 Año de creación de pregunta: 2003
 questions[33]= "34)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de informaci&oacute;n (IAS)?:";
 choices[33]= new Array();
 choices[33][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[33][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[33][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n.";
 choices[33][3] = "Paso a Producci&oacute;n.";
 answers[33] = 1;
 units[33] = ['91'];
 blocks[33] = ['B3'];
 comments[33] = "Id Pregunta: 4052. Junta Andaluc&iacute;a";
 preguntaids[33] = 4052


//  Id pregunta: 2474 Año de creación de pregunta: 2009
 questions[34]= "35)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[34]= new Array();
 choices[34][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[34][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[34][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, los proveedores de Acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos";
 choices[34][3] = "las respuestas 'a' y 'b' son correctas";
 answers[34] = 0;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 2474. ";
 preguntaids[34] = 2474


//  Id pregunta: 3375 Año de creación de pregunta: 2006
 questions[35]= "36)  Un sistema operativo trata de obtener el m&aacute;ximo rendimiento del hardware que controla. La multitarea y la existencia de varios procesadores son algunas herramientas para conseguirlo. Se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[35]= new Array();
 choices[35][0] = "No existe incompatibilidad en emplear multiprogramaci&oacute;n y tiempo compartido en un sistema multiprocesador.";
 choices[35][1] = "Una transacci&oacute;n se inicia con la petici&oacute;n de un terminal y acaba con la respuesta de la CPU.";
 choices[35][2] = "En un sistema con time-sharing, la asignaci&oacute;n de prioridades a unos procesos respecto de otros no mejora el rendimiento.";
 choices[35][3] = "El sistema operativo no es responsable de la sincronizaci&oacute;n de procesos, son las aplicaciones quienes se encargan de esa tarea.";
 answers[35] = 0;
 units[35] = ['56'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 3375. ";
 preguntaids[35] = 3375


//  Id pregunta: 5859 Año de creación de pregunta: 2007
 questions[36]= "37)  En relaci&oacute;n a los modelos vectorial frente a r&aacute;ster en un SIG, se&ntilde;ale la opci&oacute;n verdadera.";
 choices[36]= new Array();
 choices[36][0] = "Las operaciones de c&aacute;lculo se simplifican al utilizar modelos vectoriales.";
 choices[36][1] = "No se deben mezclar datos raster con datos vectoriales entre capas o las prestaciones globales del SIG se ver&aacute;n comprometidas.";
 choices[36][2] = "La precisi&oacute;n gr&aacute;fica del modelo raster supera al modelo vectorial, al no tener que reescalar nada.";
 choices[36][3] = "La cartograf&iacute;a digital tradicional es fundamentalmente de tipo vectorial.";
 answers[36] = 3;
 units[36] = ['71'];
 blocks[36] = ['B2'];
 comments[36] = "Id Pregunta: 5859. ";
 preguntaids[36] = 5859


//  Id pregunta: 5297 Año de creación de pregunta: 2006
 questions[37]= "38)  Un GigaPop es:";
 choices[37]= new Array();
 choices[37][0] = "1000 pops.";
 choices[37][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[37][2] = "Ninguna de las anteriores";
 choices[37][3] = "a) y b) son ciertas.";
 answers[37] = 1;
 units[37] = ['103'];
 blocks[37] = ['B4'];
 comments[37] = "Id Pregunta: 5297. ";
 preguntaids[37] = 5297


//  Id pregunta: 4227 Año de creación de pregunta: 2006
 questions[38]= "39)  El conjunto de tareas a realizar para asegurar la calidad de un producto software se conoce como:";
 choices[38]= new Array();
 choices[38][0] = "Control de Calidad";
 choices[38][1] = "Modelo de Calidad";
 choices[38][2] = "Plan General de Calidad";
 choices[38][3] = "Garant&iacute;a de Calidad";
 answers[38] = 3;
 units[38] = ['92'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 4227. ";
 preguntaids[38] = 4227


//  Id pregunta: 10182 Año de creación de pregunta: 2015
 questions[39]= "40)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[39]= new Array();
 choices[39][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[39][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[39][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[39][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[39] = 0;
 units[39] = ['64'];
 blocks[39] = ['B2'];
 comments[39] = "Id Pregunta: 10182. Examen TIC A1 2014";
 preguntaids[39] = 10182


//  Id pregunta: 1153 Año de creación de pregunta: 2016
 questions[40]= "41)  Elija la respuesta correcta con respecto a los grafos:";
 choices[40]= new Array();
 choices[40][0] = "Un &aacute;rbol es un grafo dirigido y ac&iacute;clico.";
 choices[40][1] = "Un grafo est&aacute; completamente conectado si existe como m&iacute;nimo un camino entre cualquier par de v&eacute;rtices distintos.";
 choices[40][2] = "En un grafo el grado interior de un v&eacute;rtice es el n&uacute;mero de aristas que llegan a &eacute;l.";
 choices[40][3] = "La lista de adyacencia es una lista donde las filas y las columnas hacen referencia a los v&eacute;rtices para almacenar en cada casilla la longitud entre cada par de v&eacute;rtices del grafo.";
 answers[40] = 2;
 units[40] = ['86'];
 blocks[40] = ['B3'];
 comments[40] = "Id Pregunta: 1153. ";
 preguntaids[40] = 1153


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[41]= new Array();
 choices[41][0] = "Dos Cap&iacute;tulos.";
 choices[41][1] = "Tres Cap&iacute;tulos.";
 choices[41][2] = "Un Cap&iacute;tulo.";
 choices[41][3] = "Cuatro Cap&iacute;tulos.";
 answers[41] = 1;
 units[41] = ['1'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 49. Constituci&oacute;n de 1978";
 preguntaids[41] = 49


//  Id pregunta: 2321 Año de creación de pregunta: 2002
 questions[42]= "43)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[42]= new Array();
 choices[42][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[42][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[42][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[42][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[42] = 0;
 units[42] = ['43'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2321. ";
 preguntaids[42] = 2321


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[43]= "44)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[43]= new Array();
 choices[43][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la Ley 39/2015";
 choices[43][1] = "la Ley 39/2015, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[43][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la Ley 39/2015";
 choices[43][3] = "la Ley 39/2015, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[43] = 0;
 units[43] = ['7'];
 blocks[43] = ['A2'];
 comments[43] = "Id Pregunta: 218. Ley 39/2015";
 preguntaids[43] = 218


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[44]= "45)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[44][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[44][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[44][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[44] = 2;
 units[44] = ['43'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 583. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[44] = 583


//  Id pregunta: 5208 Año de creación de pregunta: 2006
 questions[45]= "46)  Un router puede ser:";
 choices[45]= new Array();
 choices[45][0] = "S&oacute;lo un dispositivo hardware.";
 choices[45][1] = "S&oacute;lo un dispositivo software.";
 choices[45][2] = "Un dispositivo software, hardware o bien una combinaci&oacute;n de ellos.";
 choices[45][3] = "Ninguna de las anteriores es cierta";
 answers[45] = 2;
 units[45] = ['102'];
 blocks[45] = ['B4'];
 comments[45] = "Id Pregunta: 5208. ";
 preguntaids[45] = 5208


//  Id pregunta: 2234 Año de creación de pregunta: 2009
 questions[46]= "47)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[46]= new Array();
 choices[46][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[46][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[46][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[46][3] = "Los ficheros derivados de los Registros Civiles";
 answers[46] = 1;
 units[46] = ['35'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2234. ";
 preguntaids[46] = 2234


//  Id pregunta: 10636 Año de creación de pregunta: 2015
 questions[47]= "48)  Seg&uacute;n la Ley 9/2014, el otorgamiento de los derechos de uso de los recursos de numeraci&oacute;n, direccionamiento y denominaci&oacute;n corresponden a:";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Energia, Turismo y Agenda Digital.";
 choices[47][1] = "CNMC.";
 choices[47][2] = "Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[47][3] = "ORECE.";
 answers[47] = 0;
 units[47] = ['121'];
 blocks[47] = ['B4'];
 comments[47] = "Id Pregunta: 10636. Articulo 19";
 preguntaids[47] = 10636


//  Id pregunta: 8920 Año de creación de pregunta: 2013
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[48]= new Array();
 choices[48][0] = "Autoridad limitada para la toma de decisiones";
 choices[48][1] = "Presupuestos plurianuales en todos los casos";
 choices[48][2] = "M&uacute;ltiples actores involucrados";
 choices[48][3] = "Coordinaci&oacute;n entre organismos";
 answers[48] = 1;
 units[48] = ['40'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 8920. ";
 preguntaids[48] = 8920


//  Id pregunta: 8783 Año de creación de pregunta: 2013
 questions[49]= "50)  &iquest;Qu&eacute; conjunto de normas estandarizan los sistemas de cableado en clases?";
 choices[49]= new Array();
 choices[49][0] = "EIA/TIA 586";
 choices[49][1] = "SO/EIS DIS 11108";
 choices[49][2] = "EIA/TIA 568";
 choices[49][3] = "ISO/EIS DIS 11801";
 answers[49] = 3;
 units[49] = ['104'];
 blocks[49] = ['B4'];
 comments[49] = "Id Pregunta: 8783. Examen TIC A2 2011";
 preguntaids[49] = 8783


//  Id pregunta: 8011 Año de creación de pregunta: 2011
 questions[50]= "51)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[50]= new Array();
 choices[50][0] = "1992";
 choices[50][1] = "2008";
 choices[50][2] = "2011";
 choices[50][3] = "2012";
 answers[50] = 2;
 units[50] = ['60'];
 blocks[50] = ['B2'];
 comments[50] = "Id Pregunta: 8011. Examen TIC A2 2010";
 preguntaids[50] = 8011


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[51]= new Array();
 choices[51][0] = "La CETIC";
 choices[51][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[51][2] = "La DTIC";
 choices[51][3] = "El MHFP";
 answers[51] = 0;
 units[51] = ['19'];
 blocks[51] = ['A4'];
 comments[51] = "Id Pregunta: 468. Estrategia TIC";
 preguntaids[51] = 468


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[52]= "53)  La soberan&iacute;a nacional reside en:";
 choices[52]= new Array();
 choices[52][0] = "el Parlamento nacional.";
 choices[52][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[52][2] = "el pueblo espa&ntilde;ol.";
 choices[52][3] = "el Congreso y el Senado.";
 answers[52] = 2;
 units[52] = ['1'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 82. Constituci&oacute;n de 1978";
 preguntaids[52] = 82


//  Id pregunta: 1103 Año de creación de pregunta: 2016
 questions[53]= "54)  En la Ley 34/2002, LSSICE, en el art&iacute;culo 41 se establecen las medidas de car&aacute;cter provisional que se pueden adoptar con el fin de asegurar la eficacia de la resoluci&oacute;n que se dicte en relaci&oacute;n con los procedimientos sancionadores iniciados por infracciones graves o muy graves. Se&ntilde;ale cu&aacute;l de las siguientes medidas NO se contempla:";
 choices[53]= new Array();
 choices[53][0] = "Suspensi&oacute;n temporal de la actividad del prestador de servicios y, en su caso, cierre provisional de sus establecimientos.";
 choices[53][1] = "Precinto, dep&oacute;sito o incautaci&oacute;n de registros, soportes y archivos inform&aacute;ticos y de documentos en general, as&iacute; como de aparatos y equipos inform&aacute;ticos de todo tipo.";
 choices[53][2] = "Intervenci&oacute;n provisional de los activos y bienes del prestador de servicios bajo resoluci&oacute;n judicial.";
 choices[53][3] = "Advertir al p&uacute;blico de la existencia de posibles conductas infractoras y de la incoaci&oacute;n del expediente sancionador de que se trate, as&iacute; como de las medidas adoptadas para el cese de dichas conductas.";
 answers[53] = 2;
 units[53] = ['19'];
 blocks[53] = ['A4'];
 comments[53] = "Id Pregunta: 1103. ";
 preguntaids[53] = 1103


//  Id pregunta: 3362 Año de creación de pregunta: 2006
 questions[54]= "55)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[54]= new Array();
 choices[54][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[54][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[54][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[54][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[54] = 2;
 units[54] = ['55'];
 blocks[54] = ['B2'];
 comments[54] = "Id Pregunta: 3362. ";
 preguntaids[54] = 3362


//  Id pregunta: 1252 Año de creación de pregunta: 2016
 questions[55]= "56)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[55]= new Array();
 choices[55][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[55][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[55][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[55][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[55] = 2;
 units[55] = ['1'];
 blocks[55] = ['A1'];
 comments[55] = "Id Pregunta: 1252. ";
 preguntaids[55] = 1252


//  Id pregunta: 10677 Año de creación de pregunta: 2015
 questions[56]= "57)  Seg&uacute;n el art&iacute;culo 26 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas Ley 39/2015 respecto a la validez de documentos electr&oacute;nicos administrativos, es FALSO que";
 choices[56]= new Array();
 choices[56][0] = "Deber&aacute;n contener informaci&oacute;n de cualquier naturaleza archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[56][1] = "Deber&aacute;n incorporar metadatos m&iacute;nimos exigidos.";
 choices[56][2] = "Deber&aacute;n incorporar una referencia temporal del momento en que han sido emitidos.";
 choices[56][3] = "Deber&aacute;n incorporar firma electr&oacute;nica aquellos documentos electr&oacute;nicos que sean publicados por las AA.PP con car&aacute;cter meramente informativo.";
 answers[56] = 3;
 units[56] = ['7'];
 blocks[56] = ['A2'];
 comments[56] = "Id Pregunta: 10677. ";
 preguntaids[56] = 10677


//  Id pregunta: 3472 Año de creación de pregunta: 2006
 questions[57]= "58)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[57]= new Array();
 choices[57][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[57][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[57][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = 3;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 3472. Ley 59/2003, art&iacute;culo 32";
 preguntaids[57] = 3472


//  Id pregunta: 6948 Año de creación de pregunta: 2010
 questions[58]= "59)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[58]= new Array();
 choices[58][0] = "La Administraci&oacute;n General del Estado";
 choices[58][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[58][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[58][3] = "Todas las Administraciones P&uacute;blicas";
 answers[58] = 1;
 units[58] = ['19'];
 blocks[58] = ['A4'];
 comments[58] = "Id Pregunta: 6948. Articulo 1";
 preguntaids[58] = 6948


//  Id pregunta: 2771 Año de creación de pregunta: 2002
 questions[59]= "60)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[59]= new Array();
 choices[59][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[59][1] = "Interfaz lenguaje de datos de usuario";
 choices[59][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[59][3] = "Interfaz lenguaje de datos interno";
 answers[59] = 2;
 units[59] = ['60'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 2771. ";
 preguntaids[59] = 2771


//  Id pregunta: 6098 Año de creación de pregunta: 2003
 questions[60]= "61)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[60]= new Array();
 choices[60][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[60][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[60][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[60][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[60] = 1;
 units[60] = ['112'];
 blocks[60] = ['B4'];
 comments[60] = "Id Pregunta: 6098. Examen TIC A1 MAP 2007";
 preguntaids[60] = 6098


//  Id pregunta: 3836 Año de creación de pregunta: 2002
 questions[61]= "62)  En un diagrama de GANTT, un hito, por definici&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Dura lo mismo que la etapa que lo genera";
 choices[61][1] = "Dura una unidad temporal";
 choices[61][2] = "Su duraci&oacute;n se incluye en las etapas que desencadena";
 choices[61][3] = "No tiene duraci&oacute;n";
 answers[61] = 3;
 units[61] = ['91'];
 blocks[61] = ['B3'];
 comments[61] = "Id Pregunta: 3836. ";
 preguntaids[61] = 3836


//  Id pregunta: 10099 Año de creación de pregunta: 2015
 questions[62]= "63)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[62]= new Array();
 choices[62][0] = "Mediante claves sim&eacute;tricas.";
 choices[62][1] = "Mediante claves asim&eacute;tricas.";
 choices[62][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[62][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[62] = 0;
 units[62] = ['77', '78'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 10099. Examen TIC A2 2014";
 preguntaids[62] = 10099


//  Id pregunta: 9905 Año de creación de pregunta: 2015
 questions[63]= "64)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[63]= new Array();
 choices[63][0] = "Fecha de inscripci&oacute;n.";
 choices[63][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[63][2] = "Lugar de inscripci&oacute;n.";
 choices[63][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[63] = 2;
 units[63] = ['7', '19'];
 blocks[63] = ['A2', 'A4'];
 comments[63] = "Id Pregunta: 9905. ";
 preguntaids[63] = 9905


//  Id pregunta: 2819 Año de creación de pregunta: 2002
 questions[64]= "65)  En el sistema operativo Unix, las tuberias (pipes) son mecanismos de comunicaci&oacute;n que permiten la transferencia de datos entre dos procesos. &iquest;C&oacute;mo podr&iacute;amos crear una tuber&iacute;a con el nombre TUB?:";
 choices[64]= new Array();
 choices[64][0] = "mknod TUB p";
 choices[64][1] = "En Unix no se puede dar una nombre a una tuber&iacute;a";
 choices[64][2] = "mkp TUB";
 choices[64][3] = "mkpipe TUB";
 answers[64] = 0;
 units[64] = ['53'];
 blocks[64] = ['B2'];
 comments[64] = "Id Pregunta: 2819. ";
 preguntaids[64] = 2819


//  Id pregunta: 9390 Año de creación de pregunta: 2014
 questions[65]= "66)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[65]= new Array();
 choices[65][0] = "Web 3.0.";
 choices[65][1] = "Labelling.";
 choices[65][2] = "Taxonom&iacute;a.";
 choices[65][3] = "Folcsonom&iacute;a.";
 answers[65] = 3;
 units[65] = ['125'];
 blocks[65] = ['B4'];
 comments[65] = "Id Pregunta: 9390. Examen TIC A2  2013";
 preguntaids[65] = 9390


//  Id pregunta: 3206 Año de creación de pregunta: 2003
 questions[66]= "67)  &iquest; Cu&aacute;l se utiliza para compartir recursos desde un sistema tipo Unix a equipos Windows utilizando el protocolo SMB ?";
 choices[66]= new Array();
 choices[66][0] = "NFS";
 choices[66][1] = "Samba";
 choices[66][2] = "Cualquiera de los 2 indistintamente";
 choices[66][3] = "Ninguno de los 2";
 answers[66] = 1;
 units[66] = ['57'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 3206. ";
 preguntaids[66] = 3206


//  Id pregunta: 8689 Año de creación de pregunta: 2013
 questions[67]= "68)  &iquest;Qu&eacute; es Nemo?";
 choices[67]= new Array();
 choices[67][0] = "Un gestor de archivos.";
 choices[67][1] = "Una aplicaci&oacute;n multimedia para m&oacute;viles.";
 choices[67][2] = "Una suite de ofim&aacute;tica.";
 choices[67][3] = "Un editor de texto.";
 answers[67] = 0;
 units[67] = ['57'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8689. ";
 preguntaids[67] = 8689


//  Id pregunta: 1651 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es la velocidad m&aacute;xima te&oacute;rica a la que se puede transmitir en HSDPA (High Speed Downlink Packet Access)?";
 choices[68]= new Array();
 choices[68][0] = "2,5 Mbps";
 choices[68][1] = "14,4 Mbps";
 choices[68][2] = "3,5 Mbps";
 choices[68][3] = "1 Mbps";
 answers[68] = 1;
 units[68] = ['117'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 1651. ";
 preguntaids[68] = 1651


//  Id pregunta: 10915 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Cu&aacute;l es uno de los beneficios de la utilizaci&oacute;n de las VPN para el acceso remoto?";
 choices[69]= new Array();
 choices[69][0] = "Menor sobrecarga de protocolo";
 choices[69][1] = "Potencial reducci&oacute;n de los costos de conectividad";
 choices[69][2] = "Aumento de la calidad de servicio";
 choices[69][3] = "Facilidad de soluci&oacute;n de problemas";
 answers[69] = 1;
 units[69] = ['110'];
 blocks[69] = ['B4'];
 comments[69] = "Id Pregunta: 10915. ";
 preguntaids[69] = 10915


//  Id pregunta: 7033 Año de creación de pregunta: 2010
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que deba cumplir un requisito en un an&aacute;lisis de la informaci&oacute;n para que sea de utilidad?";
 choices[70]= new Array();
 choices[70][0] = "Completo";
 choices[70][1] = "Verificable";
 choices[70][2] = "Dif&iacute;cil de modificar";
 choices[70][3] = "Consistente";
 answers[70] = 2;
 units[70] = ['84'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 7033. ";
 preguntaids[70] = 7033


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[71]= "72)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[71]= new Array();
 choices[71][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[71][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[71][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[71][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[71] = 1;
 units[71] = ['14'];
 blocks[71] = ['A3'];
 comments[71] = "Id Pregunta: 353. Estado del Bienestar";
 preguntaids[71] = 353


//  Id pregunta: 5378 Año de creación de pregunta: 2006
 questions[72]= "73)  No es cierto que la herramienta Nagios";
 choices[72]= new Array();
 choices[72][0] = "Puede monitorizar servicios TCP";
 choices[72][1] = "Es una alternativa a Bigbrother";
 choices[72][2] = "Puede utilizar agentes distintos a SNMP";
 choices[72][3] = "Puede ser instalada en Windows";
 answers[72] = 3;
 units[72] = ['114'];
 blocks[72] = ['B4'];
 comments[72] = "Id Pregunta: 5378. ";
 preguntaids[72] = 5378


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[73]= "74)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[73]= new Array();
 choices[73][0] = "formular solicitudes";
 choices[73][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[73][2] = "presentar declaraciones responsables o comunicaciones";
 choices[73][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[73] = 1;
 units[73] = ['7'];
 blocks[73] = ['A2'];
 comments[73] = "Id Pregunta: 228. Ley 39/2015";
 preguntaids[73] = 228


//  Id pregunta: 2727 Año de creación de pregunta: 2002
 questions[74]= "75)  Dentro de la Inteligencia Artificial Distribuir&aacute;n indicar qu&eacute; significan las siglas KIF:";
 choices[74]= new Array();
 choices[74][0] = "Knowledge Interchange File";
 choices[74][1] = "Knowledge Intermediate Format";
 choices[74][2] = "Knowledge Intermediate File";
 choices[74][3] = "Knowledge Interchange Format";
 answers[74] = 3;
 units[74] = ['67'];
 blocks[74] = ['B2'];
 comments[74] = "Id Pregunta: 2727. ";
 preguntaids[74] = 2727


