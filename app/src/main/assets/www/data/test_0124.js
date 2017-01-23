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
//  Id pregunta: 3712 Año de creación de pregunta: 2002
 questions[0]= "1)  &iquest;En qu&eacute; consiste la teor&iacute;a de la Productividad aplicada a la implantaci&oacute;n de la calidad?:";
 choices[0]= new Array();
 choices[0][0] = "Un producto de calidad es m&aacute;s caro de producir";
 choices[0][1] = "Un producto de calidad es m&aacute;s dif&iacute;cil de producir";
 choices[0][2] = "Un producto de calidad es m&aacute;s r&aacute;pido de producir";
 choices[0][3] = "Un producto de calidad es m&aacute;s barato de producir";
 answers[0] = 3;
 units[0] = ['93'];
 blocks[0] = ['B3'];
 comments[0] = "Id Pregunta: 3712. ";
 preguntaids[0] = 3712


//  Id pregunta: 8729 Año de creación de pregunta: 2013
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Tribunal Administrativo Central de recursos contractuales:";
 choices[1]= new Array();
 choices[1][0] = "Fue creado por la ley 34/2010.";
 choices[1][1] = "Est&aacute; adscrito al Ministerio de Justicia.";
 choices[1][2] = "Conoce los recursos especiales en materia de contrataci&oacute;n.";
 choices[1][3] = "Todas son verdaderas.";
 answers[1] = 1;
 units[1] = ['37'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 8729. ";
 preguntaids[1] = 8729


//  Id pregunta: 6167 Año de creación de pregunta: 2003
 questions[2]= "3)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Muy grave";
 choices[2][1] = "Grave";
 choices[2][2] = "Leve";
 choices[2][3] = "No est&aacute; tipificado tal importe";
 answers[2] = 1;
 units[2] = ['19'];
 blocks[2] = ['A4'];
 comments[2] = "Id Pregunta: 6167. Ley 59/2003, art&iacute;culo 32";
 preguntaids[2] = 6167


//  Id pregunta: 7714 Año de creación de pregunta: 2010
 questions[3]= "4)  Seg&uacute;n el est&aacute;ndar ISO 7816 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientes contactos se utiliza para la se&ntilde;al de reloj?";
 choices[3]= new Array();
 choices[3][0] = "C2.";
 choices[3][1] = "C3.";
 choices[3][2] = "C5.";
 choices[3][3] = "C6.";
 answers[3] = 1;
 units[3] = ['78'];
 blocks[3] = ['B2'];
 comments[3] = "Id Pregunta: 7714. Map 2007";
 preguntaids[3] = 7714


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[4]= new Array();
 choices[4][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[4][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[4][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[4][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[4] = 3;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 27. Constituci&oacute;n de 1978";
 preguntaids[4] = 27


//  Id pregunta: 2816 Año de creación de pregunta: 2002
 questions[5]= "6)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?:";
 choices[5]= new Array();
 choices[5][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica";
 choices[5][1] = "Que todo atributo que represente una relaci&oacute;n, o bien sea nulo, o bien exista en la clave primaria del elemento relacionado";
 choices[5][2] = "Que todo conjunto de operaciones que constituya una unidad, o bien progrese en conjunto, bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[5][3] = "Que se pueda referenciar la totalidad de la base de datos";
 answers[5] = 1;
 units[5] = ['61'];
 blocks[5] = ['B2'];
 comments[5] = "Id Pregunta: 2816. ";
 preguntaids[5] = 2816


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[6]= "7)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[6]= new Array();
 choices[6][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[6][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[6][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[6][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[6] = 1;
 units[6] = ['19'];
 blocks[6] = ['A4'];
 comments[6] = "Id Pregunta: 485. Sociedad de la informaci&oacute;n";
 preguntaids[6] = 485


//  Id pregunta: 5697 Año de creación de pregunta: 2007
 questions[7]= "8)  &iquest;En que est&aacute;ndar se basa la tecnolog&iacute;a WIMAX?";
 choices[7]= new Array();
 choices[7][0] = "IEEE802.16";
 choices[7][1] = "IEEE802.11";
 choices[7][2] = "IEEE802.3";
 choices[7][3] = "IEEE802.2";
 answers[7] = 0;
 units[7] = ['108'];
 blocks[7] = ['B4'];
 comments[7] = "Id Pregunta: 5697. ";
 preguntaids[7] = 5697


//  Id pregunta: 8027 Año de creación de pregunta: 2011
 questions[8]= "9)  El cable UTP (Unshielded Twisted Pair):";
 choices[8]= new Array();
 choices[8][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair).";
 choices[8][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[8][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[8][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[8] = 1;
 units[8] = ['104'];
 blocks[8] = ['B4'];
 comments[8] = "Id Pregunta: 8027. Examen TIC A2 2010";
 preguntaids[8] = 8027


//  Id pregunta: 10047 Año de creación de pregunta: 2015
 questions[9]= "10)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[9]= new Array();
 choices[9][0] = "JSR 342.";
 choices[9][1] = "JSR 366.";
 choices[9][2] = "JSR 324.";
 choices[9][3] = "JSR 224.";
 answers[9] = 0;
 units[9] = ['64'];
 blocks[9] = ['B2'];
 comments[9] = "Id Pregunta: 10047. Examen TIC A2 2014";
 preguntaids[9] = 10047


//  Id pregunta: 3224 Año de creación de pregunta: 2003
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes bloques b&aacute;sicos no forma parte de la Unidad de Control?:";
 choices[10]= new Array();
 choices[10][0] = "Registro de memorizaci&oacute;n del estado presente.";
 choices[10][1] = "Bloque de calculo del pr&oacute;ximo estado.";
 choices[10][2] = "Bloque de calculo de la salida (micro&oacute;rdenes enviadas a la unidad de procesamiento).";
 choices[10][3] = "Bloque temporizador.";
 answers[10] = 3;
 units[10] = ['52'];
 blocks[10] = ['B2'];
 comments[10] = "Id Pregunta: 3224. Junta Andaluc&iacute;a";
 preguntaids[10] = 3224


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[11]= "12)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[11]= new Array();
 choices[11][0] = "2025";
 choices[11][1] = "2023";
 choices[11][2] = "2030";
 choices[11][3] = "2020";
 answers[11] = 3;
 units[11] = ['28'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 545. Estrategia TIC";
 preguntaids[11] = 545


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[12]= new Array();
 choices[12][0] = "El Consejo Europeo.";
 choices[12][1] = "El Parlamento Europeo.";
 choices[12][2] = "El Consejo.";
 choices[12][3] = "La Comisi&oacute;n.";
 answers[12] = 3;
 units[12] = ['5'];
 blocks[12] = ['A1'];
 comments[12] = "Id Pregunta: 184. Uni&oacute;n Europea";
 preguntaids[12] = 184


//  Id pregunta: 1422 Año de creación de pregunta: 2016
 questions[13]= "14)  Nadie podr&aacute; ser privado de sus bienes y derechos seg&uacute;n el art&iacute;culo 33 de la Constituci&oacute;n Espa&ntilde;ola de 1978, salvo por causa justificada:";
 choices[13]= new Array();
 choices[13][0] = "De calamidad p&uacute;blica.";
 choices[13][1] = "De grave riesgo.";
 choices[13][2] = "De utilidad p&uacute;blica o inter&eacute;s social.";
 choices[13][3] = "En cualquiera de las situaciones anteriores.";
 answers[13] = 2;
 units[13] = ['1'];
 blocks[13] = ['A1'];
 comments[13] = "Id Pregunta: 1422. ";
 preguntaids[13] = 1422


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[14]= new Array();
 choices[14][0] = "No, en ning&uacute;n caso.";
 choices[14][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[14][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[14][3] = "Si, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[14] = 3;
 units[14] = ['1'];
 blocks[14] = ['A1'];
 comments[14] = "Id Pregunta: 15. Constituci&oacute;n de 1978";
 preguntaids[14] = 15


//  Id pregunta: 7496 Año de creación de pregunta: 2010
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[15]= new Array();
 choices[15][0] = "Modelo en cascada.";
 choices[15][1] = "Modelo de prototipado.";
 choices[15][2] = "Modelo de transformaci&oacute;n.";
 choices[15][3] = "Modelo en espiral.";
 answers[15] = 3;
 units[15] = ['76'];
 blocks[15] = ['B2'];
 comments[15] = "Id Pregunta: 7496. Map 2005";
 preguntaids[15] = 7496


//  Id pregunta: 927 Año de creación de pregunta: 2016
 questions[16]= "17)  Asterisk es:";
 choices[16]= new Array();
 choices[16][0] = "Una antena parab&oacute;lica de tipo Cassegrain que se caracteriza por llevar un segundo reflector cerca de su foco, el cual refleja la onda radiada desde el dispositivo radiante hacia el reflector en las antenas transmisoras.";
 choices[16][1] = "La evoluci&oacute;n del protocolo de autenticaci&oacute;n Kerberos para sistemas en la nube.";
 choices[16][2] = "Un algoritmo de b&uacute;squeda creado y utilizado por Google.";
 choices[16][3] = "Un framework de software libre (bajo licencia GPL) para controlar y gestionar comunicaciones de cualquier tipo (anal&oacute;gicas, digitales o VoIP).";
 answers[16] = 3;
 units[16] = ['122'];
 blocks[16] = ['B4'];
 comments[16] = "Id Pregunta: 927. AGE A2 2015";
 preguntaids[16] = 927


//  Id pregunta: 10703 Año de creación de pregunta: 2015
 questions[17]= "18)  Indique la FALSA respecto al concepto MapReduce.";
 choices[17]= new Array();
 choices[17][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[17][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[17][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[17][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[17] = 2;
 units[17] = ['73'];
 blocks[17] = ['B2'];
 comments[17] = "Id Pregunta: 10703. ";
 preguntaids[17] = 10703


//  Id pregunta: 3619 Año de creación de pregunta: 2002
 questions[18]= "19)  De las siguientes bases de datos se&ntilde;alar la que no tiene car&aacute;cter documental:";
 choices[18]= new Array();
 choices[18][0] = "KNOSYS";
 choices[18][1] = "STAIRS";
 choices[18][2] = "ADABAS";
 choices[18][3] = "MISTRAL";
 answers[18] = 2;
 units[18] = ['99'];
 blocks[18] = ['B3'];
 comments[18] = "Id Pregunta: 3619. ";
 preguntaids[18] = 3619


//  Id pregunta: 10938 Año de creación de pregunta: 2015
 questions[19]= "20)  La competencia para la imposici&oacute;n de sanciones seg&uacute;n la Ley de Transparencia, corresponder&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el responsable sea un alto cargo de las Administraciones Publicas.";
 choices[19][1] = "Al Consejo de Ministros cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 choices[19][2] = "Al Consejo de Ministros cuando el responsable sea un alto cargo de la Administraci&oacute;n General del Estado.";
 choices[19][3] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 answers[19] = 1;
 units[19] = ['22'];
 blocks[19] = ['A4'];
 comments[19] = "Id Pregunta: 10938. ";
 preguntaids[19] = 10938


//  Id pregunta: 1040 Año de creación de pregunta: 2016
 questions[20]= "21)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[20]= new Array();
 choices[20][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[20][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[20][2] = "A y B son correctas.";
 choices[20][3] = "A y B son incorrectas.";
 answers[20] = 2;
 units[20] = ['4', '7', '8', '9'];
 blocks[20] = ['A1', 'A2'];
 comments[20] = "Id Pregunta: 1040. Ley 40/2015";
 preguntaids[20] = 1040


//  Id pregunta: 2169 Año de creación de pregunta: 2002
 questions[21]= "22)  En las t&eacute;cnicas de negociaci&oacute;n y de resoluci&oacute;n de conflictos, el 'empowerment' consiste en:";
 choices[21]= new Array();
 choices[21][0] = "Potenciar el di&aacute;logo con reuniones peri&oacute;dicas";
 choices[21][1] = "Establecer una pauta a seguir como norma general indiscutible";
 choices[21][2] = "Dar poder a los subordinados para que se impliquen en la organizaci&oacute;n";
 choices[21][3] = "Nada de lo anterior es correcto";
 answers[21] = 2;
 units[21] = ['31'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2169. ";
 preguntaids[21] = 2169


//  Id pregunta: 5603 Año de creación de pregunta: 2007
 questions[22]= "23)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el procedimiento de adjudicaci&oacute;n en el que solo podr&aacute;n participar los empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, hayan sido seleccionados por el &oacute;rgano de contrataci&oacute;n, se llama:";
 choices[22]= new Array();
 choices[22][0] = "Procedimiento Negociado.";
 choices[22][1] = "Procedimiento Restringido.";
 choices[22][2] = "Procedimiento Cerrado";
 choices[22][3] = "Procedimiento Abierto.";
 answers[22] = 1;
 units[22] = ['37'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 5603. ";
 preguntaids[22] = 5603


//  Id pregunta: 1155 Año de creación de pregunta: 2016
 questions[23]= "24)  En teor&iacute;a de colas, el modelo de disciplina de cola denominado RSS se refiere a que:";
 choices[23]= new Array();
 choices[23][0] = "Se atiende primero al cliente que antes haya llegado.";
 choices[23][1] = "Selecciona a los clientes de manera aleatoria, de acuerdo a alg&uacute;n procedimiento de prioridad o a alg&uacute;n otro orden.";
 choices[23][2] = "Sirve a los clientes igualmente, se reparte un espacio de tiempo a cada cliente.";
 choices[23][3] = "Se atiende primero al cliente que ha llegado el &uacute;ltimo.";
 answers[23] = 1;
 units[23] = ['86'];
 blocks[23] = ['B3'];
 comments[23] = "Id Pregunta: 1155. ";
 preguntaids[23] = 1155


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[24]= "25)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[24]= new Array();
 choices[24][0] = "El Presidente del Consejo Europeo.";
 choices[24][1] = "La Comisi&oacute;n.";
 choices[24][2] = "El Consejo.";
 choices[24][3] = "El Parlamento Europeo.";
 answers[24] = 2;
 units[24] = ['5'];
 blocks[24] = ['A1'];
 comments[24] = "Id Pregunta: 148. Uni&oacute;n Europea";
 preguntaids[24] = 148


//  Id pregunta: 3733 Año de creación de pregunta: 2002
 questions[25]= "26)  A la extensi&oacute;n por la cual un programa satisface sus especificaciones y cumple con los requerimientos del usuario se le llama:";
 choices[25]= new Array();
 choices[25][0] = "Correcci&oacute;n";
 choices[25][1] = "Fiabilidad";
 choices[25][2] = "Eficiencia";
 choices[25][3] = "Integridad";
 answers[25] = 0;
 units[25] = ['93'];
 blocks[25] = ['B3'];
 comments[25] = "Id Pregunta: 3733. ";
 preguntaids[25] = 3733


//  Id pregunta: 5492 Año de creación de pregunta: 2007
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes no es un elemento relativo a las pruebas del plan de continuidad de una instalaci&oacute;n inform&aacute;tica?";
 choices[26]= new Array();
 choices[26][0] = "Evaluaci&oacute;n del personal involucrado en el ejercicio.";
 choices[26][1] = "Evaluaci&oacute;n de la coordinaci&oacute;n entre el equipo del plan y los proveedores externos.";
 choices[26][2] = "Evaluaci&oacute;n de la capacidad de recuperaci&oacute;n de procesos y datos vitales.";
 choices[26][3] = "Evaluaci&oacute;n de la posibilidad de establecer un acuerdo rec&iacute;proco de respaldo.";
 answers[26] = 3;
 units[26] = ['45'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 5492. ";
 preguntaids[26] = 5492


//  Id pregunta: 3550 Año de creación de pregunta: 2004
 questions[27]= "28)  La responsabilidad de los analistas, de acuerdo con M&Eacute;TRICA, es:";
 choices[27]= new Array();
 choices[27][0] = "Realizar las entrevistas al usuario";
 choices[27][1] = "Elaborar un cat&aacute;logo detallado de requisitos que permita describir con precisi&oacute;n el sistema de informaci&oacute;n";
 choices[27][2] = "Establecer la plataforma id&oacute;nea hardware/software que debe dar satisfacci&oacute;n a las necesidades";
 choices[27][3] = "Dirigir a los programadores";
 answers[27] = 1;
 units[27] = ['91'];
 blocks[27] = ['B3'];
 comments[27] = "Id Pregunta: 3550. TIC MAP B 2004";
 preguntaids[27] = 3550


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[28]= "29)  Los Reglamentos no se caracterizan por:";
 choices[28]= new Array();
 choices[28][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[28][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[28][2] = "Ser obligatorios.";
 choices[28][3] = "No poseer alcance general.";
 answers[28] = 3;
 units[28] = ['5'];
 blocks[28] = ['A1'];
 comments[28] = "Id Pregunta: 178. Uni&oacute;n Europea";
 preguntaids[28] = 178


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[29]= new Array();
 choices[29][0] = "El estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[29][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[29][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[29][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[29] = 0;
 units[29] = ['1'];
 blocks[29] = ['A1'];
 comments[29] = "Id Pregunta: 8. Constituci&oacute;n de 1978";
 preguntaids[29] = 8


//  Id pregunta: 5335 Año de creación de pregunta: 2006
 questions[30]= "31)  Una aplicaci&oacute;n que se localiza en un servidor con el fin de ofrecer seguridad a la red interna, por lo que ha sido especialmente configurado para la recepci&oacute;n de ataques es un...";
 choices[30]= new Array();
 choices[30][0] = "cortafuegos";
 choices[30][1] = "sonda";
 choices[30][2] = "honeypot";
 choices[30][3] = "basti&oacute;n";
 answers[30] = 3;
 units[30] = ['120'];
 blocks[30] = ['B4'];
 comments[30] = "Id Pregunta: 5335. ";
 preguntaids[30] = 5335


//  Id pregunta: 6176 Año de creación de pregunta: 2003
 questions[31]= "32)  El modelo CMMI:";
 choices[31]= new Array();
 choices[31][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[31][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[31][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[31][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[31] = 2;
 units[31] = ['33'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 6176. Examen TIC A Castilla La Mancha 2007";
 preguntaids[31] = 6176


//  Id pregunta: 4017 Año de creación de pregunta: 2004
 questions[32]= "33)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[32]= new Array();
 choices[32][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n";
 choices[32][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n";
 choices[32][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n";
 choices[32][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n";
 answers[32] = 0;
 units[32] = ['91'];
 blocks[32] = ['B3'];
 comments[32] = "Id Pregunta: 4017. Pregunta Junta Andalucia - A";
 preguntaids[32] = 4017


//  Id pregunta: 8503 Año de creación de pregunta: 2011
 questions[33]= "34)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[33]= new Array();
 choices[33][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[33][1] = "S&oacute;lo se emplea en RDSI.";
 choices[33][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = 0;
 units[33] = ['106', '107'];
 blocks[33] = ['B4'];
 comments[33] = "Id Pregunta: 8503. Teleco Ayto. Madrid 2010";
 preguntaids[33] = 8503


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[34]= new Array();
 choices[34][0] = "Ley Org&aacute;nica.";
 choices[34][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[34][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[34][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[34] = 2;
 units[34] = ['1'];
 blocks[34] = ['A1'];
 comments[34] = "Id Pregunta: 30. Constituci&oacute;n de 1978";
 preguntaids[34] = 30


//  Id pregunta: 1033 Año de creación de pregunta: 2016
 questions[35]= "36)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[35]= new Array();
 choices[35][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[35][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[35][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[35][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[35] = 2;
 units[35] = ['4', '7', '8', '9'];
 blocks[35] = ['A1', 'A2'];
 comments[35] = "Id Pregunta: 1033. Ley 40/2015";
 preguntaids[35] = 1033


//  Id pregunta: 8219 Año de creación de pregunta: 2011
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en M&eacute;trica v3. en el proceso de Construcci&oacute;n del sistema?";
 choices[36]= new Array();
 choices[36][0] = "Carga de Datos al entorno de operaci&oacute;n.";
 choices[36][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[36][2] = "Establecimiento del Acuerdo de Nivel de Servicio.";
 choices[36][3] = "Elaboraci&oacute;n del modelo de datos.";
 answers[36] = 1;
 units[36] = ['91'];
 blocks[36] = ['B3'];
 comments[36] = "Id Pregunta: 8219. Examen TIC A2 2010 interna";
 preguntaids[36] = 8219


//  Id pregunta: 7333 Año de creación de pregunta: 2010
 questions[37]= "38)  Entre los distintos modelos de calidad NO se encuentra:";
 choices[37]= new Array();
 choices[37][0] = "FURPS (Funcionality, Usability, Reliability, Performance, Supportability)";
 choices[37][1] = "McCall";
 choices[37][2] = "EFQM (European Foundation for Quality Management)";
 choices[37][3] = "EQAM (European Quality Assurance Method)";
 answers[37] = 3;
 units[37] = ['93'];
 blocks[37] = ['B3'];
 comments[37] = "Id Pregunta: 7333. ";
 preguntaids[37] = 7333


//  Id pregunta: 1603 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; diagramas de los empleados en UML (Unified Modeling Language) describen el comportamiento din&aacute;mico del sistema mediante el paso de mensajes entre los objetos del mismo?";
 choices[38]= new Array();
 choices[38][0] = "Diagramas de interacci&oacute;n.";
 choices[38][1] = "Diagramas de flujo de datos.";
 choices[38][2] = "Diagramas de casos de uso.";
 choices[38][3] = "Diagramas de estados.";
 answers[38] = 0;
 units[38] = ['86'];
 blocks[38] = ['B3'];
 comments[38] = "Id Pregunta: 1603. ";
 preguntaids[38] = 1603


//  Id pregunta: 7631 Año de creación de pregunta: 2010
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes productos NO es resultado del proceso &laquo;Implantaci&oacute;n y Aceptaci&oacute;n del Sistema&raquo; (IAS) de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[39]= new Array();
 choices[39][0] = "Evaluaci&oacute;n del Resultado de las Pruebas de Integraci&oacute;n.";
 choices[39][1] = "Evaluaci&oacute;n del Resultado de las Pruebas de Implantaci&oacute;n.";
 choices[39][2] = "Acuerdo de Nivel de Servicio.";
 choices[39][3] = "Plan de Mantenimiento.";
 answers[39] = 0;
 units[39] = ['91'];
 blocks[39] = ['B3'];
 comments[39] = "Id Pregunta: 7631. Map 2006";
 preguntaids[39] = 7631


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[40]= "41)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[40]= new Array();
 choices[40][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[40][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[40][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[40][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[40] = 0;
 units[40] = ['1'];
 blocks[40] = ['A1'];
 comments[40] = "Id Pregunta: 69. Constituci&oacute;n de 1978";
 preguntaids[40] = 69


//  Id pregunta: 9541 Año de creación de pregunta: 2014
 questions[41]= "42)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[41]= new Array();
 choices[41][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[41][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[41][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[41][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[41] = 1;
 units[41] = ['35'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 9541. Art&iacute;culo 11.2 d) de la Ley Org&aacute;nica 15/1999";
 preguntaids[41] = 9541


//  Id pregunta: 10788 Año de creación de pregunta: 2015
 questions[42]= "43)  La entrada en vigor de la Ley 39/2015 es:";
 choices[42]= new Array();
 choices[42][0] = "A los seis meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[42][1] = "Al a&ntilde;o de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[42][2] = "A los dieciocho meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[42][3] = "A los dos a&ntilde;os de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[42] = 1;
 units[42] = ['7'];
 blocks[42] = ['A2'];
 comments[42] = "Id Pregunta: 10788. ";
 preguntaids[42] = 10788


//  Id pregunta: 9135 Año de creación de pregunta: 2014
 questions[43]= "44)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[43]= new Array();
 choices[43][0] = "CONECTA-PATRIMONIO";
 choices[43][1] = "PITER";
 choices[43][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[43][3] = "No existe tal aplicaci&oacute;n";
 answers[43] = 2;
 units[43] = ['37'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 9135. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";
 preguntaids[43] = 9135


//  Id pregunta: 5286 Año de creación de pregunta: 2006
 questions[44]= "45)  &iquest;Qu&eacute; tecnolog&iacute;a es util para crear interfaces de usuario?";
 choices[44]= new Array();
 choices[44][0] = "JSF";
 choices[44][1] = "AJAX";
 choices[44][2] = "Ambas son utiles para crear interface de usuario";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = 2;
 units[44] = ['64'];
 blocks[44] = ['B2'];
 comments[44] = "Id Pregunta: 5286. ";
 preguntaids[44] = 5286


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[45]= "46)  Cu&aacute;l de las siguientes afirmaciones sobre MongoDB es CORRECTA:";
 choices[45]= new Array();
 choices[45][0] = "Permite el uso de instrucciones SQL.";
 choices[45][1] = "El equivalente en MongoDB a una tabla de un RDBMS se denomina Documento.";
 choices[45][2] = "Utiliza BSON con formato de serializaci&oacute;n para almacenar los datos.";
 choices[45][3] = "Soporta transacciones sobre m&uacute;ltiples documentos.";
 answers[45] = 2;
 units[45] = ['73'];
 blocks[45] = ['B2'];
 comments[45] = "Id Pregunta: 738. AGE A2 2015";
 preguntaids[45] = 738


//  Id pregunta: 2178 Año de creación de pregunta: 2002
 questions[46]= "47)  En un sistema de informaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "La integraci&oacute;n permite mayor eficiencia conjunta e interrelaci&oacute;n m&aacute;s efectiva de actividades";
 choices[46][1] = "La integraci&oacute;n no presenta vulnerabilidades a incertidumbres por la flexibilidad que ofrece";
 choices[46][2] = "Se debe primar en todo momento la integraci&oacute;n frente a la independencia";
 choices[46][3] = "Se debe primar en todo momento la independencia frente a la integraci&oacute;n";
 answers[46] = 0;
 units[46] = ['24'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2178. ";
 preguntaids[46] = 2178


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[47]= "48)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[47]= new Array();
 choices[47][0] = "Diciembre de 1987.";
 choices[47][1] = "Septiembre de 1989.";
 choices[47][2] = "Octubre de 1990.";
 choices[47][3] = "Noviembre de 1980.";
 answers[47] = 1;
 units[47] = ['5'];
 blocks[47] = ['A1'];
 comments[47] = "Id Pregunta: 156. Uni&oacute;n Europea";
 preguntaids[47] = 156


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[48]= "49)  En 2007, antes de la crisis, la clasificaci&oacute;n de la solvencia espa&ntilde;ola por las agencias de rating era:";
 choices[48]= new Array();
 choices[48][0] = "AA";
 choices[48][1] = "A";
 choices[48][2] = "AAA";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = 2;
 units[48] = ['12'];
 blocks[48] = ['A3'];
 comments[48] = "Id Pregunta: 348. Modelo econ&oacute;mico";
 preguntaids[48] = 348


//  Id pregunta: 5114 Año de creación de pregunta: 2003
 questions[49]= "50)  &iquest;Qu&eacute; es JavaScript?";
 choices[49]= new Array();
 choices[49][0] = "Un lenguaje de validaci&oacute;n de formularios en p&aacute;ginas Web";
 choices[49][1] = "Es una implementaci&oacute;n del ECMA 262";
 choices[49][2] = "Es un lenguaje Java reducido para Internet que sustituye a CGI";
 choices[49][3] = "Es un lenguaje que soporta objetos y funciones, pero no clases de objetos ni herencias entre ellos";
 answers[49] = 3;
 units[49] = ['62'];
 blocks[49] = ['B2'];
 comments[49] = "Id Pregunta: 5114. ";
 preguntaids[49] = 5114


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[50]= "51)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[50]= new Array();
 choices[50][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[50][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[50][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[50][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[50] = 2;
 units[50] = ['14'];
 blocks[50] = ['A3'];
 comments[50] = "Id Pregunta: 408. Pol&iacute;ticas de igualdad";
 preguntaids[50] = 408


//  Id pregunta: 8499 Año de creación de pregunta: 2011
 questions[51]= "52)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[51]= new Array();
 choices[51][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[51][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[51][2] = "Se produce en ambos tipos de fibra.";
 choices[51][3] = "No se produce en la fibra &oacute;ptica";
 answers[51] = 1;
 units[51] = ['104'];
 blocks[51] = ['B4'];
 comments[51] = "Id Pregunta: 8499. Teleco Ayto. Madrid 2010";
 preguntaids[51] = 8499


//  Id pregunta: 6023 Año de creación de pregunta: 2003
 questions[52]= "53)  Dentro de la t&eacute;cnica de desarrollo de sistemas de informaci&oacute;n denominada Diagrama de Interacci&oacute;n, el periodo de tiempo en el cual el objeto se encuentra ejecutando alguna operaci&oacute;n en un diagrama de secuencia se denomina:";
 choices[52]= new Array();
 choices[52][0] = "L&iacute;nea de vida.";
 choices[52][1] = "Foco de control.";
 choices[52][2] = "Tiempo de latencia.";
 choices[52][3] = "Per&iacute;odo de acci&oacute;n.";
 answers[52] = 1;
 units[52] = ['89'];
 blocks[52] = ['B3'];
 comments[52] = "Id Pregunta: 6023. TIC B 2007";
 preguntaids[52] = 6023


//  Id pregunta: 1978 Año de creación de pregunta: 2016
 questions[53]= "54)  NO es un derecho de los ciudadanos frente a la administraci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Formular alegaciones y aportar documentos en cualquier momento del procedimiento, para que sean tenidos en cuenta por el &oacute;rgano competente al redactar la propuesta de resoluci&oacute;n.";
 choices[53][1] = "Identificar las autoridades y el personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[53][2] = "Conocer, en cualquier momento, el estado de la tramitaci&oacute;n de los procedimientos en los que tengan la condici&oacute;n de interesados.";
 choices[53][3] = "Obtener copia de los documentos contenidos en los procedimientos en los que tengan la condici&oacute;n de interesados.";
 answers[53] = 0;
 units[53] = ['7'];
 blocks[53] = ['A2'];
 comments[53] = "Id Pregunta: 1978. ";
 preguntaids[53] = 1978


//  Id pregunta: 4134 Año de creación de pregunta: 2003
 questions[54]= "55)  Misi&oacute;n principal de un Sistema de Recuperaci&oacute;n de Informaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Asistir la b&uacute;squeda de textos en bases de datos relacionales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[54][1] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[54][2] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar todos los documentos o referencias que aparezcan.";
 choices[54][3] = "Asistir la b&uacute;squeda de im&aacute;genes en bases de datos relacionales para localizar todos los documentos o referencias que aparezcan.";
 answers[54] = 1;
 units[54] = ['100'];
 blocks[54] = ['B3'];
 comments[54] = "Id Pregunta: 4134. ";
 preguntaids[54] = 4134


//  Id pregunta: 1547 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;C&oacute;mo se denomina a la conversi&oacute;n impl&iacute;cita de cualquier tipo de valor al tipo objeto en el lenguaje C#?";
 choices[55]= new Array();
 choices[55][0] = "Casting.";
 choices[55][1] = "Boxing.";
 choices[55][2] = "Unboxing.";
 choices[55][3] = "Down-casting.";
 answers[55] = 1;
 units[55] = ['56'];
 blocks[55] = ['B2'];
 comments[55] = "Id Pregunta: 1547. ";
 preguntaids[55] = 1547


//  Id pregunta: 7024 Año de creación de pregunta: 2010
 questions[56]= "57)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[56]= new Array();
 choices[56][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[56][1] = "An&aacute;lisis DAFO";
 choices[56][2] = "Aprendizaje organizativo";
 choices[56][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[56] = 1;
 units[56] = ['83'];
 blocks[56] = ['B3'];
 comments[56] = "Id Pregunta: 7024. ";
 preguntaids[56] = 7024


//  Id pregunta: 7028 Año de creación de pregunta: 2010
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[57]= new Array();
 choices[57][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[57][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[57][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[57][3] = "Todos lo son";
 answers[57] = 3;
 units[57] = ['83'];
 blocks[57] = ['B3'];
 comments[57] = "Id Pregunta: 7028. ";
 preguntaids[57] = 7028


//  Id pregunta: 4210 Año de creación de pregunta: 2006
 questions[58]= "59)  En M&Eacute;TRICA v.3 la seguridad del sistema de informaci&oacute;n se contempla en:";
 choices[58]= new Array();
 choices[58][0] = "La interfaz de Seguridad y en el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[58][1] = "S&oacute;lo en la interfaz de Seguridad.";
 choices[58][2] = "En la Planificaci&oacute;n de Sistemas de Informaci&oacute;n y en el Estudio de Viabilidad del Sistema.";
 choices[58][3] = "No est&aacute; contemplada. A este respecto, M&eacute;trica v.3 remite a la metodolog&iacute;a MAGERIT.";
 answers[58] = 0;
 units[58] = ['91'];
 blocks[58] = ['B3'];
 comments[58] = "Id Pregunta: 4210. ";
 preguntaids[58] = 4210


//  Id pregunta: 3101 Año de creación de pregunta: 2002
 questions[59]= "60)  Una memoria EEPROM:";
 choices[59]= new Array();
 choices[59][0] = "Podemos programarla una &uacute;nica vez, s&oacute;lo cuando est&aacute; nueva";
 choices[59][1] = "Podemos reprogramarla tras borrarla el&eacute;ctricamente";
 choices[59][2] = "Podemos reprogramarla, tras borrarla con rayos UV";
 choices[59][3] = "Ninguna de las anteriores es correcta";
 answers[59] = 1;
 units[59] = ['52'];
 blocks[59] = ['B2'];
 comments[59] = "Id Pregunta: 3101. ";
 preguntaids[59] = 3101


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[60]= "61)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[60]= new Array();
 choices[60][0] = "Decretos Legislativos.";
 choices[60][1] = "Decretos-leyes.";
 choices[60][2] = "Leyes de bases.";
 choices[60][3] = "Reales Decretos del Consejo de Ministros.";
 answers[60] = 0;
 units[60] = ['1'];
 blocks[60] = ['A1'];
 comments[60] = "Id Pregunta: 31. Constituci&oacute;n de 1978";
 preguntaids[60] = 31


//  Id pregunta: 4684 Año de creación de pregunta: 2002
 questions[61]= "62)  El localizador de recursos, URL, tiene como formato general:";
 choices[61]= new Array();
 choices[61][0] = "m&eacute;todo:/servidor[:puerto]//directorio/fichero";
 choices[61][1] = "servidor://m&eacute;todo[:puerto]//directorio/fichero";
 choices[61][2] = "m&eacute;todo://servidor[:puerto]/directorio/fichero";
 choices[61][3] = "m&eacute;todo://servidor[:direcci&oacute;n:puerto]/directorio/fichero";
 answers[61] = 2;
 units[61] = ['103'];
 blocks[61] = ['B4'];
 comments[61] = "Id Pregunta: 4684. ";
 preguntaids[61] = 4684


//  Id pregunta: 3363 Año de creación de pregunta: 2006
 questions[62]= "63)  La arquitectura cliente/servidor:";
 choices[62]= new Array();
 choices[62][0] = "Se conoce tambi&eacute;n como arquitectura de 3 capas o niveles, siendo la tercera una capa situada entre el cliente y el servidor donde reside la l&oacute;gica de negocio";
 choices[62][1] = "Involucra a un solo cliente que se comunica con un solo servidor";
 choices[62][2] = "Es la m&aacute;s adecuada para aplicaciones en continua evoluci&oacute;n y con datos distribuidos";
 choices[62][3] = "Permite la ejecuci&oacute;n de los tratamientos de clientes y servidor en el mismo equipo o en diferentes, indistintamente";
 answers[62] = 3;
 units[62] = ['55'];
 blocks[62] = ['B2'];
 comments[62] = "Id Pregunta: 3363. ";
 preguntaids[62] = 3363


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[63]= "64)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[63]= new Array();
 choices[63][0] = "El Tratado de Roma, 1957.";
 choices[63][1] = "El Acta &Uacute;nica Europea.";
 choices[63][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[63][3] = "Ninguna es correcta.";
 answers[63] = 2;
 units[63] = ['14'];
 blocks[63] = ['A3'];
 comments[63] = "Id Pregunta: 384. Pol&iacute;ticas de igualdad";
 preguntaids[63] = 384


//  Id pregunta: 4012 Año de creación de pregunta: 2002
 questions[64]= "65)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n tienen como objeto fundamental:";
 choices[64]= new Array();
 choices[64][0] = "Recuperaci&oacute;n de bases de datos codasyl  y relacionales";
 choices[64][1] = "An&aacute;lisis documental";
 choices[64][2] = "Restaurar ficheros y bases de datos pseudo relacionales";
 choices[64][3] = "Consultas y modificaciones de bases de datos a trav&eacute;s del lenguaje SQL";
 answers[64] = 1;
 units[64] = ['100'];
 blocks[64] = ['B3'];
 comments[64] = "Id Pregunta: 4012. ";
 preguntaids[64] = 4012


//  Id pregunta: 1976 Año de creación de pregunta: 2016
 questions[65]= "66)  Podr&aacute;n ser objeto de tramitaci&oacute;n urgente regulada en el art. 96 de la Ley de Contratos del Sector P&uacute;blico:";
 choices[65]= new Array();
 choices[65][0] = "Los contratos cuya celebraci&oacute;n responda a una necesidad inaplazable o cuya adjudicaci&oacute;n sea preciso acelerar por razones de inter&eacute;s p&uacute;blico, previa declaraci&oacute;n de urgencia hecha por el &oacute;rgano de contrataci&oacute;n, debidamente motivada.";
 choices[65][1] = "Los contratos en los que la Administraci&oacute;n tenga que actuar de manera inmediata a causa de acontecimientos catastr6ficos, de situaciones que supongan grave peligro o de necesidades que afectan a la defensa nacional.";
 choices[65][2] = "Los contratos de obras sujetos a regulaci&oacute;n armonizada.";
 choices[65][3] = "Ninguna de las respuestas anteriores es correcta,";
 answers[65] = 0;
 units[65] = ['10'];
 blocks[65] = ['A2'];
 comments[65] = "Id Pregunta: 1976. ";
 preguntaids[65] = 1976


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[66]= "67)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[66]= new Array();
 choices[66][0] = "la Administraci&oacute;n General del Estado";
 choices[66][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[66][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[66][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[66] = 3;
 units[66] = ['7'];
 blocks[66] = ['A2'];
 comments[66] = "Id Pregunta: 217. Ley 39/2015";
 preguntaids[66] = 217


//  Id pregunta: 8273 Año de creación de pregunta: 2011
 questions[67]= "68)  En relaci&oacute;n con la tecnolog&iacute;a &quot;grid computing&quot;, se&ntilde;ale la respuesta FALSA:";
 choices[67]= new Array();
 choices[67][0] = "Los nodos no tienen que estar dedicados.";
 choices[67][1] = "Son sistemas homog&eacute;neos (todos los nodos deben ser id&eacute;nticos).";
 choices[67][2] = "Se consigue reducci&oacute;n de costes, no es necesaria disponer de grandes y costosos servidores.";
 choices[67][3] = "La escalabilidad parametrizable es una caracter&iacute;stica muy Importante de esta arquitectura";
 answers[67] = 1;
 units[67] = ['49'];
 blocks[67] = ['B2'];
 comments[67] = "Id Pregunta: 8273. Examen TIC A2 2010 interna";
 preguntaids[67] = 8273


//  Id pregunta: 10249 Año de creación de pregunta: 2015
 questions[68]= "69)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[68]= new Array();
 choices[68][0] = ".PFX";
 choices[68][1] = ".DER";
 choices[68][2] = ".P7B";
 choices[68][3] = "Todos lo son";
 answers[68] = 3;
 units[68] = ['77'];
 blocks[68] = ['B2'];
 comments[68] = "Id Pregunta: 10249. ";
 preguntaids[68] = 10249


//  Id pregunta: 7640 Año de creación de pregunta: 2010
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[69]= new Array();
 choices[69][0] = "Estudio de informaci&oacute;n relevante.";
 choices[69][1] = "Definici&oacute;n de un Plan de Acci&oacute;n.";
 choices[69][2] = "Definici&oacute;n de un Plan de Riesgo.";
 choices[69][3] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 answers[69] = 2;
 units[69] = ['91'];
 blocks[69] = ['B3'];
 comments[69] = "Id Pregunta: 7640. Map 2006";
 preguntaids[69] = 7640


//  Id pregunta: 6552 Año de creación de pregunta: 2003
 questions[70]= "71)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[70]= new Array();
 choices[70][0] = "Servidor de aplicaciones";
 choices[70][1] = "Proxy";
 choices[70][2] = "Servidor LDAP";
 choices[70][3] = "Servidor de base de datos";
 answers[70] = 1;
 units[70] = ['119'];
 blocks[70] = ['B4'];
 comments[70] = "Id Pregunta: 6552. ";
 preguntaids[70] = 6552


//  Id pregunta: 1599 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta. En la actividad &quot;Elaboraci&oacute;n de los Manuales de Usuario&quot; de M&eacute;trica v3:";
 choices[71]= new Array();
 choices[71][0] = "Se genera la documentaci&oacute;n de usuario final conforme a los requisitos definidos en el proceso Estudio de Viabilidad del Sistema";
 choices[71][1] = "Se especifican todas las interfaces entre el sistema y el usuario, tales como formatos de pantallas, di&aacute;logos, formatos de informes y formularios de entrada";
 choices[71][2] = "Se especifica la formaci&oacute;n necesaria para que los usuarios finales sean capaces de utilizar el sistema de forma satisfactoria";
 choices[71][3] = "Se genera la documentaci&oacute;n de usuario final o explotaci&oacute;n conforme a los requisitos definidos en el proceso Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[71] = 3;
 units[71] = ['91'];
 blocks[71] = ['B3'];
 comments[71] = "Id Pregunta: 1599. ";
 preguntaids[71] = 1599


//  Id pregunta: 2476 Año de creación de pregunta: 2002
 questions[72]= "73)  Del &aacute;mbito de la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico quedan excluidos los servicios prestados por:";
 choices[72]= new Array();
 choices[72][0] = "Los notarios y registradores de la propiedad en el ejercicio de sus respectivas funciones privadas";
 choices[72][1] = "Los abogados y procuradores en el ejercicio de sus funciones de representaci&oacute;n y juicio";
 choices[72][2] = "Los notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones privadas";
 choices[72][3] = "Funcionarios del Estado";
 answers[72] = 1;
 units[72] = ['19'];
 blocks[72] = ['A4'];
 comments[72] = "Id Pregunta: 2476. ";
 preguntaids[72] = 2476


//  Id pregunta: 3025 Año de creación de pregunta: 2002
 questions[73]= "74)  Se define como criptosistema asim&eacute;trico lo siguiente:";
 choices[73]= new Array();
 choices[73][0] = "algoritmo basado en clave &uacute;nica";
 choices[73][1] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo una p&uacute;blica y otra privada";
 choices[73][2] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo ambas privadas";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = 1;
 units[73] = ['76'];
 blocks[73] = ['B2'];
 comments[73] = "Id Pregunta: 3025. ";
 preguntaids[73] = 3025


//  Id pregunta: 3056 Año de creación de pregunta: 2002
 questions[74]= "75)  Si comparamos SSL y SET:";
 choices[74]= new Array();
 choices[74][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[74][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[74][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[74][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[74] = 0;
 units[74] = ['10', '75'];
 blocks[74] = ['A2', 'B2'];
 comments[74] = "Id Pregunta: 3056. ";
 preguntaids[74] = 3056


