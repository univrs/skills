// Univrs Phase 3-4 Swarm Execution Plan
// Interactive visualization of recommended swarm configurations

import React, { useState } from 'react';
import { CheckCircle, Circle, Clock, Play, FileCode, Network, Database, Zap, AlertTriangle, ChevronRight, Star, ExternalLink } from 'lucide-react';

const SwarmExecutionPlan = () => {
  const [activePhase, setActivePhase] = useState('phase3');
  const [selectedConfig, setSelectedConfig] = useState('phase3-compilation');
  
  const configurations = [
    {
      id: 'phase3-compilation',
      name: 'phase3-compilation-pipeline.yaml',
      phase: 'phase3',
      rating: 5,
      status: 'recommended',
      timeline: '10-15 days',
      agents: 5,
      lines: 1606,
      description: 'Complete MLIR pipeline with production-ready Rust implementation code',
      deliverables: ['MLIR dialect', 'HIR→MLIR lowering', 'WASM emitter', 'Spirit compiler', 'vudo build integration']
    },
    {
      id: 'phase4-hyphal',
      name: 'phase4-hyphal-network.yaml',
      phase: 'phase4',
      rating: 5,
      status: 'queue',
      timeline: '22 days',
      agents: 10,
      lines: 1003,
      description: 'Full ENR implementation with chaos testing framework',
      deliverables: ['univrs-enr crate', 'Entropy subsystem', 'Nexus topology', 'Revival pool', 'Chaos testing']
    },
    {
      id: 'dol-v050-swarm',
      name: 'dol-v050-swarm.yaml',
      phase: 'phase3',
      rating: 4,
      status: 'alternative',
      timeline: '~14 days',
      agents: 4,
      lines: 537,
      description: 'Research-first approach with Prost-AI skills and MCP server',
      deliverables: ['HIR analysis', 'DOL skill', 'DOL-MCP server', 'E2E tests']
    },
    {
      id: 'roadmap',
      name: 'claude-flow-phase-3-4.yaml',
      phase: 'planning',
      rating: 3,
      status: 'reference',
      timeline: 'Q1-Q4 2025',
      agents: 0,
      lines: 700,
      description: 'Master planning document - NOT executable swarm',
      deliverables: ['Milestone tracking', 'Success metrics', 'Timeline coordination']
    }
  ];
  
  const phases = [
    { id: 'phase2', name: 'Phase 2', status: 'complete', items: ['vudo_vm', 'spirit_runtime', 'vudo_cli', 'DOL v0.4.0 + HIR'] },
    { id: 'phase3', name: 'Phase 3', status: 'current', items: ['MLIR dialect', 'HIR→MLIR', 'MLIR→WASM', '.dol→.spirit'] },
    { id: 'phase4', name: 'Phase 4', status: 'future', items: ['P2P Spirits', 'Imaginarium', 'Migration', 'Hyphal Network'] }
  ];
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'recommended': return 'bg-green-500';
      case 'queue': return 'bg-blue-500';
      case 'alternative': return 'bg-yellow-500';
      case 'reference': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };
  
  const getStatusBadge = (status) => {
    switch(status) {
      case 'recommended': return { text: 'USE NOW', class: 'bg-green-100 text-green-800' };
      case 'queue': return { text: 'QUEUE', class: 'bg-blue-100 text-blue-800' };
      case 'alternative': return { text: 'ALTERNATIVE', class: 'bg-yellow-100 text-yellow-800' };
      case 'reference': return { text: 'REFERENCE ONLY', class: 'bg-gray-100 text-gray-800' };
      default: return { text: status, class: 'bg-gray-100' };
    }
  };
  
  const selected = configurations.find(c => c.id === selectedConfig);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Claude-Flow Swarm Configuration Analysis
          </h1>
          <p className="text-purple-300">Univrs.io / VUDO OS Phase 3-4 Roadmap</p>
        </div>
        
        {/* Phase Timeline */}
        <div className="bg-white/5 backdrop-blur rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Project Timeline</h2>
          <div className="flex items-center justify-between relative">
            {phases.map((phase, idx) => (
              <div key={phase.id} className="flex-1 relative">
                <div 
                  className={`flex flex-col items-center cursor-pointer transition-all ${activePhase === phase.id ? 'scale-105' : ''}`}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    phase.status === 'complete' ? 'bg-green-500' :
                    phase.status === 'current' ? 'bg-purple-500 ring-4 ring-purple-300/50 animate-pulse' :
                    'bg-slate-600'
                  }`}>
                    {phase.status === 'complete' ? <CheckCircle className="w-6 h-6 text-white" /> :
                     phase.status === 'current' ? <Play className="w-6 h-6 text-white" /> :
                     <Circle className="w-6 h-6 text-white" />}
                  </div>
                  <span className={`font-medium ${
                    phase.status === 'current' ? 'text-purple-300' : 'text-slate-400'
                  }`}>{phase.name}</span>
                  <span className={`text-xs ${
                    phase.status === 'complete' ? 'text-green-400' :
                    phase.status === 'current' ? 'text-purple-400' :
                    'text-slate-500'
                  }`}>
                    {phase.status === 'complete' ? '✓ Complete' :
                     phase.status === 'current' ? '🔄 Current' : '🔮 Future'}
                  </span>
                </div>
                {idx < phases.length - 1 && (
                  <div className={`absolute top-6 left-1/2 w-full h-0.5 ${
                    phase.status === 'complete' ? 'bg-green-500' : 'bg-slate-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          {/* Phase Details */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <div className="grid grid-cols-4 gap-2">
              {phases.find(p => p.id === activePhase)?.items.map((item, idx) => (
                <div key={idx} className="bg-white/10 rounded px-3 py-2 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Configurations Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {configurations.map((config) => (
            <div 
              key={config.id}
              onClick={() => setSelectedConfig(config.id)}
              className={`bg-white/5 backdrop-blur rounded-xl p-5 cursor-pointer transition-all border-2 ${
                selectedConfig === config.id 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-transparent hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileCode className="w-5 h-5 text-purple-400" />
                  <span className="font-mono text-sm text-slate-300 truncate max-w-[200px]">
                    {config.name}
                  </span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusBadge(config.status).class}`}>
                  {getStatusBadge(config.status).text}
                </span>
              </div>
              
              <p className="text-sm text-slate-400 mb-4 line-clamp-2">{config.description}</p>
              
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {config.timeline}
                </div>
                <div className="flex items-center gap-1">
                  <Network className="w-3 h-3" />
                  {config.agents} agents
                </div>
                <div className="flex items-center gap-1">
                  <FileCode className="w-3 h-3" />
                  {config.lines} lines
                </div>
              </div>
              
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < config.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Selected Configuration Details */}
        {selected && (
          <div className="bg-white/5 backdrop-blur rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{selected.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(selected.status).class}`}>
                {getStatusBadge(selected.status).text}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-2">Deliverables</h4>
                <div className="space-y-2">
                  {selected.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <ChevronRight className="w-4 h-4 text-purple-400" />
                      {d}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-2">Execution Command</h4>
                {selected.agents > 0 ? (
                  <code className="block bg-black/30 rounded p-3 text-sm text-green-400 font-mono overflow-x-auto">
                    npx claude-flow@alpha swarm \<br/>
                    &nbsp;&nbsp;"read {selected.name} --workflow {
                      selected.id === 'phase3-compilation' ? 'compile-pipeline' :
                      selected.id === 'phase4-hyphal' ? 'hyphal-enr' :
                      selected.id === 'dol-v050-swarm' ? 'compile-pipeline' : 'N/A'
                    }"
                  </code>
                ) : (
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3 flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-yellow-300">
                      This is a planning document, not an executable swarm configuration.
                      Use for reference only.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* ENR Architecture Reference */}
        <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">ENR Architecture Layer</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-1">⚡</div>
              <div className="font-medium text-white">Entropy</div>
              <div className="text-xs text-slate-400">Transaction cost</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-1">🌐</div>
              <div className="font-medium text-white">Nexus</div>
              <div className="text-xs text-slate-400">Hub market-making</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-1">♻️</div>
              <div className="font-medium text-white">Revival</div>
              <div className="text-xs text-slate-400">Resource recycling</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-purple-300 text-center italic">
            "The network is not pipes. It is a living market."
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwarmExecutionPlan;
