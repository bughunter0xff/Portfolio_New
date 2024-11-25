interface ContentBlock {
  type: 'paragraph' | 'code' | 'heading';
  content: string;
  language?: string;
  level?: number;
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'oauth2-vulnerability-analysis',
    title: 'Breaking Down OAuth 2.0: Common Vulnerabilities and Mitigation Strategies',
    date: 'March 15, 2024',
    tags: ['OAuth', 'Authentication', 'Web Security'],
    excerpt: 'An in-depth analysis of OAuth 2.0 implementation vulnerabilities and how to protect against them.',
    content: [
      {
        type: 'paragraph',
        content: 'OAuth 2.0 has become the industry standard for API authorization, but its flexibility can lead to security vulnerabilities when implemented incorrectly. In this post, we\'ll examine common OAuth 2.0 security issues and their solutions.'
      },
      {
        type: 'heading',
        content: 'Common Vulnerabilities',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'One of the most critical vulnerabilities in OAuth 2.0 implementations is the improper handling of state parameters, which can lead to CSRF attacks.'
      },
      {
        type: 'code',
        language: 'javascript',
        content: `// Vulnerable implementation
app.get('/oauth/callback', (req, res) => {
  const { code } = req.query;
  // Missing state parameter validation
  exchangeCodeForToken(code);
});

// Secure implementation
app.get('/oauth/callback', (req, res) => {
  const { code, state } = req.query;
  if (!validateState(state)) {
    return res.status(400).send('Invalid state parameter');
  }
  exchangeCodeForToken(code);
});`
      },
      {
        type: 'heading',
        content: 'PKCE Implementation',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Proof Key for Code Exchange (PKCE) is essential for mobile and native applications to prevent authorization code interception attacks.'
      },
      {
        type: 'code',
        language: 'javascript',
        content: `// Generate PKCE challenge
const codeVerifier = generateRandomString(64);
const codeChallenge = base64UrlEncode(
  await crypto.subtle.digest('SHA-256', 
    new TextEncoder().encode(codeVerifier)
  )
);`
      }
    ]
  },
  {
    slug: 'kubernetes-security-hardening',
    title: 'Kubernetes Security Hardening: Best Practices and Common Pitfalls',
    date: 'March 1, 2024',
    tags: ['Kubernetes', 'Cloud Security', 'Container Security'],
    excerpt: 'Essential security measures for hardening Kubernetes clusters in production environments.',
    content: [
      {
        type: 'paragraph',
        content: 'Kubernetes security requires a comprehensive approach covering multiple layers of the container orchestration stack.'
      },
      {
        type: 'heading',
        content: 'Network Policies',
        level: 2
      },
      {
        type: 'code',
        language: 'yaml',
        content: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress`
      },
      {
        type: 'paragraph',
        content: 'Implementing proper network policies is crucial for segmenting communication between pods and limiting potential attack surfaces.'
      },
      {
        type: 'heading',
        content: 'Pod Security Policies',
        level: 2
      },
      {
        type: 'code',
        language: 'yaml',
        content: `apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: restricted
spec:
  privileged: false
  seLinux:
    rule: RunAsAny
  runAsUser:
    rule: MustRunAsNonRoot`
      }
    ]
  },
  {
    slug: 'zero-day-hunting',
    title: 'Zero-Day Vulnerability Hunting: Methodology and Tools',
    date: 'February 28, 2024',
    tags: ['Vulnerability Research', 'Zero-Day', 'Binary Analysis'],
    excerpt: 'A detailed look into the process of discovering zero-day vulnerabilities in modern software.',
    content: [
      {
        type: 'paragraph',
        content: 'Zero-day vulnerability research requires a systematic approach combining static analysis, dynamic testing, and creative thinking.'
      },
      {
        type: 'heading',
        content: 'Static Analysis Techniques',
        level: 2
      },
      {
        type: 'code',
        language: 'python',
        content: `from angr import Project

# Load binary for analysis
proj = Project('target_binary')
cfg = proj.analyses.CFG()

# Find potential vulnerability points
for node in cfg.nodes():
    if "strcpy" in node.name:
        print(f"Potential buffer overflow at {node.addr}")
`
      },
      {
        type: 'heading',
        content: 'Fuzzing Strategy',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Modern fuzzing techniques combine coverage-guided testing with intelligent mutation strategies to uncover complex vulnerabilities.'
      }
    ]
  },
  {
    slug: 'web3-security',
    title: 'Web3 Security: Smart Contract Vulnerabilities and Auditing',
    date: 'February 20, 2024',
    tags: ['Web3', 'Blockchain', 'Smart Contracts'],
    excerpt: 'Essential guide to identifying and preventing smart contract vulnerabilities.',
    content: [
      {
        type: 'paragraph',
        content: 'Smart contract security requires specialized knowledge of blockchain technology and common vulnerability patterns.'
      },
      {
        type: 'heading',
        content: 'Reentrancy Attacks',
        level: 2
      },
      {
        type: 'code',
        language: 'solidity',
        content: `// Vulnerable contract
contract Vulnerable {
    mapping(address => uint) public balances;
    
    function withdraw() public {
        uint bal = balances[msg.sender];
        require(bal > 0);
        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent);
        balances[msg.sender] = 0;
    }
}

// Secure implementation
contract Secure {
    mapping(address => uint) public balances;
    
    function withdraw() public {
        uint bal = balances[msg.sender];
        require(bal > 0);
        balances[msg.sender] = 0;
        (bool sent, ) = msg.sender.call{value: bal}("");
        require(sent);
    }
}`
      }
    ]
  },
  {
    slug: 'api-security-testing',
    title: 'Advanced API Security Testing: Beyond the Basics',
    date: 'February 15, 2024',
    tags: ['API Security', 'Penetration Testing', 'Authentication'],
    excerpt: 'Comprehensive guide to testing API security, including authentication, authorization, and data validation.',
    content: [
      {
        type: 'heading',
        content: 'JWT Token Analysis',
        level: 2
      },
      {
        type: 'code',
        language: 'python',
        content: `import jwt

# Decode JWT without verification
token = "eyJ0...";
decoded = jwt.decode(token, verify=False)

# Check for algorithm confusion
header = jwt.get_unverified_header(token)
if header['alg'] == 'none':
    print("Vulnerable to algorithm confusion")`
      },
      {
        type: 'heading',
        content: 'GraphQL Security',
        level: 2
      },
      {
        type: 'code',
        language: 'graphql',
        content: `# Introspection query to expose schema
query IntrospectionQuery {
  __schema {
    types {
      name
      fields {
        name
        type {
          name
        }
      }
    }
  }
}`
      }
    ]
  },
  {
    slug: 'cloud-security-architecture',
    title: 'Designing Secure Cloud Architecture: A Defense-in-Depth Approach',
    date: 'February 10, 2024',
    tags: ['Cloud Security', 'Architecture', 'AWS'],
    excerpt: 'Best practices for designing secure cloud infrastructure using multiple security layers.',
    content: [
      {
        type: 'heading',
        content: 'Network Segmentation',
        level: 2
      },
      {
        type: 'code',
        language: 'hcl',
        content: `# Terraform configuration for VPC segmentation
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "production"
  }
}

resource "aws_subnet" "private" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}`
      },
      {
        type: 'heading',
        content: 'IAM Best Practices',
        level: 2
      },
      {
        type: 'code',
        language: 'json',
        content: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-bucket",
        "arn:aws:s3:::my-bucket/*"
      ],
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": "192.0.2.0/24"
        }
      }
    }
  ]
}`
      }
    ]
  }
];