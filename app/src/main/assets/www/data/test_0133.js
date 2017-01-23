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
//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[0]= "1)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[0]= new Array();
 choices[0][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[0][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[0][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[0][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[0] = 3;
 units[0] = ['101'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 863. AGE A1 2015";
 preguntaids[0] = 863


//  Id pregunta: 8187 Año de creación de pregunta: 2011
 questions[1]= "2)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[1]= new Array();
 choices[1][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[1][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[1][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[1][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[1] = 2;
 units[1] = ['60', '61'];
 blocks[1] = ['B2'];
 comments[1] = "Id Pregunta: 8187. Examen TIC A2 2010 interna";
 preguntaids[1] = 8187


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[2]= new Array();
 choices[2][0] = "El Ministro de Econom&iacute;a.";
 choices[2][1] = "El Gobierno.";
 choices[2][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[2][3] = "El Presidente del Gobierno.";
 answers[2] = 1;
 units[2] = ['11'];
 blocks[2] = ['A2'];
 comments[2] = "Id Pregunta: 288. Presupuestos generales";
 preguntaids[2] = 288


//  Id pregunta: 9552 Año de creación de pregunta: 2014
 questions[3]= "4)  &iquest;Es posible denegar temporalmente una transferencia internacional de datos personales previamente autorizada?";
 choices[3]= new Array();
 choices[3][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[3][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[3][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[3][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[3] = 0;
 units[3] = ['35'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 9552. Art&iacute;culo 70.3 del RD 1720/2007";
 preguntaids[3] = 9552


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes principios NO se garantiza en el art&iacute;culo 9.3 de la Constituci&oacute;n Espa&ntilde;ola de 1978?";
 choices[4]= new Array();
 choices[4][0] = "Jerarqu&iacute;a normativa.";
 choices[4][1] = "Seguridad jur&iacute;dica.";
 choices[4][2] = "Responsabilidad y la interdicci&oacute;n de la arbitrariedad de los poderes p&uacute;blicos.";
 choices[4][3] = "Irretroactividad de las disposiciones sancionadoras favorables o restrictivas de derechos individuales.";
 answers[4] = 3;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 54. Constituci&oacute;n de 1978";
 preguntaids[4] = 54


//  Id pregunta: 2335 Año de creación de pregunta: 2003
 questions[5]= "6)  La Ley Org&aacute;nica 15/1999 establece, en el apartado 2 del art&iacute;culo 22, las condiciones bajo las que las Fuerzas y Cuerpos de Seguridad pueden tratar datos personales con fines policiales sin estar sujetos a la ley:";
 choices[5]= new Array();
 choices[5][0] = "Cuando cuenten con la preceptiva autorizaci&oacute;n del Ministerio del Interior";
 choices[5][1] = "No existen excepciones. Se requiere obligatoriamente el consentimiento expreso del afectado";
 choices[5][2] = "Cuando resulte necesario para la prevenci&oacute;n de un peligro real para la seguridad p&uacute;blica o para la represi&oacute;n de infracciones penales";
 choices[5][3] = "Cuando lo autorice un juez";
 answers[5] = 2;
 units[5] = ['35'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2335. ";
 preguntaids[5] = 2335


//  Id pregunta: 4892 Año de creación de pregunta: 2002
 questions[6]= "7)  La ITU-T ha recogido en diversas recomendaciones la forma en que un terminal as&iacute;ncrono puede acceder a una red de conmutaci&oacute;n de paquetes. El conjunto de estas normas se conoce como la triple X. Indique cual de las siguientes opciones es verdadera:";
 choices[6]= new Array();
 choices[6][0] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[6][1] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica la forma el terminal de paquetes remoto puede controlar los par&aacute;metros del Ensamblador\Desensamblador de Paquetes; la X.28 que indica las facilidades del Ensamblador\Desensamblado";
 choices[6][2] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.3 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal con el Ensamblador\Desensamblador de Paquetes; y la X.29";
 choices[6][3] = "La triple X est&aacute; formada por las siguientes recomendaciones: X.25 que indica las facilidades del Ensamblador\Desensamblador de Paquetes; la X.28 que determina la forma en que se comunica el terminal  con el Ensamblador\Desensamblador de Paquetes; y la X.7";
 answers[6] = 2;
 units[6] = ['112'];
 blocks[6] = ['B4'];
 comments[6] = "Id Pregunta: 4892. ";
 preguntaids[6] = 4892


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[7]= new Array();
 choices[7][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[7][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[7][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[7][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[7] = 3;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 27. Constituci&oacute;n de 1978";
 preguntaids[7] = 27


//  Id pregunta: 1451 Año de creación de pregunta: 2016
 questions[8]= "9)  La resistencia, excusa o negativa a la actuaci&oacute;n inspectora de los &oacute;rganos facultados para llevarla a cabo con arreglo a la LSSI art&iacute;culo 38 constituye una infracci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Leve.";
 choices[8][1] = "Grave.";
 choices[8][2] = "Muy grave.";
 choices[8][3] = "No constituye infracci&oacute;n.";
 answers[8] = 1;
 units[8] = ['19'];
 blocks[8] = ['A4'];
 comments[8] = "Id Pregunta: 1451. ";
 preguntaids[8] = 1451


//  Id pregunta: 8202 Año de creación de pregunta: 2011
 questions[9]= "10)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[9]= new Array();
 choices[9][0] = "Perfil Jefe de Proyecto.";
 choices[9][1] = "Perfil Consultor.";
 choices[9][2] = "Perfil Analista.";
 choices[9][3] = "Perfil Programador.";
 answers[9] = 0;
 units[9] = ['91'];
 blocks[9] = ['B3'];
 comments[9] = "Id Pregunta: 8202. Examen TIC A2 2010 interna";
 preguntaids[9] = 8202


//  Id pregunta: 2924 Año de creación de pregunta: 2002
 questions[10]= "11)  La arquitectura UMA seg&uacute;n Silicon Graphics:";
 choices[10]= new Array();
 choices[10][0] = "Utiliza un bus AGP 16x";
 choices[10][1] = "Utiliza una &uacute;nica memoria para todos los dispositivos, sin que estos tengan memorias locales";
 choices[10][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[10][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[10] = 1;
 units[10] = ['49'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 2924. ";
 preguntaids[10] = 2924


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[11]= "12)  El pacto fiscal europeo de 2012 incluye:";
 choices[11]= new Array();
 choices[11][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[11][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[11][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[11][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[11] = 0;
 units[11] = ['5'];
 blocks[11] = ['A1'];
 comments[11] = "Id Pregunta: 102. Uni&oacute;n Europea";
 preguntaids[11] = 102


//  Id pregunta: 4089 Año de creación de pregunta: 2003
 questions[12]= "13)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[12]= new Array();
 choices[12][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[12][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[12][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[12][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[12] = 1;
 units[12] = ['91'];
 blocks[12] = ['B3'];
 comments[12] = "Id Pregunta: 4089. ";
 preguntaids[12] = 4089


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n M&eacute;trica v3, la figura de 'usuario experto' se engloba dentro del perfil:";
 choices[13]= new Array();
 choices[13][0] = "Jefe de Proyecto.";
 choices[13][1] = "Consultor.";
 choices[13][2] = "Directivo.";
 choices[13][3] = "Analista.";
 answers[13] = 2;
 units[13] = ['91'];
 blocks[13] = ['B3'];
 comments[13] = "Id Pregunta: 826. AGE A2 2015";
 preguntaids[13] = 826


//  Id pregunta: 2576 Año de creación de pregunta: 2002
 questions[14]= "15)  A la vista de la tabla siguiente: VENTAS (COD_PIEZA, COD_ALMACEN, CANTIDAD, FECHA, DIRECCION_ALMACEN), donde la clave principal es  COD_PIEZA y COD_ALMACEN, podemos decir que:";
 choices[14]= new Array();
 choices[14][0] = "Cumple con la segunda forma normal";
 choices[14][1] = "Cumple con la segunda pero no con la tercera forma normal";
 choices[14][2] = "Cumple hasta la tercera forma normal pero no con la cuarta formal";
 choices[14][3] = "No cumple la segunda forma normal";
 answers[14] = 3;
 units[14] = ['61'];
 blocks[14] = ['B2'];
 comments[14] = "Id Pregunta: 2576. ";
 preguntaids[14] = 2576


//  Id pregunta: 6654 Año de creación de pregunta: 2009
 questions[15]= "16)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[15]= new Array();
 choices[15][0] = "Los procedimientos anulados";
 choices[15][1] = "Los anuncios de licitaci&oacute;n";
 choices[15][2] = "La adjudicaci&oacute;n de los contratos";
 choices[15][3] = "Las licitaciones abiertas";
 answers[15] = 2;
 units[15] = ['37'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 6654. ";
 preguntaids[15] = 6654


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[16]= "17)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[16]= new Array();
 choices[16][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[16][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[16][2] = "La protecci&oacute;n del medio ambiente.";
 choices[16][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[16] = 0;
 units[16] = ['22'];
 blocks[16] = ['A4'];
 comments[16] = "Id Pregunta: 498. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[16] = 498


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[17]= "18)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[17]= new Array();
 choices[17][0] = "Municipios, provincias y CCAA.";
 choices[17][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[17][2] = "En CCAA, 50 provincias y municipios.";
 choices[17][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[17] = 2;
 units[17] = ['1'];
 blocks[17] = ['A1'];
 comments[17] = "Id Pregunta: 85. Constituci&oacute;n de 1978";
 preguntaids[17] = 85


//  Id pregunta: 8757 Año de creación de pregunta: 2013
 questions[18]= "19)  &iquest;Qu&eacute; es una auditor&iacute;a de regularidad?";
 choices[18]= new Array();
 choices[18][0] = "Es la que eval&uacute;a la eficacia en la consecuci&oacute;n de objetivos y la eficiencia en los recursos empleados para alcanzarlos.";
 choices[18][1] = "Es aquella orientada a verificar el cumplimiento de la normativa aplicable.";
 choices[18][2] = "Es la especializada en descubrir fraudes y delitos.";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = 1;
 units[18] = ['36'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 8757. ";
 preguntaids[18] = 8757


//  Id pregunta: 4260 Año de creación de pregunta: 2006
 questions[19]= "20)  &iquest;La agudeza visual del hombre es capaz de identificar pixeles de?";
 choices[19]= new Array();
 choices[19][0] = "50&micro;m";
 choices[19][1] = "10&micro;m";
 choices[19][2] = "100&micro;m";
 choices[19][3] = "70&micro;m";
 answers[19] = 2;
 units[19] = ['80'];
 blocks[19] = ['B2'];
 comments[19] = "Id Pregunta: 4260. ";
 preguntaids[19] = 4260


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[20]= "21)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[20]= new Array();
 choices[20][0] = "solo mediante ley";
 choices[20][1] = "reglamentariamente";
 choices[20][2] = "mediante ley o reglamentariamente";
 choices[20][3] = "ninguna es correcta";
 answers[20] = 0;
 units[20] = ['7'];
 blocks[20] = ['A2'];
 comments[20] = "Id Pregunta: 212. Ley 39/2015";
 preguntaids[20] = 212


//  Id pregunta: 7120 Año de creación de pregunta: 2010
 questions[21]= "22)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[21]= new Array();
 choices[21][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[21][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[21][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[21][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[21] = 3;
 units[21] = ['7'];
 blocks[21] = ['A2'];
 comments[21] = "Id Pregunta: 7120. Art&iacute;culo 6 RD 1671/2009";
 preguntaids[21] = 7120


//  Id pregunta: 9254 Año de creación de pregunta: 2014
 questions[22]= "23)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[22]= new Array();
 choices[22][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[22][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[22][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[22][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[22] = 0;
 units[22] = ['91'];
 blocks[22] = ['B3'];
 comments[22] = "Id Pregunta: 9254. Examen TIC A2 2013";
 preguntaids[22] = 9254


//  Id pregunta: 10122 Año de creación de pregunta: 2015
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as es considerada como una metodolog&iacute;a &aacute;gil?";
 choices[23]= new Array();
 choices[23][0] = "RAD.";
 choices[23][1] = "OpenUP.";
 choices[23][2] = "SSADM.";
 choices[23][3] = "UP.";
 answers[23] = 1;
 units[23] = ['84'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 10122. Examen TIC A1 2014";
 preguntaids[23] = 10122


//  Id pregunta: 939 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto al concepto de Web m&oacute;vil, se&ntilde;ale la respuesta falsa:";
 choices[24]= new Array();
 choices[24][0] = "En general se deben desarrollar sitios web espec&iacute;ficos para dispositivos m&oacute;viles con informaci&oacute;n y con servicios y aplicaciones web espec&iacute;ficas.";
 choices[24][1] = "El dise&ntilde;o de un sitio debe contemplar este tipo de plataformas para crear un sitio accesible y usable que se adapte din&aacute;micamente a las necesidades del usuario, a las capacidades del dispositivo y a las condiciones del entorno.";
 choices[24][2] = "Para ello, es necesaria una infraestructura global basada en est&aacute;ndares que permitan la interoperabilidad y aprovechar las capacidades de la movilidad y de la web 2.0.&nbsp;&nbsp;";
 choices[24][3] = "Poner a disposici&oacute;n la versi&oacute;n Web M&oacute;vil para los principales sistemas operativos y navegadores:Chrome y Safari.";
 answers[24] = 3;
 units[24] = ['125'];
 blocks[24] = ['B4'];
 comments[24] = "Id Pregunta: 939. Gu&iacute;a de Comunicaci&oacute;n Digital de la AGE";
 preguntaids[24] = 939


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[25]= new Array();
 choices[25][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[25][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[25][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[25][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[25] = 0;
 units[25] = ['1'];
 blocks[25] = ['A1'];
 comments[25] = "Id Pregunta: 6. Constituci&oacute;n de 1978";
 preguntaids[25] = 6


//  Id pregunta: 8062 Año de creación de pregunta: 2011
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[26]= new Array();
 choices[26][0] = "Responsable del fichero";
 choices[26][1] = "Responsable de la informaci&oacute;n";
 choices[26][2] = "Responsable del servicio";
 choices[26][3] = "Responsable de seguridad";
 answers[26] = 0;
 units[26] = ['46'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 8062. El responsable del fichero es un concepto relacionado con la LOPD.";
 preguntaids[26] = 8062


//  Id pregunta: 1453 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la LSSI en su art&iacute;culo 40, la cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a ciertos criterios, cual es falso:";
 choices[27]= new Array();
 choices[27][0] = "La existencia de intencionalidad.";
 choices[27][1] = "Plazo de tiempo durante el que se haya venido cometiendo la infracci&oacute;n.";
 choices[27][2] = "La cantidad de personas involucradas en la infracci&oacute;n.";
 choices[27][3] = "Los beneficios obtenidos por la infracci&oacute;n.";
 answers[27] = 2;
 units[27] = ['19'];
 blocks[27] = ['A4'];
 comments[27] = "Id Pregunta: 1453. ";
 preguntaids[27] = 1453


//  Id pregunta: 4885 Año de creación de pregunta: 2002
 questions[28]= "29)  La f&oacute;rmula de Shannon para la capacidad de un canal es (B es el ancho de banda, S la potencia de la se&ntilde;al y N la potencia del ruido):";
 choices[28]= new Array();
 choices[28][0] = "R[bps] = B[Hz] &middot; log2(1 + S/N)";
 choices[28][1] = "R[bps] = B[Hz] &middot; ln(1 + S/N)";
 choices[28][2] = "R[bps] = B[Hz] &middot; log10(1 + S/N)";
 choices[28][3] = "R[bps] = B[kHz] &middot; log2(S/N)";
 answers[28] = 0;
 units[28] = ['104'];
 blocks[28] = ['B4'];
 comments[28] = "Id Pregunta: 4885. ";
 preguntaids[28] = 4885


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[29]= "30)  Son bases de datos NoSQL:";
 choices[29]= new Array();
 choices[29][0] = "MongoDB y Maria DB";
 choices[29][1] = "HBase y Dynamo";
 choices[29][2] = "MariaDB, Cassandra y BigTable";
 choices[29][3] = "La A) y la C)";
 answers[29] = 1;
 units[29] = ['73'];
 blocks[29] = ['B2'];
 comments[29] = "Id Pregunta: 744. Big Data y NoSQL";
 preguntaids[29] = 744


//  Id pregunta: 1942 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[30]= new Array();
 choices[30][0] = "Internet Information Server";
 choices[30][1] = "Weblogic";
 choices[30][2] = "Websphere";
 choices[30][3] = "Apache";
 answers[30] = 3;
 units[30] = ['66'];
 blocks[30] = ['B2'];
 comments[30] = "Id Pregunta: 1942. ";
 preguntaids[30] = 1942


//  Id pregunta: 6600 Año de creación de pregunta: 2003
 questions[31]= "32)  &iquest;Cual de las siguientes puede ser utilizada para videoconferencia?";
 choices[31]= new Array();
 choices[31][0] = "ATM";
 choices[31][1] = "H.323";
 choices[31][2] = "VRVS";
 choices[31][3] = "Todas las anteriores";
 answers[31] = 3;
 units[31] = ['122'];
 blocks[31] = ['B4'];
 comments[31] = "Id Pregunta: 6600. ";
 preguntaids[31] = 6600


//  Id pregunta: 866 Año de creación de pregunta: 2016
 questions[32]= "33)  ITIL v3, define:";
 choices[32]= new Array();
 choices[32][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[32][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[32][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[32][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[32] = 0;
 units[32] = ['101'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 866. Junta de Extremadura A1 2015";
 preguntaids[32] = 866


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[33]= "34)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[33]= new Array();
 choices[33][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[33][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[33][2] = "Son refrendados por el Rey.";
 choices[33][3] = "Son convocados por el Presidente del Gobierno.";
 answers[33] = 0;
 units[33] = ['1'];
 blocks[33] = ['A1'];
 comments[33] = "Id Pregunta: 44. Constituci&oacute;n de 1978";
 preguntaids[33] = 44


//  Id pregunta: 9796 Año de creación de pregunta: 2015
 questions[34]= "35)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[34]= new Array();
 choices[34][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[34][1] = "Informado, sostenible y solidario.";
 choices[34][2] = "Inteligente, sostenible e integrador.";
 choices[34][3] = "Arm&oacute;nico, estable y social.";
 answers[34] = 2;
 units[34] = ['19'];
 blocks[34] = ['A4'];
 comments[34] = "Id Pregunta: 9796. ";
 preguntaids[34] = 9796


//  Id pregunta: 7570 Año de creación de pregunta: 2010
 questions[35]= "36)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema a otro usuario?";
 choices[35]= new Array();
 choices[35][0] = "CONNECT y RESOURCE.";
 choices[35][1] = "DBA.";
 choices[35][2] = "GRANT ANY ROLE.";
 choices[35][3] = "SELECT ANY TABLE.";
 answers[35] = 2;
 units[35] = ['61'];
 blocks[35] = ['B2'];
 comments[35] = "Id Pregunta: 7570. Map 2006";
 preguntaids[35] = 7570


//  Id pregunta: 6888 Año de creación de pregunta: 2010
 questions[36]= "37)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[36]= new Array();
 choices[36][0] = "Todos.";
 choices[36][1] = "Ninguno.";
 choices[36][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[36][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[36] = 2;
 units[36] = ['19'];
 blocks[36] = ['A4'];
 comments[36] = "Id Pregunta: 6888. TIC A 2009";
 preguntaids[36] = 6888


//  Id pregunta: 1414 Año de creación de pregunta: 2016
 questions[37]= "38)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[37]= new Array();
 choices[37][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero solo visible por root.";
 choices[37][1] = "/etc /password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos.";
 choices[37][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible solo por root.";
 choices[37][3] = "/etc /passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios.";
 answers[37] = 2;
 units[37] = ['57'];
 blocks[37] = ['B2'];
 comments[37] = "Id Pregunta: 1414. ";
 preguntaids[37] = 1414


//  Id pregunta: 2558 Año de creación de pregunta: 2004
 questions[38]= "39)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos, en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[38]= new Array();
 choices[38][0] = "1FN";
 choices[38][1] = "2FN";
 choices[38][2] = "3FN";
 choices[38][3] = "Boyce-Cood";
 answers[38] = 1;
 units[38] = ['61'];
 blocks[38] = ['B2'];
 comments[38] = "Id Pregunta: 2558. Examen Seg-Social A 2004";
 preguntaids[38] = 2558


//  Id pregunta: 6839 Año de creación de pregunta: 2010
 questions[39]= "40)  NO figura entre los objetivos de las normas y procedimientos de seguridad:";
 choices[39]= new Array();
 choices[39][0] = "La adecuaci&oacute;n a aspectos de accesibilidad, usabilidad y utilizaci&oacute;n de lenguas cooficiales.";
 choices[39][1] = "La confidencialidad, disponibilidad e integridad de la informaci&oacute;n.";
 choices[39][2] = "La necesidad de controles de acceso.";
 choices[39][3] = "La adecuaci&oacute;n a normativa de la Agencia de Protecci&oacute;n de Datos.";
 answers[39] = 0;
 units[39] = ['87'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 6839. TIC A 2009";
 preguntaids[39] = 6839


//  Id pregunta: 6544 Año de creación de pregunta: 2003
 questions[40]= "41)  Seg&uacute;n el RD 1720/2007, cual de los siguientes NO es un requisito del documento de seguridad, para el nivel b&aacute;sico:";
 choices[40]= new Array();
 choices[40][0] = "Ambito de aplicaci&oacute;n del documento con especificacion detallada de los recursos protegidos.";
 choices[40][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[40][2] = "La identificacion del responsable o responsables de seguridad.";
 choices[40][3] = "Todos los son.";
 answers[40] = 2;
 units[40] = ['35'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 6544. ";
 preguntaids[40] = 6544


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[41]= "42)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[41]= new Array();
 choices[41][0] = "623";
 choices[41][1] = "649";
 choices[41][2] = "626";
 choices[41][3] = "565";
 answers[41] = 2;
 units[41] = ['5'];
 blocks[41] = ['A1'];
 comments[41] = "Id Pregunta: 161. Uni&oacute;n Europea";
 preguntaids[41] = 161


//  Id pregunta: 4606 Año de creación de pregunta: 2002
 questions[42]= "43)  &iquest;Qu&eacute; es FTAM (File Transfer Access and Management)?:";
 choices[42]= new Array();
 choices[42][0] = "Un protocolo del nivel de presentaci&oacute;n para gesti&oacute;n de ficheros";
 choices[42][1] = "Una aplicaci&oacute;n para transferencia y compartici&oacute;n de archivos";
 choices[42][2] = "Una aplicaci&oacute;n para emulaci&oacute;n de terminales remotos";
 choices[42][3] = "Un protocolo de la capa TCP/IP para compartir archivos";
 answers[42] = 1;
 units[42] = ['105'];
 blocks[42] = ['B4'];
 comments[42] = "Id Pregunta: 4606. ";
 preguntaids[42] = 4606


//  Id pregunta: 3126 Año de creación de pregunta: 2002
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un formato de descripci&oacute;n de p&aacute;ginas?:";
 choices[43]= new Array();
 choices[43][0] = "EPS";
 choices[43][1] = "RIP";
 choices[43][2] = "PDF";
 choices[43][3] = "PCL";
 answers[43] = 1;
 units[43] = ['80'];
 blocks[43] = ['B2'];
 comments[43] = "Id Pregunta: 3126. ";
 preguntaids[43] = 3126


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[44]= new Array();
 choices[44][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[44][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[44][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[44][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[44] = 0;
 units[44] = ['22'];
 blocks[44] = ['A4'];
 comments[44] = "Id Pregunta: 497. &Eacute;tica p&uacute;blica y transparencia";
 preguntaids[44] = 497


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[45]= new Array();
 choices[45][0] = "absoluta de las Cortes Generales.";
 choices[45][1] = "absoluta del Congreso de los Diputados.";
 choices[45][2] = "simple de las Cortes Generales.";
 choices[45][3] = "simple del Congreso de los Diputados.";
 answers[45] = 3;
 units[45] = ['1'];
 blocks[45] = ['A1'];
 comments[45] = "Id Pregunta: 1. Constituci&oacute;n de 1978";
 preguntaids[45] = 1


//  Id pregunta: 6153 Año de creación de pregunta: 2003
 questions[46]= "47)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public Key Infrastructures)? :";
 choices[46]= new Array();
 choices[46][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[46][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[46][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;n permitidas para dicho certificado";
 choices[46][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[46] = 3;
 units[46] = ['77', '78'];
 blocks[46] = ['B2'];
 comments[46] = "Id Pregunta: 6153. Examen TIC A1 MAP 2007";
 preguntaids[46] = 6153


//  Id pregunta: 3061 Año de creación de pregunta: 2002
 questions[47]= "48)  Si un disco tiene 7 pistas por cilindro y la capacidad  de cada  pista es de 2000 caracteres, para copiar una cinta que contiene 300 registros de 100 caracteres cada uno, &iquest;cu&aacute;ntos cilindros har&iacute;an falta?:";
 choices[47]= new Array();
 choices[47][0] = "3 cilindros";
 choices[47][1] = "2 cilindros";
 choices[47][2] = "4 cilindros";
 choices[47][3] = "5 cilindros";
 answers[47] = 0;
 units[47] = ['53'];
 blocks[47] = ['B2'];
 comments[47] = "Id Pregunta: 3061. ";
 preguntaids[47] = 3061


//  Id pregunta: 6735 Año de creación de pregunta: 2009
 questions[48]= "49)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[48]= new Array();
 choices[48][0] = "Puntuaciones normalizadas";
 choices[48][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[48][2] = "Coeficiente de concordancia";
 choices[48][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[48] = 2;
 units[48] = ['38'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 6735. MAP 2008 A1";
 preguntaids[48] = 6735


//  Id pregunta: 3051 Año de creación de pregunta: 2002
 questions[49]= "50)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[49]= new Array();
 choices[49][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[49][1] = "Es muy cara de dise&ntilde;ar";
 choices[49][2] = "Es reprogramable f&aacute;cilmente";
 choices[49][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[49] = 2;
 units[49] = ['52'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 3051. ";
 preguntaids[49] = 3051


//  Id pregunta: 4013 Año de creación de pregunta: 2002
 questions[50]= "51)  Para evaluar diferentes sistemas de recuperaci&oacute;n de informaci&oacute;n, &iquest;qu&eacute; par&aacute;metros suelen analizarse?:";
 choices[50]= new Array();
 choices[50][0] = "&Iacute;ndice de retorno e &iacute;ndice de precisi&oacute;n";
 choices[50][1] = "&Iacute;ndice de estimaci&oacute;n cuantificable";
 choices[50][2] = "&Iacute;ndice de ajuste de material devuelto";
 choices[50][3] = "N&uacute;mero de referencias correctas";
 answers[50] = 0;
 units[50] = ['100'];
 blocks[50] = ['B3'];
 comments[50] = "Id Pregunta: 4013. ";
 preguntaids[50] = 4013


//  Id pregunta: 8742 Año de creación de pregunta: 2013
 questions[51]= "52)  &iquest;En qu&eacute; se diferencia el Plan de Continuidad de Negocio y el Plan de Recuperaci&oacute;n ante Desastres?";
 choices[51]= new Array();
 choices[51][0] = "No existe ninguna diferencia, son t&eacute;rminos equivalentes.";
 choices[51][1] = "El Plan de Continuidad de Negocio se centra en la parte reactiva de las TIC mientras que el de Recuperaci&oacute;n ante Desastres afecta a todos los departamentos de la organizaci&oacute;n.";
 choices[51][2] = "El Plan de Recuperaci&oacute;n ante Desastres se centra en la parte reactiva y es un subconjunto del Plan de Continuidad de Negocio.";
 choices[51][3] = "Ninguna de las anteriores.";
 answers[51] = 2;
 units[51] = ['45'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 8742. ";
 preguntaids[51] = 8742


//  Id pregunta: 1774 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el art. 149.3 de la Constituci&oacute;n Espa&ntilde;ola, el derecho estatal ser&aacute; supletorio del derecho de las Comunidades Aut&oacute;nomas:";
 choices[52]= new Array();
 choices[52][0] = "En lo no asumido por &eacute;stas.";
 choices[52][1] = "En todo caso.";
 choices[52][2] = "En lo no atribuido a &eacute;stas de modo expreso.";
 choices[52][3] = "Seg&uacute;n lo dispongan sus respectivos Estatutos.";
 answers[52] = 1;
 units[52] = ['3'];
 blocks[52] = ['A1'];
 comments[52] = "Id Pregunta: 1774. ";
 preguntaids[52] = 1774


//  Id pregunta: 7559 Año de creación de pregunta: 2010
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &laquo;Personas&raquo; en el modelo EFQM?";
 choices[53]= new Array();
 choices[53][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos.";
 choices[53][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n.";
 choices[53][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n.";
 choices[53][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n.";
 answers[53] = 2;
 units[53] = ['98'];
 blocks[53] = ['B3'];
 comments[53] = "Id Pregunta: 7559. Map 2005";
 preguntaids[53] = 7559


//  Id pregunta: 9889 Año de creación de pregunta: 2015
 questions[54]= "55)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[54]= new Array();
 choices[54][0] = "T&iacute;tulo I";
 choices[54][1] = "T&iacute;tulo II";
 choices[54][2] = "T&iacute;tulo III";
 choices[54][3] = "T&iacute;tulo IV";
 answers[54] = 1;
 units[54] = ['7', '19'];
 blocks[54] = ['A2', 'A4'];
 comments[54] = "Id Pregunta: 9889. ";
 preguntaids[54] = 9889


//  Id pregunta: 9685 Año de creación de pregunta: 2014
 questions[55]= "56)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[55]= new Array();
 choices[55][0] = "&lt;!DOCTYPE html&gt;";
 choices[55][1] = "&lt;!DOCTYPE html5&gt;";
 choices[55][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[55][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[55] = 0;
 units[55] = ['74'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 9685. ";
 preguntaids[55] = 9685


//  Id pregunta: 3807 Año de creación de pregunta: 2002
 questions[56]= "57)  En el modelo de estimaci&oacute;n de costes de desarrollo de software (COCOMO) la evaluaci&oacute;n se hace en funci&oacute;n de lo que se conoce como DSI (Delivered Source Instructions). &iquest;Qu&eacute; tipo de instrucciones no se incluyen en este concepto?:";
 choices[56]= new Array();
 choices[56][0] = "Las correspondientes a control de trabajos o procedimientos JCL";
 choices[56][1] = "La de declaraci&oacute;n de datos";
 choices[56][2] = "Las instrucciones de formateo de pantallas";
 choices[56][3] = "Se incluyen todas las anteriores";
 answers[56] = 3;
 units[56] = ['94'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 3807. ";
 preguntaids[56] = 3807


//  Id pregunta: 1450 Año de creación de pregunta: 2016
 questions[57]= "58)  Cu&aacute;l es el objeto de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico (en lo sucesivo LSSI) seg&uacute;n su art&iacute;culo 1:";
 choices[57]= new Array();
 choices[57][0] = "La regulaci&oacute;n del r&eacute;gimen jur&iacute;dico de los servicios ofrecidos solo por correos electr&oacute;nicos y redes sociales.";
 choices[57][1] = "Garantizar y proteger, no solo los servicios de correo electr&oacute;nico sino el soporte f&iacute;sico que almacene dicho servicio.";
 choices[57][2] = "Garantizar y proteger, en lo que concierne al tratamiento de los datos personales, las libertades p&uacute;blicas y los derechos fundamentales de las personas f&iacute;sicas, y especialmente de su honor e intimidad personal y familiar.";
 choices[57][3] = "La regulaci&oacute;n del r&eacute;gimen jur&iacute;dico de los servicios de la sociedad de la informaci&oacute;n y de la contrataci&oacute;n por v&iacute;a electr&oacute;nica.";
 answers[57] = 3;
 units[57] = ['19'];
 blocks[57] = ['A4'];
 comments[57] = "Id Pregunta: 1450. ";
 preguntaids[57] = 1450


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[58]= "59)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[58]= new Array();
 choices[58][0] = "Los cr&eacute;ditos";
 choices[58][1] = "Las obligaciones";
 choices[58][2] = "Los derechos";
 choices[58][3] = "B y C son correctas";
 answers[58] = 3;
 units[58] = ['11'];
 blocks[58] = ['A2'];
 comments[58] = "Id Pregunta: 269. Presupuestos generales";
 preguntaids[58] = 269


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n el est&aacute;ndar IEEE 1219 para el mantenimiento del software, un cambio de tecnolog&iacute;a pertenecer&iacute;a a un tipo de mantenimiento:";
 choices[59]= new Array();
 choices[59][0] = "Preventivo.";
 choices[59][1] = "Correctivo.";
 choices[59][2] = "Perfectivo.";
 choices[59][3] = "Adaptativo.";
 answers[59] = 3;
 units[59] = ['96'];
 blocks[59] = ['B3'];
 comments[59] = "Id Pregunta: 854. AGE A2 2015";
 preguntaids[59] = 854


//  Id pregunta: 5529 Año de creación de pregunta: 2007
 questions[60]= "61)  Un grafo dirigido que tiene un nodo especial desde el cual se puede alcanzar a cualquier otro nodo atravesando un n&uacute;mero finito de arcos de forma &uacute;nica es";
 choices[60]= new Array();
 choices[60][0] = "Un grafo orientado a procesos.";
 choices[60][1] = "Un grafo representado.";
 choices[60][2] = "Una Pila";
 choices[60][3] = "Un &aacute;rbol.";
 answers[60] = 3;
 units[60] = ['100'];
 blocks[60] = ['B3'];
 comments[60] = "Id Pregunta: 5529. ";
 preguntaids[60] = 5529


//  Id pregunta: 1248 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[61]= new Array();
 choices[61][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[61][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[61][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[61][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[61] = 3;
 units[61] = ['117'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 1248. ";
 preguntaids[61] = 1248


//  Id pregunta: 1257 Año de creación de pregunta: 2016
 questions[62]= "63)  A partir de lo dispuesto en la Constituci&oacute;n Espa&ntilde;ola &iquest;c&oacute;mo se denominan las Leyes en las que las Cortes atribuyen a las Comunidades Aut&oacute;nomas facultades para dictar normas legislativas en materias de competencia estatal, fijando los principios, bases y directrices para ello?";
 choices[62]= new Array();
 choices[62][0] = "Leyes de Transferencia.";
 choices[62][1] = "Leyes Marco.";
 choices[62][2] = "Leyes de Bases.";
 choices[62][3] = "Leyes B&aacute;sicas.";
 answers[62] = 1;
 units[62] = ['3'];
 blocks[62] = ['A1'];
 comments[62] = "Id Pregunta: 1257. ";
 preguntaids[62] = 1257


//  Id pregunta: 6749 Año de creación de pregunta: 2009
 questions[63]= "64)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[63]= new Array();
 choices[63][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments)";
 choices[63][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto";
 choices[63][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII";
 choices[63][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;";
 answers[63] = 3;
 units[63] = ['103'];
 blocks[63] = ['B4'];
 comments[63] = "Id Pregunta: 6749. MAP 2008 A1";
 preguntaids[63] = 6749


//  Id pregunta: 8171 Año de creación de pregunta: 2011
 questions[64]= "65)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[64]= new Array();
 choices[64][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[64][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Energia, Turismo y Agenda Digital.";
 choices[64][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[64][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[64] = 0;
 units[64] = ['19'];
 blocks[64] = ['A4'];
 comments[64] = "Id Pregunta: 8171. Examen TIC A2 2010 interna";
 preguntaids[64] = 8171


//  Id pregunta: 10772 Año de creación de pregunta: 2015
 questions[65]= "66)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[65]= new Array();
 choices[65][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[65][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[65][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[65][3] = "Todas las anteriores son falsas";
 answers[65] = 0;
 units[65] = ['35'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 10772. ";
 preguntaids[65] = 10772


//  Id pregunta: 9514 Año de creación de pregunta: 2014
 questions[66]= "67)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[66]= new Array();
 choices[66][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[66][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[66][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[66][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[66] = 1;
 units[66] = ['64'];
 blocks[66] = ['B2'];
 comments[66] = "Id Pregunta: 9514. ";
 preguntaids[66] = 9514


//  Id pregunta: 7485 Año de creación de pregunta: 2010
 questions[67]= "68)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[67]= new Array();
 choices[67][0] = "jpeg, tiff y spp.";
 choices[67][1] = "jpeg, spp y psd.";
 choices[67][2] = "jpeg, spp y tiff.";
 choices[67][3] = "jpeg, gif y png.";
 answers[67] = 3;
 units[67] = ['80'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 7485. Map 2005";
 preguntaids[67] = 7485


//  Id pregunta: 5233 Año de creación de pregunta: 2006
 questions[68]= "69)  De las siguientes tecnolog&iacute;as xDSL, &iquest;cu&aacute;l de ellas puede ser asim&eacute;trica?";
 choices[68]= new Array();
 choices[68][0] = "HDSL";
 choices[68][1] = "SDSL";
 choices[68][2] = "VDSL";
 choices[68][3] = "SHDSL";
 answers[68] = 2;
 units[68] = ['108'];
 blocks[68] = ['B4'];
 comments[68] = "Id Pregunta: 5233. ";
 preguntaids[68] = 5233


//  Id pregunta: 10963 Año de creación de pregunta: 2015
 questions[69]= "70)  &iquest;Qu&eacute; consecuencias tiene la declaraci&oacute;n judicial de existencia de cesi&oacute;n ilegal de trabajadores, en caso de que un trabajador de una empresa externa demande judicialmente y obtenga un pronunciamiento en tal sentido?";
 choices[69]= new Array();
 choices[69][0] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores produce autom&aacute;ticamente la incorporaci&oacute;n del trabajador demandante a la plantilla de la Administraci&oacute;n, como trabajador fijo, manteniendo las condiciones laborales que ten&iacute;a reconocida con la empresa contratista";
 choices[69][1] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores no produce efectos sobre la relaci&oacute;n laboral entre el trabajador que demande y la empresa contratista, sin perjuicio de las responsabilidades disciplinarias y en su caso penales del funcionario responsable de la irregularidad";
 choices[69][2] = "El trabajador podr&aacute; optar por incorporarse a la plantilla de la Administraci&oacute;n, como trabajador indefinido no fijo, y podr&aacute;n derivarse responsabilidades disciplinarias y penales contra el funcionario responsable de la irregularidad, entre otras posibles consecuencias";
 choices[69][3] = "El trabajador continuar&aacute; prestando servicios en la empresa contratista, si bien tendr&aacute; las mismas condiciones, econ&oacute;micas y de horario, mientras dure la contrata con la Administraci&oacute;n, que el funcionario responsable del servicio externalizado";
 answers[69] = 2;
 units[69] = ['37'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 10963. ";
 preguntaids[69] = 10963


//  Id pregunta: 3834 Año de creación de pregunta: 2002
 questions[70]= "71)  En un DFD, se&ntilde;alar aquella situaci&oacute;n que no es correcta:";
 choices[70]= new Array();
 choices[70][0] = "Una entidad externa se relaciona con un proceso mediante uno o varios flujos de datos";
 choices[70][1] = "Un almac&eacute;n se repite en varios niveles de DFDs";
 choices[70][2] = "Dos procesos se pueden comunicar, enviando datos de uno a otro, siempre que lacomunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[70][3] = "Un flujo de datos entra en un proceso que s&oacute;lo realiza la transformaci&oacute;n de dividir el flujo entrante en dos flujos salientes";
 answers[70] = 2;
 units[70] = ['85', '86'];
 blocks[70] = ['B3'];
 comments[70] = "Id Pregunta: 3834. ";
 preguntaids[70] = 3834


//  Id pregunta: 1034 Año de creación de pregunta: 2016
 questions[71]= "72)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[71]= new Array();
 choices[71][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[71][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[71][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[71][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[71] = 1;
 units[71] = ['4', '7', '8', '9'];
 blocks[71] = ['A1', 'A2'];
 comments[71] = "Id Pregunta: 1034. Ley 40/2015";
 preguntaids[71] = 1034


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[72]= "73)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[72]= new Array();
 choices[72][0] = "El Presidente y su gabinete.";
 choices[72][1] = "El Presidente y sus Ministros.";
 choices[72][2] = "El Rey y el Presidente.";
 choices[72][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[72] = 3;
 units[72] = ['1'];
 blocks[72] = ['A1'];
 comments[72] = "Id Pregunta: 84. Constituci&oacute;n de 1978";
 preguntaids[72] = 84


//  Id pregunta: 1359 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada en Java?";
 choices[73]= new Array();
 choices[73][0] = "switch";
 choices[73][1] = "break";
 choices[73][2] = "continue";
 choices[73][3] = "Then";
 answers[73] = 3;
 units[73] = ['64'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 1359. ";
 preguntaids[73] = 1359


//  Id pregunta: 10290 Año de creación de pregunta: 2015
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de Capacidad y Madurez (CMM)?";
 choices[74]= new Array();
 choices[74][0] = "Repetible";
 choices[74][1] = "Verificado";
 choices[74][2] = "Gestionado";
 choices[74][3] = "Optimizado";
 answers[74] = 1;
 units[74] = ['31'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 10290. ";
 preguntaids[74] = 10290


