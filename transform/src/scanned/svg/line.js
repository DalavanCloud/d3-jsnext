{
  "filepath": "/svg/line.js",
  "shared": [],
  "dependencies": [
    "d3_geom_pointX",
    "d3_geom_pointY",
    "d3_true",
    "d3_functor",
    "d3_identity",
    "d3.map",
    "abs"
  ],
  "helpers": [
    "d3_svg_line",
    "d3_svg_lineInterpolators",
    "d3_svg_lineLinear",
    "d3_svg_lineLinearClosed",
    "d3_svg_lineStep",
    "d3_svg_lineStepBefore",
    "d3_svg_lineStepAfter",
    "d3_svg_lineCardinalOpen",
    "d3_svg_lineCardinalClosed",
    "d3_svg_lineCardinal",
    "d3_svg_lineHermite",
    "d3_svg_lineCardinalTangents",
    "d3_svg_lineBasis",
    "d3_svg_lineBasisOpen",
    "d3_svg_lineBasisClosed",
    "d3_svg_lineBundle",
    "d3_svg_lineDot4",
    "d3_svg_lineBasisBezier1",
    "d3_svg_lineBasisBezier2",
    "d3_svg_lineBasisBezier3",
    "d3_svg_lineBasisBezier",
    "d3_svg_lineSlope",
    "d3_svg_lineFiniteDifferences",
    "d3_svg_lineMonotoneTangents",
    "d3_svg_lineMonotone"
  ],
  "exports": [
    "d3.svg.line"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_line"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "projection"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_geom_pointX"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_geom_pointY"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "defined"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_true"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "interpolate"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "interpolateKey"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "interpolate"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "key"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "tension"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0.7,
                    "raw": ".7"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "line"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "data"
                }
              ],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "segments"
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": []
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": []
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "data"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "length"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "d"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "fx"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_functor"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "fy"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_functor"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "y"
                            }
                          ]
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "segment"
                    },
                    "params": [],
                    "defaults": [],
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "segments"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "M",
                                "raw": "\"M\""
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "interpolate"
                                },
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "projection"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "points"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "tension"
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "rest": null,
                    "generator": false,
                    "expression": false
                  },
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "argument": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "n"
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "defined"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "call"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression"
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "data"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "i"
                              }
                            ]
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "points"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "push"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "UnaryExpression",
                                          "operator": "+",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "fx"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "call"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "d"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            ]
                                          },
                                          "prefix": true
                                        },
                                        {
                                          "type": "UnaryExpression",
                                          "operator": "+",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "fy"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "call"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "d"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            ]
                                          },
                                          "prefix": true
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "segment"
                                    },
                                    "arguments": []
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "points"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": []
                                    }
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "segment"
                        },
                        "arguments": []
                      }
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "segments"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "segments"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "join"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
                          }
                        ]
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
                      }
                    }
                  }
                ]
              },
              "rest": null,
              "generator": false,
              "expression": false
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "line"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "x"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "x"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "x"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "line"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "line"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "y"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "y"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "y"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "line"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "line"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "defined"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "defined"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "defined"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "line"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "line"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "interpolate"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "interpolateKey"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "_"
                            },
                            "prefix": true
                          },
                          "right": {
                            "type": "Literal",
                            "value": "function",
                            "raw": "\"function\""
                          }
                        },
                        "consequent": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "interpolateKey"
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "interpolate"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "_"
                              }
                            }
                          }
                        },
                        "alternate": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "interpolateKey"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "interpolate"
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d3_svg_lineInterpolators"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "get"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "_"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_svg_lineLinear"
                                  }
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "key"
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "line"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "line"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "tension"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "tension"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "tension"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "line"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "line"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "svg"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "line"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_line"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_identity"
                      }
                    ]
                  }
                }
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false
          }
        }
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_lineInterpolators"
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "name": "d3"
                },
                "property": {
                  "type": "Identifier",
                  "name": "map"
                }
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "linear",
                        "raw": "\"linear\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineLinear"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "linear-closed",
                        "raw": "\"linear-closed\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineLinearClosed"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "step",
                        "raw": "\"step\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineStep"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "step-before",
                        "raw": "\"step-before\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineStepBefore"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "step-after",
                        "raw": "\"step-after\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineStepAfter"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "basis",
                        "raw": "\"basis\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasis"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "basis-open",
                        "raw": "\"basis-open\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisOpen"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "basis-closed",
                        "raw": "\"basis-closed\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisClosed"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "bundle",
                        "raw": "\"bundle\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineBundle"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "cardinal",
                        "raw": "\"cardinal\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineCardinal"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "cardinal-open",
                        "raw": "\"cardinal-open\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineCardinalOpen"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "cardinal-closed",
                        "raw": "\"cardinal-closed\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineCardinalClosed"
                      },
                      "kind": "init"
                    },
                    {
                      "type": "Property",
                      "key": {
                        "type": "Literal",
                        "value": "monotone",
                        "raw": "\"monotone\""
                      },
                      "value": {
                        "type": "Identifier",
                        "name": "d3_svg_lineMonotone"
                      },
                      "kind": "init"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_svg_lineInterpolators"
            },
            "property": {
              "type": "Identifier",
              "name": "forEach"
            }
          },
          "arguments": [
            {
              "type": "FunctionExpression",
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "name": "key"
                },
                {
                  "type": "Identifier",
                  "name": "value"
                }
              ],
              "defaults": [],
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "value"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "key"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "key"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "value"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "closed"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Literal",
                            "value": {},
                            "raw": "/-closed$/"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "test"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "key"
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "rest": null,
              "generator": false,
              "expression": false
            }
          ]
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineLinear"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "points"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "join"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "L",
                    "raw": "\"L\""
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineLinearClosed"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "points"
                    }
                  ]
                },
                "right": {
                  "type": "Literal",
                  "value": "Z",
                  "raw": "\"Z\""
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineStep"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "Literal",
                        "value": ",",
                        "raw": "\",\""
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "path"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "push"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "H",
                      "raw": "\"H\""
                    },
                    {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "p"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "p"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            }
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": "V",
                      "raw": "\"V\""
                    },
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "n"
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "path"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "push"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "H",
                      "raw": "\"H\""
                    },
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                }
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "join"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineStepBefore"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "Literal",
                        "value": ",",
                        "raw": "\",\""
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "path"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "push"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "V",
                      "raw": "\"V\""
                    },
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "points"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": "H",
                      "raw": "\"H\""
                    },
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "join"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineStepAfter"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "Literal",
                        "value": ",",
                        "raw": "\",\""
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "path"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "push"
                    }
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "H",
                      "raw": "\"H\""
                    },
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "points"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "i"
                          }
                        }
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": "V",
                      "raw": "\"V\""
                    },
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "join"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineCardinalOpen"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          },
          {
            "type": "Identifier",
            "name": "tension"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 4,
                    "raw": "4"
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "points"
                    }
                  ]
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineHermite"
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "points"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "slice"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        ]
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineCardinalTangents"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "points"
                          },
                          {
                            "type": "Identifier",
                            "name": "tension"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineCardinalClosed"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          },
          {
            "type": "Identifier",
            "name": "tension"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "points"
                    }
                  ]
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineHermite"
                    },
                    "arguments": [
                      {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "points"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            ]
                          },
                          {
                            "type": "Identifier",
                            "name": "points"
                          }
                        ]
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineCardinalTangents"
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "points"
                                    },
                                    "property": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "points"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "length"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    }
                                  }
                                ]
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "concat"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "points"
                              },
                              {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "points"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "type": "Identifier",
                            "name": "tension"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineCardinal"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          },
          {
            "type": "Identifier",
            "name": "tension"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "points"
                    }
                  ]
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineHermite"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "points"
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineCardinalTangents"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "points"
                          },
                          {
                            "type": "Identifier",
                            "name": "tension"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineHermite"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          },
          {
            "type": "Identifier",
            "name": "tangents"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "tangents"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                },
                "right": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "tangents"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "tangents"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineLinear"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "points"
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "quad"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "tangents"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "t0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "tangents"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "t"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "t0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "pi"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "quad"
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "path"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Literal",
                                      "value": "Q",
                                      "raw": "\"Q\""
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "p"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "t0"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 3,
                                          "raw": "3"
                                        }
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": ",",
                                    "raw": "\",\""
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "t0"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3"
                                    }
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": ",",
                                "raw": "\",\""
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": ",",
                            "raw": "\",\""
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "p"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "p0"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "pi"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "tangents"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "t"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "tangents"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "p"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "pi"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "argument": {
                        "type": "Identifier",
                        "name": "pi"
                      },
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "path"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "Literal",
                                              "value": "C",
                                              "raw": "\"C\""
                                            },
                                            "right": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "p0"
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
                                                }
                                              },
                                              "right": {
                                                "type": "MemberExpression",
                                                "computed": true,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "t0"
                                                },
                                                "property": {
                                                  "type": "Literal",
                                                  "value": 0,
                                                  "raw": "0"
                                                }
                                              }
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": ",",
                                            "raw": "\",\""
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "p0"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "t0"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 1,
                                              "raw": "1"
                                            }
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": ",",
                                        "raw": "\",\""
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "p"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "t"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": ",",
                                    "raw": "\",\""
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "t"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": ",",
                                "raw": "\",\""
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": ",",
                            "raw": "\",\""
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "p"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "init": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2"
                          }
                        }
                      ],
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "name": "i"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "tangents"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "length"
                        }
                      }
                    },
                    "update": {
                      "type": "SequenceExpression",
                      "expressions": [
                        {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "prefix": false
                        },
                        {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "argument": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "prefix": false
                        }
                      ]
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "p"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "pi"
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "tangents"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "name": "path"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "+",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "+",
                                          "left": {
                                            "type": "Literal",
                                            "value": "S",
                                            "raw": "\"S\""
                                          },
                                          "right": {
                                            "type": "BinaryExpression",
                                            "operator": "-",
                                            "left": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "p"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            },
                                            "right": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "t"
                                              },
                                              "property": {
                                                "type": "Literal",
                                                "value": 0,
                                                "raw": "0"
                                              }
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": ",",
                                          "raw": "\",\""
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "-",
                                        "left": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "p"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "t"
                                          },
                                          "property": {
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1"
                                          }
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": ",",
                                      "raw": "\",\""
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": ",",
                                  "raw": "\",\""
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "p"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "quad"
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "lp"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "points"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "pi"
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "name": "path"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "+",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Literal",
                                      "value": "Q",
                                      "raw": "\"Q\""
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "p"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 0,
                                          "raw": "0"
                                        }
                                      },
                                      "right": {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "t"
                                            },
                                            "property": {
                                              "type": "Literal",
                                              "value": 0,
                                              "raw": "0"
                                            }
                                          },
                                          "right": {
                                            "type": "Literal",
                                            "value": 2,
                                            "raw": "2"
                                          }
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": 3,
                                          "raw": "3"
                                        }
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": ",",
                                    "raw": "\",\""
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "p"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "t"
                                        },
                                        "property": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 3,
                                      "raw": "3"
                                    }
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": ",",
                                "raw": "\",\""
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "lp"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "value": ",",
                            "raw": "\",\""
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "lp"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "path"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineCardinalTangents"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          },
          {
            "type": "Identifier",
            "name": "tension"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "tangents"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "tension"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p0"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p1"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p2"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "p0"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "p1"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "p1"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "p2"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "p2"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "tangents"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p2"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p0"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "a"
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p2"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p0"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "tangents"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineBasis"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "points"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "points"
                    }
                  ]
                }
              },
              "alternate": null
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "pi"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "x0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "pi"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "pi"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "px"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "name": "x0"
                      },
                      {
                        "type": "Identifier",
                        "name": "x0"
                      },
                      {
                        "type": "Identifier",
                        "name": "x0"
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "points"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "py"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "name": "y0"
                      },
                      {
                        "type": "Identifier",
                        "name": "y0"
                      },
                      {
                        "type": "Identifier",
                        "name": "y0"
                      },
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "pi"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "name": "x0"
                      },
                      {
                        "type": "Literal",
                        "value": ",",
                        "raw": "\",\""
                      },
                      {
                        "type": "Identifier",
                        "name": "y0"
                      },
                      {
                        "type": "Literal",
                        "value": "L",
                        "raw": "\"L\""
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineDot4"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_svg_lineBasisBezier3"
                          },
                          {
                            "type": "Identifier",
                            "name": "px"
                          }
                        ]
                      },
                      {
                        "type": "Literal",
                        "value": ",",
                        "raw": "\",\""
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineDot4"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_svg_lineBasisBezier3"
                          },
                          {
                            "type": "Identifier",
                            "name": "py"
                          }
                        ]
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "points"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "name": "n"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "pi"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "shift"
                        }
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "shift"
                        }
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "path"
                        },
                        {
                          "type": "Identifier",
                          "name": "px"
                        },
                        {
                          "type": "Identifier",
                          "name": "py"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "points"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "pop"
                  }
                },
                "arguments": []
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "L",
                    "raw": "\"L\""
                  },
                  {
                    "type": "Identifier",
                    "name": "pi"
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "join"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineBasisOpen"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "points"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "length"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4"
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "points"
                    }
                  ]
                }
              },
              "alternate": null
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "pi"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "px"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "py"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "pi"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineDot4"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d3_svg_lineBasisBezier3"
                          },
                          {
                            "type": "Identifier",
                            "name": "px"
                          }
                        ]
                      },
                      "right": {
                        "type": "Literal",
                        "value": ",",
                        "raw": "\",\""
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineDot4"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "d3_svg_lineBasisBezier3"
                        },
                        {
                          "type": "Identifier",
                          "name": "py"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "--",
                "argument": {
                  "type": "Identifier",
                  "name": "i"
                },
                "prefix": true
              }
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "n"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "pi"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "shift"
                        }
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "shift"
                        }
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "path"
                        },
                        {
                          "type": "Identifier",
                          "name": "px"
                        },
                        {
                          "type": "Identifier",
                          "name": "py"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "join"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineBasisClosed"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "n"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "pi"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "px"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "py"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Literal",
                  "value": 4,
                  "raw": "4"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "pi"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "n"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "path"
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineDot4"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "d3_svg_lineBasisBezier3"
                        },
                        {
                          "type": "Identifier",
                          "name": "px"
                        }
                      ]
                    },
                    {
                      "type": "Literal",
                      "value": ",",
                      "raw": "\",\""
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineDot4"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "d3_svg_lineBasisBezier3"
                        },
                        {
                          "type": "Identifier",
                          "name": "py"
                        }
                      ]
                    }
                  ]
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "operator": "--",
                "argument": {
                  "type": "Identifier",
                  "name": "i"
                },
                "prefix": true
              }
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "m"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "pi"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "points"
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "%",
                          "left": {
                            "type": "Identifier",
                            "name": "i"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "n"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "shift"
                        }
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "px"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "shift"
                        }
                      },
                      "arguments": []
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "py"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "name": "pi"
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "path"
                        },
                        {
                          "type": "Identifier",
                          "name": "px"
                        },
                        {
                          "type": "Identifier",
                          "name": "py"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "join"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineBundle"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          },
          {
            "type": "Identifier",
            "name": "tension"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "n"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "n"
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "x0"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "points"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "y0"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "points"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "dx"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "n"
                              }
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "x0"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "dy"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "n"
                              }
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "y0"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "p"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "t"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<=",
                      "left": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "argument": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "n"
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "p"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "t"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "n"
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "tension"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "tension"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "x0"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dx"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "p"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "tension"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "p"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "tension"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "y0"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "t"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "dy"
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_svg_lineBasis"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "points"
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineDot4"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "a"
          },
          {
            "type": "Identifier",
            "name": "b"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "a"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0"
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "a"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "a"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "a"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "b"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3"
                    }
                  }
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_lineBasisBezier1"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              ]
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_lineBasisBezier2"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                }
              ]
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_svg_lineBasisBezier3"
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6"
                  }
                },
                {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6"
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineBasisBezier"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "path"
          },
          {
            "type": "Identifier",
            "name": "x"
          },
          {
            "type": "Identifier",
            "name": "y"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "path"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "C",
                    "raw": "\"C\""
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineDot4"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier1"
                      },
                      {
                        "type": "Identifier",
                        "name": "x"
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "value": ",",
                    "raw": "\",\""
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineDot4"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier1"
                      },
                      {
                        "type": "Identifier",
                        "name": "y"
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "value": ",",
                    "raw": "\",\""
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineDot4"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier2"
                      },
                      {
                        "type": "Identifier",
                        "name": "x"
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "value": ",",
                    "raw": "\",\""
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineDot4"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier2"
                      },
                      {
                        "type": "Identifier",
                        "name": "y"
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "value": ",",
                    "raw": "\",\""
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineDot4"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier3"
                      },
                      {
                        "type": "Identifier",
                        "name": "x"
                      }
                    ]
                  },
                  {
                    "type": "Literal",
                    "value": ",",
                    "raw": "\",\""
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineDot4"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_svg_lineBasisBezier3"
                      },
                      {
                        "type": "Identifier",
                        "name": "y"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineSlope"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "p0"
          },
          {
            "type": "Identifier",
            "name": "p1"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "p1"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "p0"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "-",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "p1"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "p0"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineFiniteDifferences"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "j"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p0"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "p1"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "init": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "m"
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_svg_lineSlope"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "p0"
                        },
                        {
                          "type": "Identifier",
                          "name": "p1"
                        }
                      ]
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "j"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "m"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "i"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "name": "d"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "d"
                            },
                            "right": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_svg_lineSlope"
                              },
                              "arguments": [
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "p0"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "p1"
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "p1"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "points"
                                    },
                                    "property": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "i"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "i"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "d"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "m"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineMonotoneTangents"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "tangents"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": []
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "a"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "s"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "m"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineFiniteDifferences"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "points"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "init": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    },
                    "prefix": true
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "j"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "j"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "d"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineSlope"
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "points"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "i"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "points"
                            },
                            "property": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "name": "i"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "abs"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "d"
                          }
                        ]
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "ε"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "m"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "i"
                              }
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "i"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "a"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d"
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "b"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "/",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "i"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d"
                              }
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "s"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "a"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "a"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "b"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "b"
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "Identifier",
                              "name": "s"
                            },
                            "right": {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "s"
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "/",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "*",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "d"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 3,
                                        "raw": "3"
                                      }
                                    },
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "name": "Math"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "sqrt"
                                        }
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "name": "s"
                                        }
                                      ]
                                    }
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "m"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "i"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "a"
                                    }
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "m"
                                    },
                                    "property": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "i"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "s"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "b"
                                    }
                                  }
                                }
                              }
                            ]
                          },
                          "alternate": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "i"
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1"
                  },
                  "prefix": true
                }
              }
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "argument": {
                    "type": "Identifier",
                    "name": "i"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "Identifier",
                  "name": "j"
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "s"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "/",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "min"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "j"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                ]
                              }
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "points"
                              },
                              "property": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "Math"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "max"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "-",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "i"
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  }
                                ]
                              }
                            },
                            "property": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6"
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "m"
                                },
                                "property": {
                                  "type": "Identifier",
                                  "name": "i"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "tangents"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "Identifier",
                                "name": "s"
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            {
                              "type": "LogicalExpression",
                              "operator": "||",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "m"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "s"
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "tangents"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_lineMonotone"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "points"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3"
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "points"
                    }
                  ]
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "name": "points"
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_lineHermite"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "points"
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_svg_lineMonotoneTangents"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "points"
                          }
                        ]
                      }
                    ]
                  }
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  }
}